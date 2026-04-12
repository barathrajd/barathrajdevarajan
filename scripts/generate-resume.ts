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
    --ink: #18181A;
    --ink-2: #46464A;
    --ink-3: #8A8A90;
    --rule: #DDDDD8;
    --accent: #1D9E75;
    --accent-dim: #0F6E56;
    --page: #FAFAF7;
  }

  html { background: #E5E4DF; }

  body {
    font-family: 'DM Mono', monospace;
    background: var(--page);
    color: var(--ink);
    font-size: 10.5px;
    line-height: 1.65;
    max-width: 840px;
    margin: 32px auto;
    padding: 52px 56px;
    box-shadow: 0 2px 40px rgba(0,0,0,0.13);
    position: relative;
  }



  /* HEADER */
  .header {
    padding-bottom: 18px;
    border-bottom: 1.5px solid var(--ink);
    margin-bottom: 0;
  }

  h1 {
    font-family: 'DM Mono', monospace;
    font-size: 32px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.5px;
  }

  h1 em {
    font-style: normal;
    color: var(--accent);
  }

  .tagline {
    font-size: 10px;
    color: var(--ink-2);
    letter-spacing: 0.03em;
    margin-top: 8px;
    max-width: 100%;
    line-height: 1.5;
    font-weight: 500;
  }

  .contact-line {
    font-size: 9.5px;
    color: var(--ink-3);
    margin-top: 6px;
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    align-items: center;
  }

  .contact-line a { color: var(--accent-dim); text-decoration: none; }
  .contact-line span { color: var(--rule); }  /* SECTION STYLING */
  .section {
    padding: 12px 0;
    border-top: 0.5px solid var(--rule);
  }

  .section-label {
    font-size: 9.5px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 8px;
  }

  /* ABOUT */
  .about-list { list-style: none; }

  .about-list li {
    padding-left: 14px;
    position: relative;
    color: var(--ink-2);
    margin-bottom: 3px;
    font-size: 9.5px;
    line-height: 1.5;
  }

  .about-list li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-size: 8px;
    top: 0px;
  }

  /* EXPERIENCE */
  .job { margin-bottom: 12px; }
  .job:last-child { margin-bottom: 0; }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 1px;
  }

  .job-role {
    font-size: 10.5px;
    font-weight: 500;
  }

  .job-period {
    font-size: 8.5px;
    color: var(--ink-3);
    white-space: nowrap;
  }

  .job-company {
    font-size: 9px;
    color: var(--accent-dim);
    font-weight: 500;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }

  .job-location { color: var(--ink-3); font-weight: 400; font-size: 8.5px; }

  .job ul { list-style: none; }

  .job ul li {
    padding-left: 14px;
    position: relative;
    color: var(--ink-2);
    margin-bottom: 2px;
    font-size: 9px;
  }

  .job ul li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-size: 8px;
    top: 2px;
  }

  /* SKILLS */
  .skills-grid {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     gap: 10px 24px;
  }
  .skill-group { margin-bottom: 0; }

  .skill-category {
    font-size: 8px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-3);
    margin-bottom: 4px;
    font-weight: 500;
  }

  .chips { display: flex; flex-wrap: wrap; gap: 4px; }

  .chip {
    font-size: 8px;
    padding: 1px 6px;
    border: 0.5px solid var(--rule);
    color: var(--ink-2);
    border-radius: 2px;
  }

  /* PROJECTS */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 24px;
  }
  .project { margin-bottom: 0; }

  .project-title {
    font-size: 10.5px;
    font-weight: 500;
    margin-bottom: 1px;
  }

  .project-title a {
    color: var(--ink);
    text-decoration: none;
    border-bottom: 0.5px solid var(--rule);
  }

  .project-short { color: var(--ink-2); margin-bottom: 2px; font-size: 9px; }

  .project-long {
    color: var(--ink-3);
    font-size: 8.5px;
    margin-bottom: 4px;
    line-height: 1.5;
  }

  .tags { display: flex; flex-wrap: wrap; gap: 3px; }

  .tag {
    font-size: 8px;
    padding: 0px 5px;
    border: 0.50px solid var(--rule);
    color: var(--ink-3);
    border-radius: 2px;
  }

  /* EDUCATION */
  .edu-grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 12px 24px;
  }
  .edu { margin-bottom: 0; }

  .edu-degree {
    font-size: 10.5px;
    font-weight: 500;
  }

  .edu-meta { font-size: 9px; color: var(--ink-3); margin-top: 1px; }

  @media print {
    html { background: white; }
    body { 
      margin: 0; 
      padding: 0.4in 0.5in; 
      box-shadow: none; 
      max-width: 100%;
      font-size: 9.5px;
    }
    .header { padding-bottom: 12px; border-bottom: 1.5px solid var(--ink); }
    h1 { font-size: 24px; }
    .section { padding: 10px 0; break-inside: avoid; }
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
    <a href="https://github.com/barathrajd" target="_blank">https://github.com/barathrajd</a>
    <span>/</span>
    <a href="https://linkedin.com/in/barathrajd" target="_blank">https://linkedin.com/in/barathrajd</a>
  </div>
</header>

<main>

  <!-- ABOUT -->
  <section class="section">
    <h2 class="section-label">About</h2>
    <ul class="about-list">
      ${personal.about.map((item) => `<li>${item}</li>`).join('\n      ')}
    </ul>
  </section>

  <!-- EXPERIENCE -->
  <section class="section">
    <h2 class="section-label">Experience</h2>
    <div>
    ${experience
      .map(
        (job) => `
    <div class="job">
      <div class="job-header">
        <span class="job-role">${job.role}</span>
        <span class="job-period">${job.period}</span>
      </div>
      <div class="job-company">${job.company} ${job.location ? `<span class="job-location">· ${job.location}</span>` : ''}</div>
      <ul>
        ${job.description?.map((desc) => `<li>${desc}</li>`).join('\n        ')}
      </ul>
    </div>`,
      )
      .join('\n')}
    </div>
  </section>

  <!-- SKILLS -->
  <section class="section">
    <h2 class="section-label">Technical Stack</h2>
    <div class="skills-grid">
      ${skills
        .map(
          (group) => `
      <div class="skill-group">
        <div class="skill-category">${group.title}</div>
        <div class="chips">
          ${group.skills.map((skill) => `<span class="chip">${skill.name}</span>`).join('\n        ')}
        </div>
      </div>`,
        )
        .join('\n')}
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="section">
    <h2 class="section-label">Projects</h2>
    <div class="projects-grid">
      ${projects
        .map(
          (proj) => `
      <div class="project">
        <div class="project-title">
          <a href="${proj.githubUrl}" target="_blank">${proj.title}</a>
        </div>
        <div class="project-short">${proj.description}</div>
        <div class="project-long">${proj.longDescription}</div>
        <div class="tags">
          ${proj.tags.map((tag) => `<span class="tag">${tag}</span>`).join('\n        ')}
        </div>
      </div>`,
        )
        .join('\n')}
    </div>
  </section>

  <!-- EDUCATION -->
  <section class="section">
    <h2 class="section-label">Education</h2>
    <div class="edu-grid">
      ${education
        .map(
          (edu) => `
      <div class="edu">
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-meta">${edu.institution} · ${edu.period}</div>
      </div>`,
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
