import fs from 'node:fs';
import path from 'node:path';
import chromium from '@sparticuz/chromium';
import puppeteer, { type Browser } from 'puppeteer-core';
import { portfolioData } from '../src/data/portfolio';
import type { PortfolioData } from '../src/types/portfolio';

const outputPath = path.resolve(process.cwd(), 'public/resume.html');
const pdfPath = path.resolve(process.cwd(), 'public/Barathraj D.pdf');

const generateHTML = (data: PortfolioData) => {
  const { email, personal, experience, education, skills, projects, contact } =
    data;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${personal.name.replace('Devarajan', 'D')} — Resume</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #000000;
    --ink-2: #333333;
    --ink-3: #555555;
    --rule: #cccccc;
    --page: #ffffff;
  }

  html { background: #f0f0f0; }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: var(--page);
    color: var(--ink);
    font-size: 10px;
    line-height: 1.5;
    max-width: 800px;
    margin: 20px auto;
    padding: 40px 50px;
    position: relative;
  }

  /* HEADER */
  .header {
    padding-bottom: 12px;
    margin-bottom: 16px;
    border-bottom: 2px solid var(--ink);
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  h1 em {
    font-style: normal;
    color: var(--ink);
  }

  .tagline {
    font-size: 11px;
    font-weight: 600;
    color: var(--ink-2);
    margin-top: 4px;
  }

  .contact-line {
    font-size: 9.5px;
    color: var(--ink-2);
    margin-top: 6px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
  }

  .contact-line a { color: var(--ink); text-decoration: none; border-bottom: 0.5px solid transparent; }
  .contact-line a:hover { border-bottom-color: var(--ink); }
  .contact-line span { color: var(--rule); }

  /* SECTION STYLING */
  .section {
    padding: 12px 0;
  }

  .section-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--ink);
    border-bottom: 1px solid var(--ink);
    margin-bottom: 8px;
    padding-bottom: 2px;
  }

  /* LISTS */
  ul { list-style: none; }
  li {
    padding-left: 14px;
    position: relative;
    color: var(--ink);
    margin-bottom: 3px;
    font-size: 9.5px;
  }
  li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--ink);
  }

  /* EXPERIENCE */
  .job { margin-bottom: 12px; }
  .job:last-child { margin-bottom: 0; }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2px;
  }

  .job-role {
    font-size: 11px;
    font-weight: 700;
  }

  .job-period {
    font-size: 9.5px;
    font-weight: 500;
    color: var(--ink-2);
  }

  .job-company-meta {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    font-weight: 600;
    color: var(--ink-2);
    margin-bottom: 6px;
  }

  .job-location { font-weight: 400; font-style: italic; }

  /* SKILLS */
  .skills-container {
     display: flex;
     flex-direction: column;
     gap: 6px;
  }
  .skill-group { display: flex; gap: 8px; }
  .skill-category {
    font-weight: 700;
    min-width: 160px;
    font-size: 9.5px;
  }
  .skill-list {
    color: var(--ink-2);
    font-size: 9.5px;
  }

  /* PROJECTS */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .project-title {
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 2px;
  }
  .project-short { font-weight: 600; font-size: 9.5px; margin-bottom: 2px; }
  .project-long { font-size: 9px; color: var(--ink-2); }

  /* EDUCATION */
  .edu-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .edu-degree { font-weight: 700; font-size: 11px; }
  .edu-inst { font-weight: 500; font-size: 10px; }

  @media print {
    html { background: white; }
    body { 
      margin: 0; 
      padding: 0.5in; 
      max-width: 100%;
    }
    .section { break-inside: avoid; }
  }
</style>
</head>
<body>



<header class="header">
  <h1>${personal.name.split(' ').slice(0, -1).join(' ')} <em>${personal.name.split(' ').pop()}</em></h1>
  <p class="tagline">${personal.tagline}</p>
  <div class="contact-line">
    <a href="mailto:${email}" target="_blank">${email}</a>
    <span>/</span>
    <a href="https://barathrajdevarajan.dev" target="_blank">barathrajdevarajan.dev</a>
    <span>/</span>
    <a href="https://github.com/barathrajd" target="_blank">github.com/barathrajd</a>
    <span>/</span>
    <a href="https://linkedin.com/in/barathrajd" target="_blank">linkedin.com/in/barathrajd</a>
    <span>/</span>
    Bengaluru, KA, India
  </div>
</header>

<main>

  <!-- PROFESSIONAL SUMMARY -->
  <section class="section">
    <h2 class="section-label">Professional Summary</h2>
    <ul>
      ${personal.about.map((item) => `<li>${item}</li>`).join('\n      ')}
    </ul>
  </section>

  <!-- WORK EXPERIENCE -->
  <section class="section">
    <h2 class="section-label">Work Experience</h2>
    <div>
    ${experience
      .map(
        (job) => `
    <div class="job">
      <div class="job-header">
        <span class="job-role">${job.role}</span>
        <span class="job-period">${job.period}</span>
      </div>
      <div class="job-company-meta">
        <span>${job.company}</span>
        ${job.location ? `<span class="job-location">${job.location}</span>` : ''}
      </div>
      <ul>
        ${job.description?.map((desc) => `<li>${desc}</li>`).join('\n        ')}
      </ul>
    </div>`,
      )
      .join('\n')}
    </div>
  </section>

  <!-- TECHNICAL SKILLS -->
  <section class="section">
    <h2 class="section-label">Technical Skills</h2>
    <div class="skills-container">
      ${skills
        .map(
          (group) => `
      <div class="skill-group">
        <span class="skill-category">${group.title}:</span>
        <span class="skill-list">${group.skills.map((skill) => skill.name).join(', ')}</span>
      </div>`,
        )
        .join('\n')}
    </div>
  </section>

  <section class="section">
    <h2 class="section-label">Projects</h2>
    <div class="projects-grid">
      ${projects
        .map(
          (proj) => `
      <div class="project">
        <div class="project-title">${proj.title}</div>
        <div class="project-short">${proj.description}</div>
        <div class="project-long">${proj.longDescription}</div>
        <div style="font-size: 8.5px; margin-top: 4px; font-weight: 600;">Technologies: ${proj.tags.join(', ')}</div>
      </div>`,
        )
        .join('\n')}
    </div>
  </section>

  <!-- EDUCATION -->
  <section class="section">
    <h2 class="section-label">Education</h2>
    <div>
      ${education
        .map(
          (edu) => `
      <div class="edu-item">
        <span class="edu-degree">${edu.degree}</span>
        <span class="job-period">${edu.period}</span>
      </div>
      <div class="edu-inst">${edu.institution}</div>`,
        )
        .join('\n')}
    </div>
  </section>

</main>
</body>
</html>`;

  fs.writeFileSync(outputPath, html);
  console.log('Resume updated at public/resume.html');
  return html;
};

const generatePDF = async (html: string) => {
  try {
    let browser: Browser;
    const isProd = process.env.VERCEL === '1' || process.platform === 'linux';

    if (isProd) {
      console.log(
        'Production environment detected. Using sparticuz/chromium...',
      );
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const chromiumAny = chromium as any;
      browser = await puppeteer.launch({
        args: chromiumAny.args,
        defaultViewport: chromiumAny.defaultViewport,
        executablePath: await chromiumAny.executablePath(),
        headless: chromiumAny.headless,
      });
    } else {
      console.log('Local environment detected. Using standard puppeteer...');
      // Dynamic import to avoid issues if puppeteer isn't fully set up for core
      const localPuppeteer = (await import('puppeteer')).default;
      browser = await localPuppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
    }

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: false,
      scale: 0.92,
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
      },
    });
    await browser.close();
    console.log(`Resume PDF updated at ${pdfPath}`);
  } catch (error) {
    console.error('Failed to generate PDF:', error);
  }
};

const run = async () => {
  const html = generateHTML(portfolioData);
  await generatePDF(html);
};

run();
