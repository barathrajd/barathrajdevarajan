import { mkdirSync, readFileSync, readdirSync, unlinkSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const targetUrl =
  process.argv[2] || process.env.LH_URL || 'http://localhost:3000';
const lighthouseBin = process.env.LIGHTHOUSE_BIN || 'lighthouse';

const now = new Date();
const timestamp =
  [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('') +
  '-' +
  [
    String(now.getHours()).padStart(2, '0'),
    String(now.getMinutes()).padStart(2, '0'),
    String(now.getSeconds()).padStart(2, '0'),
  ].join('');

const url = new URL(targetUrl);
const hostSlug = `${url.hostname}${url.port ? `-${url.port}` : ''}`;
const reportsDir = resolve('reports', 'lighthouse');
mkdirSync(reportsDir, { recursive: true });

function clearOldReports() {
  const entries = readdirSync(reportsDir);
  for (const entry of entries) {
    if (entry.endsWith('.report.html') || entry.endsWith('.report.json')) {
      unlinkSync(resolve(reportsDir, entry));
    }
  }
}

function routeToSlug(routePath) {
  if (routePath === '/') return 'home';
  return routePath
    .replace(/^\/+/, '')
    .replace(/\/+/g, '-')
    .replace(/[^a-zA-Z0-9-_]/g, '-');
}

function discoverBlogPostRoutes() {
  const filePath = resolve('src', 'data', 'blog-posts.ts');
  const source = readFileSync(filePath, 'utf8');
  const idMatches = [...source.matchAll(/id:\s*'([^']+)'/g)];
  return idMatches.map((match) => `/blog/${match[1]}`);
}

function discoverRoutes() {
  const routes = new Set(['/', '/blog']);
  for (const postRoute of discoverBlogPostRoutes()) {
    routes.add(postRoute);
  }
  return [...routes];
}

function runAudit(routePath, mode, extraArgs = []) {
  const routeUrl = new URL(routePath, targetUrl).toString();
  const routeSlug = routeToSlug(routePath);
  const outputBase = resolve(
    reportsDir,
    `${hostSlug}-${routeSlug}-${timestamp}-${mode}`,
  );

  const args = [
    routeUrl,
    '--quiet',
    '--output',
    'html',
    '--output-path',
    outputBase,
    '--chrome-flags=--headless=new',
    ...extraArgs,
  ];

  const result = spawnSync(lighthouseBin, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }

  return {
    route: routePath,
    url: routeUrl,
    html: `${outputBase}.report.html`,
    json: `${outputBase}.report.json`,
  };
}

console.log(`Running Lighthouse reports for ${targetUrl}`);
clearOldReports();

const routes = discoverRoutes();
console.log(`Discovered ${routes.length} routes`);

const outputs = [];
for (const routePath of routes) {
  console.log(`\nRoute: ${routePath}`);
  outputs.push(runAudit(routePath, 'mobile', ['--form-factor=mobile']));
  outputs.push(runAudit(routePath, 'desktop', ['--preset=desktop']));
}

console.log('\nSaved reports:');
for (const report of outputs) {
  console.log(`- ${report.route} (${report.url})`);
  console.log(`  HTML: ${report.html}`);
  console.log(`  JSON: ${report.json}`);
}
