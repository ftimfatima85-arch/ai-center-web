/**
 * Arkaan AI Center - News & Insights Data Layer
 * Directly synchronized with real content & images from http://arkaan.so/
 */

const INITIAL_NEWS = [
  {
    id: 1,
    title: "Official Partnership Announcement: Arkaan Hub & Dhaxalreeb Leadership Center",
    category: "Strategic Partnership",
    categoryColor: "#0284C7",
    date: "19 October 2026",
    image: "images/arkaan_hero_bg.jpg",
    excerpt: "Arkaan Leadership & Innovation Hub is pleased to announce its partnership with Dhaxalreeb Leadership Development Center following the signing of a Memorandum of Understanding (MoU)...",
    content: `
      <p>Arkaan Leadership & Innovation Hub is pleased to announce its strategic partnership with Dhaxalreeb Leadership Development Center following the official signing of a Memorandum of Understanding (MoU) in Mogadishu, Somalia.</p>
      
      <p>The high-profile signing ceremony was attended by distinguished academic leaders, government representatives, youth advocates, and private sector pioneers. The initiative aims to equip over 1,000 Somali youth with practical artificial intelligence and governance competencies combined with ethical leadership frameworks.</p>
      
      <h3>Key Pillars of the Partnership:</h3>
      <ul>
        <li><strong>AI & Governance Fellowship:</strong> A 6-month intensive fellowship integrating machine learning policy and digital ethics.</li>
        <li><strong>Youth Tech Incubator:</strong> Mentorship and seed funding for student-led AI solutions addressing public sector challenges.</li>
        <li><strong>Joint Research Publications:</strong> Policy briefs and technical whitepapers on AI readiness and digital economy in the Horn of Africa.</li>
      </ul>

      <p>"Through this partnership, we are bridging the critical divide between technological capability and civic responsibility," said the Leadership Coordinator. "Somalia's future depends on leaders who understand the transformative power of emerging technologies and how to deploy them responsibly for the common good."</p>

      <p>Applications for the inaugural cohort of the joint fellowship will open next month through the Arkaan online portal.</p>
    `,
    author: "Arkaan Communications",
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "Launch of Skills for Employability & Entrepreneurship Program (Green Growth Project)",
    category: "Program Launch",
    categoryColor: "#059669",
    date: "12 October 2026",
    image: "images/arkaan_furan.jpg",
    excerpt: "In partnership with SOS Children's Villages Somalia and funded by Global Affairs Canada, Arkaan Hub launched the new cohort equipping youth with green economy skills...",
    content: `
      <p>In partnership with SOS Children's Villages Somalia and funded by Global Affairs Canada, Arkaan Hub has officially launched the <em>Skills for Employability & Entrepreneurship Program (Green Growth Project)</em>.</p>

      <p>The program curriculum was co-designed with regional technology employers and international development partners to ensure direct alignment with modern industry needs. Over an intensive 16-week period, participants gain mastery in digital skills, sustainable technology, and enterprise development.</p>

      <h3>Program Highlights:</h3>
      <ul>
        <li><strong>Real-world Capstones:</strong> Every participant builds and deploys an end-to-end prototype addressing regional food security, renewable energy, or water management.</li>
        <li><strong>Industry Mentorship:</strong> 1-on-1 mentorship from seasoned practitioners and entrepreneurs across East Africa and the diaspora.</li>
        <li><strong>Career Placement Assistance:</strong> Direct pipelines with top tech companies, telecom operators, and NGOs in Somalia.</li>
      </ul>

      <p>"Our objective is not just to teach theory, but to build sustainable careers and foster local technological self-reliance," emphasized the Center Director. Cohort applications are now open.</p>
    `,
    author: "Programs Directorate",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Arkaan Leadership Innovation Summit (LIS) Convenes Ecosystem Leaders in Mogadishu",
    category: "Innovation Summit",
    categoryColor: "#7C3AED",
    date: "28 September 2026",
    image: "images/arkaan_president.jpg",
    excerpt: "Academia, tech leaders, and government stakeholders gathered at the Arkaan Hub to deliberate on digital transformation, workforce readiness, and strategic governance...",
    content: `
      <p>The Arkaan Leadership Innovation Summit (LIS) 2026 convened in Mogadishu, drawing over 350 delegates including university rectors, telecom executives, venture capitalists, and civic innovators. The high-level convening focused on the theme: <em>"Catalyzing East Africa's Renaissance: Talent, Infrastructure, and Impact."</em></p>

      <p>Keynote speeches highlighted the tremendous potential of Somalia's youthful demographics to leapfrog legacy technologies into decentralized AI, localized language models, and autonomous robotics.</p>

      <h3>Key Outcomes & Communiqué:</h3>
      <ul>
        <li><strong>National Digital Taskforce:</strong> Formation of an open-source research collective dedicated to developing state-of-the-art regional LLMs and technological datasets.</li>
        <li><strong>University-Industry Consortium:</strong> Shared GPU clusters and research facilities hosted at Arkaan Hub open to accredited university researchers.</li>
        <li><strong>Youth Innovation Grant Fund:</strong> A $50,000 challenge fund to support STEM and robotics clubs in Mogadishu.</li>
      </ul>

      <p>The event concluded with an exhibition featuring 18 breakthrough student projects, drawing immense praise from visiting international dignitaries.</p>
    `,
    author: "Summit Press Office",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "High-Level Roundtable on Institutional Governance & Impactful Investments",
    category: "Policy & Governance",
    categoryColor: "#EA580C",
    date: "15 September 2026",
    image: "images/arkaan_opm.jpg",
    excerpt: "Senior public sector delegations and private sector executives met at the KM4 Hub to align strategies for institutional modernization and sustainable growth...",
    content: `
      <p>Senior public sector delegations, international development partners, and private sector executives met at Arkaan Hub in Wadajir, KM4, for a high-level roundtable on Institutional Governance and Sustainable Economic Investments.</p>
      
      <p>The discussion centered on modernizing regulatory frameworks, deploying transparent digital public infrastructure, and creating favorable conditions for tech-driven foreign direct investments.</p>
    `,
    author: "Governance Directorate",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Arkaan Public Coaching Series & Executive Leadership Masterclass",
    category: "Masterclass & Events",
    categoryColor: "#0284C7",
    date: "02 September 2026",
    image: "images/arkaan_event.jpg",
    excerpt: "Over 120 aspiring leaders and young managers attended an intensive masterclass on ethical leadership, agile team execution, and strategic mindset...",
    content: `
      <p>Over 120 aspiring leaders, young managers, and university student leaders attended an intensive masterclass on ethical leadership, agile team execution, and strategic mindset at Arkaan Hub.</p>
      
      <p>The masterclass was facilitated by visiting executive coaches and seasoned institutional leaders, focusing on emotional intelligence, conflict resolution, and data-driven decision-making in high-pressure organizational environments.</p>
    `,
    author: "Executive Academy",
    readTime: "3 min read"
  }
];

// Helper functions for persistent news management
function getNews() {
  try {
    const data = localStorage.getItem("arkaan_news_data_v2");
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Could not read news from localStorage:", err);
  }
  return INITIAL_NEWS;
}

function saveNews(articles) {
  try {
    localStorage.setItem("arkaan_news_data_v2", JSON.stringify(articles));
    return true;
  } catch (err) {
    console.error("Failed to save news to localStorage:", err);
    return false;
  }
}

function getArticleById(id) {
  const all = getNews();
  return all.find(item => String(item.id) === String(id)) || null;
}

function addArticle(article) {
  const all = getNews();
  const newId = all.length > 0 ? Math.max(...all.map(a => Number(a.id) || 0)) + 1 : 1;
  const newArticle = {
    ...article,
    id: newId,
    date: article.date || new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
    readTime: article.readTime || "4 min read"
  };
  all.unshift(newArticle);
  saveNews(all);
  return newArticle;
}

function updateArticle(id, updatedData) {
  const all = getNews();
  const index = all.findIndex(item => String(item.id) === String(id));
  if (index !== -1) {
    all[index] = { ...all[index], ...updatedData };
    saveNews(all);
    return all[index];
  }
  return null;
}

function deleteArticle(id) {
  const all = getNews();
  const filtered = all.filter(item => String(item.id) !== String(id));
  saveNews(filtered);
  return filtered;
}
