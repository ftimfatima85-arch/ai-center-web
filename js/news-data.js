/**
 * Arkaan AI Center - News & Insights Data Layer (v=3)
 * Featuring Authentic Uploaded Photographs & AI Center Leadership Context
 */

const INITIAL_NEWS = [
  {
    id: 1,
    title: "Official Strategic Partnership: Arkaan AI Center & Dhaxalreeb Leadership Institute",
    category: "Strategic Partnership",
    categoryColor: "#0B254A",
    date: "19 October 2026",
    image: "images/arkaan_hall.jpg",
    excerpt: "Arkaan AI Center & Innovation Hub is pleased to announce its strategic partnership with Dhaxalreeb Leadership Development Center to accelerate national AI competencies...",
    content: `
      <p>Arkaan AI Center & Innovation Hub has officially entered into a landmark strategic partnership with Dhaxalreeb Leadership Development Center following the formal signing of a Memorandum of Understanding (MoU) in Mogadishu, Somalia.</p>
      
      <p>The ceremony brought together university leaders, technology executives, policymakers, and youth innovators. The joint initiative aims to train and empower over 1,000 Somali youth with practical artificial intelligence skills, ethical digital governance, and technical leadership.</p>
      
      <h3>Core Pillars of the Collaboration:</h3>
      <ul>
        <li><strong>AI & Digital Leadership Fellowship:</strong> A 6-month intensive applied learning track combining modern machine learning and digital public infrastructure.</li>
        <li><strong>Youth AI Innovation Lab:</strong> Seed funding and technical mentorship for student prototypes addressing local education, healthcare, and public service challenges.</li>
        <li><strong>Somali Language & AI Research:</strong> Collaborative research initiatives on natural language processing, regional datasets, and open-source models for the Horn of Africa.</li>
      </ul>

      <p>"Through this partnership, Arkaan AI Center continues to champion technological self-reliance, giving Somali youth the tools to build the intelligent solutions of tomorrow," stated the Program Director.</p>
    `,
    author: "Arkaan Communications",
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "Launch of Youth AI Skills & Tech Employability Program (Digital Growth Initiative)",
    category: "Program Launch",
    categoryColor: "#059669",
    date: "12 October 2026",
    image: "images/arkaan_screen.jpg",
    excerpt: "Equipping young developers and university graduates with practical machine learning, cloud computing, and software engineering capabilities for the modern workforce...",
    content: `
      <p>Arkaan AI Center has officially inaugurated the <em>Youth AI Skills & Tech Employability Program</em>, designed in collaboration with regional technology employers and international development partners.</p>

      <p>Over an intensive 16-week hands-on bootcamp, participants develop production-ready competencies in Python, machine learning workflows, data engineering, and intelligent application design.</p>

      <h3>Program Highlights:</h3>
      <ul>
        <li><strong>Real-World Capstone Projects:</strong> Students build and deploy working AI systems solving challenges in renewable energy, logistics, and fintech.</li>
        <li><strong>Industry Mentorship:</strong> 1-on-1 coaching from seasoned machine learning practitioners and tech leaders in Somalia and the diaspora.</li>
        <li><strong>Direct Career Placement:</strong> Job matching and paid internship opportunities with top telecom providers, financial institutions, and tech enterprises.</li>
      </ul>
    `,
    author: "Programs Directorate",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "National Leadership & AI Innovation Summit Convenes Ecosystem Pioneers in Mogadishu",
    category: "Innovation Summit",
    categoryColor: "#081C3A",
    date: "28 September 2026",
    image: "images/arkaan_president.jpg",
    excerpt: "Government dignitaries, academic leaders, and technology founders gather to discuss artificial intelligence adoption, digital sovereignty, and tech job creation...",
    content: `
      <p>The annual Leadership & AI Innovation Summit convened in Mogadishu, welcoming distinguished state officials, university chancellors, tech founders, and international development representatives.</p>

      <p>Discussions centered on preparing Somalia’s young population for the fourth industrial revolution, investing in localized computing infrastructure, and fostering homegrown artificial intelligence breakthroughs.</p>

      <h3>Key Action Points:</h3>
      <ul>
        <li><strong>National AI Talent Consortium:</strong> Establishing unified curriculum standards across Somali universities in data science and machine learning.</li>
        <li><strong>Open Research Infrastructure:</strong> Shared GPU labs and compute facilities accessible to accredited students and academic researchers at Arkaan AI Center.</li>
        <li><strong>Youth Technology Innovation Challenge:</strong> Competitive grants to support student-led AI startups in Mogadishu.</li>
      </ul>
    `,
    author: "Summit Directorate",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "High-Level Executive Roundtable on AI Governance, Ethics & Enterprise Modernization",
    category: "Policy & Governance",
    categoryColor: "#C2410C",
    date: "15 September 2026",
    image: "images/arkaan_roundtable.jpg",
    excerpt: "Institutional leaders and enterprise executives deliberate on strategic guidelines for safe AI integration and public sector digitization...",
    content: `
      <p>Senior leaders from government ministries, banking institutions, and technology providers gathered at Arkaan AI Center for a strategic roundtable exploring safe AI deployment and enterprise automation.</p>
      
      <p>Participants evaluated practical strategies for data protection, ethical algorithmic decision-making, and public cloud adoption tailored to Somalia’s regulatory ecosystem.</p>
    `,
    author: "Governance Council",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Keynote Address: Transforming Somali Youth Through Applied Technology & Leadership",
    category: "Keynote & Leadership",
    categoryColor: "#1E40AF",
    date: "05 September 2026",
    image: "images/arkaan_speaker.jpg",
    excerpt: "Inspiring youth to transition from technology consumers to global innovators and software creators at the Arkaan Leadership & Innovation Hub...",
    content: `
      <p>In an inspiring keynote delivered at the Arkaan Leadership & Innovation Hub podium, community mentors and industry veterans spoke on the vital role of youthful ambition in shaping Africa's technological renaissance.</p>
      
      <p>The address stressed that with accessible training, reliable internet, and mentorship, young Somalis can lead global engineering teams and build high-growth AI ventures.</p>
    `,
    author: "Executive Office",
    readTime: "3 min read"
  },
  {
    id: 6,
    title: "Leaders Forum: Accelerating Private Sector Growth Through Digital Innovation",
    category: "Panel Forum",
    categoryColor: "#047857",
    date: "25 August 2026",
    image: "images/arkaan_panel.jpg",
    excerpt: "Industry leaders evaluate the transformative role of AI, automation, and modern tech infrastructure in driving local business resilience...",
    content: `
      <p>A distinguished panel of private sector leaders and startup executives met at Hotel Jazeera for an in-depth forum on commercializing tech innovations and modernizing supply chains.</p>
      
      <p>Speakers detailed how automated customer services, intelligent forecasting, and digital payment systems are generating double-digit productivity gains for Somali businesses.</p>
    `,
    author: "Enterprise Development",
    readTime: "5 min read"
  },
  {
    id: 7,
    title: "B2B Networking & Tech Entrepreneurship: Unlocking Commercial AI Opportunities",
    category: "B2B Innovation",
    categoryColor: "#4338CA",
    date: "10 August 2026",
    image: "images/arkaan_youth_leader.jpg",
    excerpt: "Connecting ambitious student founders with corporate partners, angel investors, and financial institutions to commercialize tech solutions...",
    content: `
      <p>Arkaan AI Center hosted an energetic B2B networking demo day, connecting student entrepreneurs with leading banks, telecoms, and international partners.</p>
      
      <p>Ten student teams showcased working prototypes ranging from localized smart agriculture sensors to automated financial analytics tools.</p>
    `,
    author: "Incubator Hub",
    readTime: "4 min read"
  }
];

// Helper functions for persistent news management
function getNews() {
  try {
    const data = localStorage.getItem("arkaan_news_data_v3");
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
    localStorage.setItem("arkaan_news_data_v3", JSON.stringify(articles));
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
