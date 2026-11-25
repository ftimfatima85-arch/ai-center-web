/**
 * Arkaan AI Center - News & Insights Data Layer
 * Inspired by Arkaan.so design & content structure
 * Handles localStorage persistence and CRUD operations
 */

const INITIAL_NEWS = [
  {
    id: 1,
    title: "Official Partnership Announcement: Arkaan AI Center & Dhaxalreeb Leadership Center",
    category: "Strategic Partnership",
    categoryColor: "#0284C7",
    date: "19 October 2026",
    image: "images/news_partnership.jpg",
    excerpt: "Arkaan AI Center & Leadership Hub is pleased to announce its strategic partnership with Dhaxalreeb Leadership to advance youth tech governance...",
    content: `
      <p>Arkaan AI Center is proud to announce a historic strategic partnership with Dhaxalreeb Leadership Center in Mogadishu, Somalia. This landmark collaboration brings together cutting-edge artificial intelligence education with ethical leadership development to prepare the next generation of Somali leaders.</p>
      
      <p>The signing ceremony, held at the Arkaan Innovation Campus in Wadajir, KM4, was attended by distinguished academic leaders, government representatives, youth advocates, and private sector pioneers. The initiative aims to equip over 1,000 Somali youth with practical AI competencies combined with ethical decision-making frameworks over the next two years.</p>
      
      <h3>Key Pillars of the Partnership:</h3>
      <ul>
        <li><strong>AI & Governance Fellowship:</strong> A 6-month intensive fellowship integrating machine learning policy and digital ethics.</li>
        <li><strong>Youth Tech Incubator:</strong> Mentorship and seed funding for student-led AI solutions addressing public sector challenges.</li>
        <li><strong>Joint Research Publications:</strong> Policy briefs and technical whitepapers on AI readiness and digital economy in the Horn of Africa.</li>
      </ul>

      <p>"Through this partnership, we are bridging the critical divide between technological capability and civic responsibility," said the Academic Coordinator of Arkaan AI Center. "Somalia's future depends on leaders who understand the transformative power of AI and how to deploy it responsibly for the common good."</p>

      <p>Applications for the inaugural cohort of the joint fellowship will open next month through the Arkaan online portal.</p>
    `,
    author: "Arkaan Communications",
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "Launch of Skills for Employability & AI Innovation Program (Green Growth Track)",
    category: "Program Launch",
    categoryColor: "#059669",
    date: "12 October 2026",
    image: "images/news_launch.jpg",
    excerpt: "In partnership with leading regional tech organizations, Arkaan AI Center launched its advanced employability program focusing on sustainable technology...",
    content: `
      <p>Arkaan AI Center has officially unveiled its new flagship program: <em>Skills for Employability & AI Innovation (Green Growth Track)</em>. This pioneering initiative is designed to bridge the youth unemployment gap by delivering high-impact, hands-on technical skills in predictive analytics, IoT, and AI-driven agricultural solutions.</p>

      <p>The program curriculum was co-designed with regional technology employers and international development partners to ensure direct alignment with modern industry needs. Over an intensive 16-week period, participants gain mastery in Python, Scikit-learn, TensorFlow, and Edge AI deployment on low-cost hardware.</p>

      <h3>Program Highlights:</h3>
      <ul>
        <li><strong>Real-world Capstones:</strong> Every participant builds and deploys an end-to-end AI prototype addressing regional food security, renewable energy, or water management.</li>
        <li><strong>Industry Mentorship:</strong> 1-on-1 mentorship from seasoned machine learning engineers and data scientists across East Africa and the diaspora.</li>
        <li><strong>Career Placement Assistance:</strong> Direct interviews and internship pipelines with top tech companies, telecom operators, and NGOs in Somalia.</li>
      </ul>

      <p>"Our objective is not just to teach coding, but to build sustainable careers and foster local technological self-reliance," emphasized the Center Director. Cohort 1 applications are now being reviewed with classes commencing next week.</p>
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
    image: "images/news_competition.jpg",
    excerpt: "Academia, tech leaders, and government stakeholders gathered at Arkaan Hub to deliberate on digital sovereignty, AI regulation, and talent incubation...",
    content: `
      <p>The Arkaan Leadership Innovation Summit (LIS) 2026 concluded yesterday in Mogadishu, drawing over 350 delegates including university rectors, telecom executives, venture capitalists, and civic innovators. The high-level convening focused on the theme: <em>"Catalyzing East Africa's AI Renaissance: Talent, Infrastructure, and Impact."</em></p>

      <p>Keynote speeches highlighted the tremendous potential of Somalia's youthful demographics to leapfrog legacy technologies into decentralized AI, localized language models, and autonomous robotics.</p>

      <h3>Key Outcomes & Communiqué:</h3>
      <ul>
        <li><strong>Somali NLP Taskforce:</strong> Formation of an open-source research collective dedicated to developing state-of-the-art Somali Large Language Models and speech datasets.</li>
        <li><strong>University-Industry Consortium:</strong> Shared GPU clusters and research facilities hosted at Arkaan AI Center open to accredited university researchers.</li>
        <li><strong>Youth Robotics Grant Fund:</strong> A $50,000 challenge fund to support STEM robotics clubs in Mogadishu secondary schools.</li>
      </ul>

      <p>The event concluded with an exhibition featuring 18 breakthrough student projects developed in the Arkaan Robotics and Computer Vision labs, drawing immense praise from visiting international dignitaries.</p>
    `,
    author: "Summit Press Office",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Student Robotics Team Wins First Place in East Africa Autonomous Drone Challenge",
    category: "Robotics & AI",
    categoryColor: "#EA580C",
    date: "14 September 2026",
    image: "images/project1.jpg",
    excerpt: "An extraordinary achievement by our student robotics squad who built an autonomous search-and-rescue UAV navigating GPS-denied environments...",
    content: `
      <p>A team of five student researchers from the Arkaan Robotics Division has made national history by taking 1st Place at the East Africa Autonomous Systems Championship. Competing against 22 university teams across the region, the Arkaan team demonstrated an AI-guided unmanned aerial vehicle (UAV) capable of autonomous indoor obstacle avoidance without GPS signals.</p>

      <p>The drone utilized lightweight onboard computer vision running real-time YOLOv8 models paired with edge LiDAR sensors for SLAM (Simultaneous Localization and Mapping). The system was praised by international judges for its resource efficiency, robust fault tolerance, and rapid deployment readiness.</p>

      <p>"This win proves that with the right mentors, access to modern labs, and relentless ambition, Somali students can stand at the very pinnacle of global technological innovation," noted Lead Robotics Instructor.</p>
    `,
    author: "Robotics Lab",
    readTime: "3 min read"
  },
  {
    id: 5,
    title: "Women in AI Somalia: 40 Talented Engineers Graduate in Data Science & Machine Learning",
    category: "Talent Development",
    categoryColor: "#DB2777",
    date: "05 August 2026",
    image: "images/student1.jpg",
    excerpt: "Celebrating the graduation of our Women in AI cohort, who completed rigorous training in computer vision, deep neural networks, and web engineering...",
    content: `
      <p>Arkaan AI Center proudly hosted the graduation ceremony for the inaugural Women in AI Somalia cohort. Forty exceptional female university students and young professionals completed the rigorous 14-week specialized diploma in Machine Learning and Data Engineering.</p>

      <p>The ceremony was celebrated with project demonstrations ranging from automated maternal health triage algorithms to computer vision systems detecting locust swarm trajectories to safeguard regional crops.</p>

      <p>Over 75% of the graduates have already secured internship and full-time employment commitments with local telecommunications, banking, and international humanitarian agencies operating across Somalia.</p>
    `,
    author: "Diversity & Inclusion Team",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Launch of the National Data Science Initiative in Collaboration with Somali Universities",
    category: "Academic Initiative",
    categoryColor: "#0284C7",
    date: "22 July 2026",
    image: "images/field_ds.jpg",
    excerpt: "Providing open curriculum, cloud compute credits, and mentor access to empower over 2,000 university students across Mogadishu and regional states...",
    content: `
      <p>To accelerate national digital literacy, Arkaan AI Center in partnership with leading higher education institutions has launched the National Data Science Initiative. The multi-tiered program provides certified online and in-person curricula in statistics, SQL, data wrangling, and predictive modeling.</p>

      <p>Through this initiative, participating university computer science departments will receive subsidized access to high-performance GPU workstations and verified cloud computing credits, enabling students to tackle production-grade AI problems.</p>
    `,
    author: "Academic Outreach",
    readTime: "3 min read"
  }
];

// Helper functions for persistent news management
function getNews() {
  try {
    const data = localStorage.getItem("arkaan_news_data");
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
    localStorage.setItem("arkaan_news_data", JSON.stringify(articles));
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

function resetToDefaultNews() {
  saveNews(INITIAL_NEWS);
  return INITIAL_NEWS;
}
