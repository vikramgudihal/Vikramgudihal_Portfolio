/**
 * ==============================================================================
 * ATS RESUME & CV AUTO-GENERATOR
 * ==============================================================================
 * Dynamically compiles real-time data from PORTFOLIO_DATA into a 100% ATS-friendly
 * single-column format rendered in Times New Roman.
 *
 * 1. ATS Resume: Perfectly calibrated 1-PAGE fit featuring latest projects
 * 2. Comprehensive CV: Multi-page complete documentation with all 17+ certificates
 * ==============================================================================
 */

(function () {
  'use strict';

  function getData() {
    if (typeof window !== 'undefined' && window.PORTFOLIO_DATA) {
      return window.PORTFOLIO_DATA;
    }
    return null;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * 1. GENERATE STRICT 1-PAGE ATS RESUME HTML
   * Calibrated with exact compact line-heights and spacing to guarantee 1-page fit.
   * Features the LATEST projects (SecurePass, Phishing Analyzer, Placement Cell, SolarGuard).
   */
  function generateAtsResumeHtml(data) {
    const p = data?.personal || {};
    const contact = p.contact || {};
    const eduList = data?.education || [];
    const expList = data?.experience || [];

    return `
      <div class="ats-paper ats-resume-doc" id="atsDocumentPaper">
        <!-- HEADER -->
        <header class="ats-doc-header">
          <h1 class="ats-name">${escapeHtml(p.name || 'VIKRAM GUDIHAL')}</h1>
          <div class="ats-contact-line">
            <span>${escapeHtml(contact.location || 'Hubli-Dharwad, Karnataka, India')}</span>
            <span class="ats-sep">•</span>
            <span>+91 7022367376</span>
            <span class="ats-sep">•</span>
            <a href="mailto:${escapeHtml(contact.email || 'vikramgudihal@gmail.com')}">${escapeHtml(contact.email || 'vikramgudihal@gmail.com')}</a>
            <span class="ats-sep">•</span>
            <a href="https://linkedin.com/in/vikramgudihal" target="_blank" rel="noopener">linkedin.com/in/vikramgudihal</a>
            <span class="ats-sep">•</span>
            <a href="https://github.com/student-vG" target="_blank" rel="noopener">github.com/student-vG</a>
          </div>
        </header>

        <!-- PROFESSIONAL SUMMARY -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">PROFESSIONAL SUMMARY</h2>
          <p class="ats-paragraph">
            Motivated MCA student, Frontend Developer, and Cybersecurity Enthusiast (SOC Analyst L1) with hands-on experience building performant web applications, implementing defensive security concepts, and automating threat detection heuristics. Winner of the HackLite-2026 24-hour Hackathon. Strong foundation in software engineering with an 8.46 BCA CGPA.
          </p>
        </div>

        <!-- EDUCATION -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">EDUCATION</h2>
          ${eduList.slice(0, 2).map(edu => `
            <div class="ats-entry">
              <div class="ats-row">
                <span class="ats-entry-title"><strong>${escapeHtml(edu.degree)}</strong> — ${escapeHtml(edu.institution)}</span>
                <span class="ats-entry-date">${escapeHtml(edu.period)}</span>
              </div>
              <div class="ats-sub-row">
                <span><em>${escapeHtml(edu.university)}</em></span>
                <span class="ats-badge-text"><strong>${escapeHtml(edu.score)}</strong></span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- TECHNICAL SKILLS -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">TECHNICAL SKILLS</h2>
          <div class="ats-skills-block">
            <p class="ats-skill-line">
              <strong>Programming &amp; Scripting:</strong> JavaScript (ES6+), Python, Java, C, PHP, Bash Shell Scripting, SQL
            </p>
            <p class="ats-skill-line">
              <strong>Frontend Development:</strong> HTML5 Semantic Markup, Modern CSS3, Responsive Design, DOM Architecture, Web UX Standards
            </p>
            <p class="ats-skill-line">
              <strong>Cybersecurity &amp; SOC Operations:</strong> SOC Level 1 Incident Triage, SIEM Concepts, Threat Heuristics, Log Analysis, Vulnerability Assessment, Linux/Kali
            </p>
            <p class="ats-skill-line">
              <strong>Developer Tooling &amp; Cloud:</strong> Git, GitHub, Microsoft Azure, VS Code, Netlify, Vercel, MongoDB Atlas, XAMPP, Apache
            </p>
          </div>
        </div>

        <!-- PROFESSIONAL EXPERIENCE -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">PROFESSIONAL EXPERIENCE</h2>
          ${expList.slice(0, 1).map(exp => `
            <div class="ats-entry">
              <div class="ats-row">
                <span class="ats-entry-title"><strong>${escapeHtml(exp.role)}</strong> — ${escapeHtml(exp.company)}</span>
                <span class="ats-entry-date">${escapeHtml(exp.period)}</span>
              </div>
              <div class="ats-sub-row">
                <span><em>${escapeHtml(exp.location)}</em> | ${escapeHtml(exp.type)}</span>
              </div>
              <ul class="ats-bullet-list">
                <li>Collaborated on building responsive, mobile-first web modules and streamlined front-end assets for client deliverables.</li>
                <li>Diagnosed and patched cross-browser rendering inconsistencies, improving page load efficiency and user retention.</li>
              </ul>
            </div>
          `).join('')}
        </div>

        <!-- LATEST TECHNICAL PROJECTS -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">KEY TECHNICAL PROJECTS (LATEST BUILDS)</h2>
          
          <!-- 1. SecurePass -->
          <div class="ats-entry">
            <div class="ats-row">
              <span class="ats-entry-title"><strong>SecurePass</strong> — <em>Password Security &amp; Strength Analyzer</em></span>
              <span class="ats-entry-date">Python, JavaScript, Unit Testing, Security Heuristics</span>
            </div>
            <ul class="ats-bullet-list">
              <li>Engineered a privacy-focused password strength checker analyzing character variety, entropy, dictionary words, and sequential patterns with real-time feedback.</li>
            </ul>
          </div>

          <!-- 2. Phishing Awareness Analyzer -->
          <div class="ats-entry">
            <div class="ats-row">
              <span class="ats-entry-title"><strong>Phishing Awareness Analyzer</strong> — <em>SOC Threat Intelligence &amp; Email Analysis Tool</em></span>
              <span class="ats-entry-date">Python Flask, HTML5, CSS3, JavaScript, Heuristics</span>
            </div>
            <ul class="ats-bullet-list">
              <li>Built a Flask-based security application evaluating synthetic emails and URLs for indicators of compromise (IoC) with automated heuristic risk scoring.</li>
            </ul>
          </div>

          <!-- 3. Placement Cell Management System -->
          <div class="ats-entry">
            <div class="ats-row">
              <span class="ats-entry-title"><strong>Placement Cell Management System</strong> — <em>Campus Drive &amp; Recruiter Portal</em></span>
              <span class="ats-entry-date">Flask, MongoDB Atlas, PWA, Role-Based Access</span>
            </div>
            <ul class="ats-bullet-list">
              <li>Architected an institutional platform streamlining placement opportunities, student registrations, recruiter approvals, and drive announcements.</li>
            </ul>
          </div>

          <!-- 4. SolarGuard -->
          <div class="ats-entry">
            <div class="ats-row">
              <span class="ats-entry-title"><strong>SolarGuard</strong> — <em>ML Solar Telemetry &amp; Anomaly Detection Dashboard</em></span>
              <span class="ats-entry-date">Python, Machine Learning, Data Preprocessing</span>
            </div>
            <ul class="ats-bullet-list">
              <li>Developed an applied ML pipeline comparing expected vs. actual solar panel telemetry to identify generation bottlenecks and environmental anomalies.</li>
            </ul>
          </div>
        </div>

        <!-- KEY HONORS & CERTIFICATIONS -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">KEY HONORS &amp; VERIFIED CERTIFICATIONS</h2>
          <ul class="ats-bullet-list">
            <li><strong>🏆 Winner — HackLite-2026 (24-Hour Web Dev Hackathon):</strong> Awarded 1st place for full-stack excellence, technical problem solving, and rapid prototype delivery | <em>Chetan Business School (The CodeCrafters Club), Jan 2026</em></li>
            <li><strong>Microsoft Azure (25-Hour Course Completion):</strong> Verified completion in cloud infrastructure, services, and security | <em>Microsoft Learn &amp; FICE (Gunjan Patel, Director), Jan 2026</em></li>
            <li><strong>SOC Analyst Career Demand in 2026:</strong> Threat intelligence, log parsing, incident handling, and SOC Tier 1 workflows | <em>WsCube Tech, Aug 2026</em></li>
            <li><strong>Career in DevOps, Cloud Computing &amp; Cyber Security:</strong> Scalable deployments, CI/CD, and security posture | <em>Scaler Masterclass, Jun 2026</em></li>
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * 2. GENERATE COMPREHENSIVE TECHNICAL CV HTML (MULTI-PAGE)
   * Complete documentation with ALL 16 verified certificates and full project history.
   */
  function generateAtsCvHtml(data) {
    const p = data?.personal || {};
    const contact = p.contact || {};
    const eduList = data?.education || [];
    const expList = data?.experience || [];
    const projList = data?.projects || [];
    const certList = data?.certificates || [];

    return `
      <div class="ats-paper ats-cv-doc" id="atsDocumentPaper">
        <!-- HEADER -->
        <header class="ats-doc-header">
          <h1 class="ats-name">${escapeHtml(p.name || 'VIKRAM GUDIHAL')}</h1>
          <div class="ats-headline"><strong>CURRICULUM VITAE</strong> — Cybersecurity &amp; SOC Analyst (L1) | Front-End Developer</div>
          <div class="ats-contact-line">
            <span>${escapeHtml(contact.location || 'Hubli-Dharwad, Karnataka, India')}</span>
            <span class="ats-sep">•</span>
            <span>Phone: +91 7022367376</span>
            <span class="ats-sep">•</span>
            <a href="mailto:${escapeHtml(contact.email || 'vikramgudihal@gmail.com')}">${escapeHtml(contact.email || 'vikramgudihal@gmail.com')}</a>
            <br>
            <a href="https://linkedin.com/in/vikramgudihal" target="_blank" rel="noopener">LinkedIn: linkedin.com/in/vikramgudihal</a>
            <span class="ats-sep">•</span>
            <a href="https://github.com/student-vG" target="_blank" rel="noopener">GitHub: github.com/student-vG</a>
            <span class="ats-sep">•</span>
            <a href="https://student-vg.github.io/" target="_blank" rel="noopener">Portfolio: student-vg.github.io</a>
          </div>
        </header>

        <!-- PROFESSIONAL SUMMARY -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">PROFESSIONAL SUMMARY &amp; OBJECTIVE</h2>
          <p class="ats-paragraph">
            Motivated Master of Computer Applications (MCA) scholar with a proven foundation in computer science (BCA CGPA: 8.46) and practical expertise in front-end web engineering, defensive security architectures, and Level 1 SOC operations. Passionate about engineering secure, responsive web products and maintaining proactive operational defense. Awarded Winner in HackLite-2026. Seeking roles where technical rigor, continuous learning, and security-first mindset deliver measurable organizational impact.
          </p>
        </div>

        <!-- EDUCATION TIMELINE -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">EDUCATION &amp; ACADEMIC CREDENTIALS</h2>
          ${eduList.map(edu => `
            <div class="ats-entry">
              <div class="ats-row">
                <span class="ats-entry-title"><strong>${escapeHtml(edu.degree)}</strong> — ${escapeHtml(edu.institution)}</span>
                <span class="ats-entry-date">${escapeHtml(edu.period)}</span>
              </div>
              <div class="ats-sub-row">
                <span><em>${escapeHtml(edu.university)}</em></span>
                <span class="ats-badge-text"><strong>${escapeHtml(edu.score)}</strong></span>
              </div>
              ${edu.highlights && edu.highlights.length ? `
                <ul class="ats-bullet-list">
                  ${edu.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>

        <!-- TECHNICAL SKILLS MATRIX -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">TECHNICAL COMPETENCIES &amp; SKILLS MATRIX</h2>
          <div class="ats-skills-block">
            <p class="ats-skill-line">
              <strong>Core Programming Languages:</strong> JavaScript (ES6+), Python, Java, C, PHP, SQL, Shell Scripting (Bash)
            </p>
            <p class="ats-skill-line">
              <strong>Front-End Engineering:</strong> HTML5 Semantic Architecture, Modern CSS3, Flexbox, CSS Grid, Responsive Web Design, DOM Manipulation, Accessibility (a11y)
            </p>
            <p class="ats-skill-line">
              <strong>Cybersecurity &amp; SOC Operations:</strong> Security Operations Center (SOC) Level 1 Analysis, SIEM Concepts, Log Parsing &amp; Threat Detection, OWASP Top 10 Awareness, Network Security, Linux/Kali Administration
            </p>
            <p class="ats-skill-line">
              <strong>Databases &amp; Systems:</strong> MongoDB Atlas, MariaDB, MySQL, Firebase Firestore, Apache HTTP Server, XAMPP
            </p>
            <p class="ats-skill-line">
              <strong>Developer Tooling &amp; Cloud:</strong> Git, GitHub, Microsoft Azure, VS Code, Linux CLI, Netlify, Vercel, Postman
            </p>
          </div>
        </div>

        <!-- PROFESSIONAL EXPERIENCE -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">PROFESSIONAL EXPERIENCE &amp; INTERNSHIPS</h2>
          ${expList.map(exp => `
            <div class="ats-entry">
              <div class="ats-row">
                <span class="ats-entry-title"><strong>${escapeHtml(exp.role)}</strong> — ${escapeHtml(exp.company)}</span>
                <span class="ats-entry-date">${escapeHtml(exp.period)}</span>
              </div>
              <div class="ats-sub-row">
                <span><em>${escapeHtml(exp.location)}</em> | ${escapeHtml(exp.type)}</span>
              </div>
              <p class="ats-paragraph" style="margin: 2px 0 4px;">${escapeHtml(exp.description)}</p>
              ${exp.keyPoints && exp.keyPoints.length ? `
                <ul class="ats-bullet-list">
                  ${exp.keyPoints.map(kp => `<li>${escapeHtml(kp)}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>

        <!-- COMPLETE PROJECTS PORTFOLIO -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">TECHNICAL PROJECTS PORTFOLIO (ALL BUILDS)</h2>
          ${projList.map(proj => `
            <div class="ats-entry">
              <div class="ats-row">
                <span class="ats-entry-title"><strong>${escapeHtml(proj.title)}</strong> (${escapeHtml(proj.badge || 'Project')})</span>
                <span class="ats-entry-date">${proj.liveUrl ? `<a href="${escapeHtml(proj.liveUrl)}" target="_blank" rel="noopener">Live ↗</a>` : ''}</span>
              </div>
              <p class="ats-proj-desc">${escapeHtml(proj.description)}</p>
              <p class="ats-proj-tech"><strong>Tech Stack:</strong> ${escapeHtml(Array.isArray(proj.tags) ? proj.tags.join(', ') : 'Python, HTML5, CSS3, JavaScript')}</p>
            </div>
          `).join('')}
        </div>

        <!-- VERIFIED CERTIFICATIONS & HONORS (ALL 16 CREDENTIALS) -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">VERIFIED CERTIFICATIONS &amp; HONORS (ALL ${certList.length} CREDENTIALS)</h2>
          <div class="ats-cert-grid">
            ${certList.map((cert, idx) => `
              <div class="ats-cert-item">
                <div class="ats-row">
                  <span class="ats-entry-title"><strong>${idx + 1}. ${escapeHtml(cert.title)}</strong></span>
                  <span class="ats-entry-date">${escapeHtml(cert.date)}</span>
                </div>
                <div class="ats-sub-row">
                  <span><em>Issuer: ${escapeHtml(cert.issuer)}</em></span>
                  <span>${escapeHtml(cert.badge || 'Verified')}</span>
                </div>
                ${cert.description ? `<p class="ats-cert-desc">${escapeHtml(cert.description)}</p>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- CO-CURRICULAR & LEADERSHIP -->
        <div class="ats-sec">
          <h2 class="ats-sec-title">CO-CURRICULAR ACTIVITIES &amp; LEADERSHIP</h2>
          <ul class="ats-bullet-list">
            <li><strong>Tech Escape Room Winner:</strong> Winner of "Unlock the System" Tech Escape Room competition organized by CodeCrafters at Chetan Business School, Hubli (Oct 24, 2026).</li>
            <li><strong>Hackathons:</strong> Winner position in HackLite-2026 24-Hour Web Development Hackathon, organized by The CodeCrafters Club, MCA Department, Chetan Business School (Jan 2026).</li>
            <li><strong>Startup Pitch:</strong> Presenter and finalist in Spark Tank Startup Competition for CampusHub centralized student ecosystem (2026).</li>
            <li><strong>Continuous Technical Upskilling:</strong> Active participant in specialized workshops spanning Microsoft Azure Cloud, SOC Operations, DevOps, and Data Analytics.</li>
          </ul>
        </div>
      </div>
    `;
  }

  /**
   * Plain text generator for easy copy-pasting into job application forms
   */
  function generatePlainText(type, data) {
    const p = data?.personal || {};
    const contact = p.contact || {};
    const certList = data?.certificates || [];
    const eduList = data?.education || [];
    const projList = data?.projects || [];

    let txt = `===============================================================================\n`;
    txt += `${(p.name || 'VIKRAM GUDIHAL').toUpperCase()}\n`;
    txt += `Cybersecurity & SOC Analyst (L1) | Front-End Developer\n`;
    txt += `${contact.location || 'Hubli-Dharwad, Karnataka, India'} | +91 7022367376 | ${contact.email || 'vikramgudihal@gmail.com'}\n`;
    txt += `LinkedIn: linkedin.com/in/vikramgudihal | GitHub: github.com/student-vG\n`;
    txt += `===============================================================================\n\n`;

    txt += `PROFESSIONAL SUMMARY:\n`;
    txt += `MCA student with strong focus on frontend engineering, cybersecurity (SOC Analyst L1), and defensive web architecture. BCA graduate with 8.46 CGPA. Winner of HackLite-2026 Hackathon.\n\n`;

    txt += `EDUCATION:\n`;
    eduList.forEach(e => {
      txt += `• ${e.degree} — ${e.institution} (${e.period}) [${e.score}]\n`;
    });
    txt += `\n`;

    txt += `TECHNICAL SKILLS:\n`;
    txt += `• Languages: JavaScript (ES6+), Python, Java, C, PHP, Bash, SQL\n`;
    txt += `• Frontend: HTML5, CSS3, Responsive Design, DOM Architecture\n`;
    txt += `• Cybersecurity: SOC Level 1 Incident Triage, SIEM Concepts, Threat Heuristics, Log Analysis, Linux/Kali\n`;
    txt += `• Tools: Git, GitHub, Microsoft Azure, VS Code, Netlify, Vercel, MongoDB Atlas, XAMPP\n\n`;

    txt += `EXPERIENCE:\n`;
    txt += `• Web Development Intern — Grow Rank Info Pvt Ltd (May 2025 - Jun 2025)\n`;
    txt += `  - Developed mobile-first responsive modules and resolved cross-browser defects.\n\n`;

    txt += `LATEST TECHNICAL PROJECTS:\n`;
    txt += `• SecurePass: Password Security & Strength Analyzer (Python, JavaScript, Security Heuristics)\n`;
    txt += `• Phishing Awareness Analyzer: SOC Threat Intelligence & Heuristics Tool (Flask, Threat Detection)\n`;
    txt += `• Placement Cell Management System: Campus Drive & Recruiter Portal (Flask, MongoDB Atlas, PWA)\n`;
    txt += `• SolarGuard: ML Solar Telemetry & Anomaly Detection Dashboard (Python, Scikit-learn)\n\n`;

    txt += `CERTIFICATIONS & ACHIEVEMENTS (${certList.length} Total):\n`;
    certList.forEach((c, idx) => {
      txt += `${idx + 1}. ${c.title} — ${c.issuer} (${c.date})\n`;
    });

    return txt;
  }

  /**
   * ATS MODAL CONTROLLER
   */
  let currentDocType = 'resume';

  function renderDocument(type) {
    currentDocType = type;
    const data = getData();
    const previewContainer = document.getElementById('atsDocPreview');
    const tabResume = document.getElementById('atsTabResume');
    const tabCv = document.getElementById('atsTabCv');
    const docTitleLabel = document.getElementById('atsDocTitleLabel');

    if (!previewContainer) return;

    if (type === 'resume') {
      previewContainer.innerHTML = generateAtsResumeHtml(data);
      if (tabResume) tabResume.classList.add('active');
      if (tabCv) tabCv.classList.remove('active');
      if (docTitleLabel) docTitleLabel.textContent = '1-Page ATS Resume (Times New Roman • Fits Exact 1 Page)';
    } else {
      previewContainer.innerHTML = generateAtsCvHtml(data);
      if (tabResume) tabResume.classList.remove('active');
      if (tabCv) tabCv.classList.add('active');
      if (docTitleLabel) docTitleLabel.textContent = `Comprehensive Academic CV (${data?.certificates?.length || 16} Verified Certificates)`;
    }
  }

  function openAtsModal(type = 'resume') {
    const modal = document.getElementById('atsModal');
    if (!modal) return;

    renderDocument(type);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAtsModal() {
    const modal = document.getElementById('atsModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function printAtsDocument() {
    const oldTitle = document.title;
    const nameStr = 'Vikram_Gudihal';
    const typeStr = currentDocType === 'resume' ? 'ATS_Resume' : 'Comprehensive_CV';
    document.title = `${nameStr}_${typeStr}`;

    window.print();

    setTimeout(() => {
      document.title = oldTitle;
    }, 1500);
  }

  function copyPlainText() {
    const data = getData();
    const txt = generatePlainText(currentDocType, data);

    navigator.clipboard.writeText(txt).then(() => {
      const copyBtn = document.getElementById('atsCopyBtn');
      if (copyBtn) {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span>✓</span> Copied to Clipboard!';
        copyBtn.style.borderColor = '#10b981';
        copyBtn.style.color = '#10b981';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.borderColor = '';
          copyBtn.style.color = '';
        }, 2200);
      }
    }).catch(err => {
      console.warn('Clipboard write failed:', err);
    });
  }

  function initAtsGenerator() {
    const cvButtons = document.querySelectorAll('.cv-download-btn, [data-action="open-ats"]');
    cvButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openAtsModal('resume');
      });
    });

    const closeBtn = document.getElementById('atsModalClose');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeAtsModal);
    }

    const modal = document.getElementById('atsModal');
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          closeAtsModal();
        }
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        const activeModal = document.getElementById('atsModal');
        if (activeModal && activeModal.classList.contains('active')) {
          closeAtsModal();
        }
      }
    });

    const tabResume = document.getElementById('atsTabResume');
    const tabCv = document.getElementById('atsTabCv');
    if (tabResume) {
      tabResume.addEventListener('click', () => renderDocument('resume'));
    }
    if (tabCv) {
      tabCv.addEventListener('click', () => renderDocument('cv'));
    }

    const printBtn = document.getElementById('atsPrintBtn');
    if (printBtn) {
      printBtn.addEventListener('click', printAtsDocument);
    }

    const copyBtn = document.getElementById('atsCopyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', copyPlainText);
    }
  }

  if (typeof window !== 'undefined') {
    window.ATS_GENERATOR = {
      open: openAtsModal,
      close: closeAtsModal,
      render: renderDocument,
      print: printAtsDocument,
      copyText: copyPlainText,
      init: initAtsGenerator
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAtsGenerator);
    } else {
      initAtsGenerator();
    }
  }
})();
