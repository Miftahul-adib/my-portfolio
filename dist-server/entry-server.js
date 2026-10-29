import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";
const LinkedInIcon$1 = () => /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
  /* @__PURE__ */ jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
  /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
] });
const GitHubIcon$1 = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) });
const KaggleIcon$1 = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334z" }) });
const ScholarIcon$1 = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" }) });
const EmailIcon$1 = () => /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
] });
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);
  const socials = [
    { href: "https://www.linkedin.com/in/miftahul-alam-adib/", Icon: LinkedInIcon$1, label: "LinkedIn" },
    { href: "https://github.com/Miftahul-adib", Icon: GitHubIcon$1, label: "GitHub" },
    { href: "https://www.kaggle.com/miftahuladib", Icon: KaggleIcon$1, label: "Kaggle" },
    { href: "https://scholar.google.com/citations?hl=en&user=3UH7xHsAAAAJ", Icon: ScholarIcon$1, label: "Google Scholar" },
    { href: "mailto:miftahuladib04@gmail.com", Icon: EmailIcon$1, label: "Email" }
  ];
  return /* @__PURE__ */ jsxs("section", { className: `hero ${loaded ? "hero--loaded" : ""}`, id: "top", children: [
    /* @__PURE__ */ jsx("div", { className: "hero__sidebar" }),
    /* @__PURE__ */ jsxs("div", { className: "hero__content", children: [
      /* @__PURE__ */ jsx("h1", { className: "hero__name", children: "MIFTAHUL ALAM ADIB" }),
      /* @__PURE__ */ jsx("p", { className: "hero__role", children: "Machine Learning Researcher" }),
      /* @__PURE__ */ jsx("div", { className: "hero__rule" }),
      /* @__PURE__ */ jsx("p", { className: "hero__affil", children: "Statistics, Shahjalal University of Science and Technology (SUST), Sylhet, Bangladesh" }),
      /* @__PURE__ */ jsx("p", { className: "hero__affil", children: "Research Associate, Research Den, Remote, US" }),
      /* @__PURE__ */ jsxs("div", { className: "hero__sections", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero__block", children: [
          /* @__PURE__ */ jsx("span", { className: "section-label", children: "About" }),
          /* @__PURE__ */ jsx("p", { className: "hero__body", children: "My work sits at the boundary of statistical rigor and modern machine learning, focused on healthcare AI, computer vision, and low-resource NLP, and on deploying these methods as real-world, full-stack systems. I enjoy doing research, competitions, hackathons, and applied projects. I love exchanging perspectives. Feel free to reach out." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero__block", children: [
          /* @__PURE__ */ jsx("span", { className: "section-label", children: "On Research" }),
          /* @__PURE__ */ jsx("p", { className: "hero__body", children: "I think research is beautiful. I love when I see the patterns in datasets and explore them. Research, to me, is not confined to one domain. People ask me what my goal is, or whether I want a PhD. Honestly, I have no idea. I do research because I love it." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hero__socials", children: socials.map(({ href, Icon, label }) => /* @__PURE__ */ jsx("a", { href, target: href.startsWith("mailto") ? void 0 : "_blank", rel: "noopener noreferrer", className: "hero__social", "aria-label": label, children: /* @__PURE__ */ jsx(Icon, {}) }, label)) })
    ] })
  ] });
}
const NAV_LINKS = [
  { label: "ABOUT", href: "#top" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "RESEARCH", href: "#research" },
  { label: "PROJECTS", href: "#projects" },
  { label: "COMPETITIONS", href: "#competitions" },
  { label: "SKILLS", href: "#skills" },
  { label: "GOALS", href: "#goals" },
  { label: "CONTACT", href: "#contact" }
];
function Navbar() {
  const [visible, setVisible] = useState(false);
  const [appeared, setAppeared] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        if (!appeared) {
          setVisible(true);
          setAppeared(true);
        }
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [appeared]);
  useEffect(() => {
    const ids = ["top", "experience", "research", "projects", "competitions", "skills", "goals", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx("nav", { className: `navbar ${visible ? "navbar--visible" : ""}`, children: /* @__PURE__ */ jsx("div", { className: "navbar__inner", children: NAV_LINKS.map(({ label, href }) => {
    const id = href.replace("#", "");
    return /* @__PURE__ */ jsx(
      "a",
      {
        href,
        onClick: (e) => handleClick(e, href),
        className: `navbar__link ${active === id ? "navbar__link--active" : ""}`,
        children: label
      },
      label
    );
  }) }) });
}
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(".reveal");
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add("visible");
              }, i * 100);
            });
            if (entry.target.classList.contains("reveal")) {
              entry.target.classList.add("visible");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
const EDUCATION = [
  {
    degree: "B.Sc. in Statistics",
    institution: "Shahjalal University of Science and Technology",
    location: "Sylhet, Bangladesh",
    period: "Nov 2024 – Present"
  }
];
const EXPERIENCE = [
  {
    role: "Research Associate",
    org: "Research Den",
    location: "Remote, United States",
    period: "Aug 2025 – Present",
    desc: "An AI/ML volunteer research community helping members publish in peer-reviewed conferences and journals through mentorship and collaboration.",
    bullets: [
      "Co-authored a research manuscript currently under review, contributing across data analysis, experimentation, and writing.",
      "Active contributor across multiple ongoing research projects, applying machine learning techniques across the full research pipeline."
    ]
  },
  {
    role: "Junior Python Mentor",
    org: "SUST Data Science Club",
    location: "Sylhet, Bangladesh",
    period: "",
    desc: "",
    bullets: [
      'Delivered in-person instruction for the 7-day "PyNEXT" course, guiding a cohort of 50 students through Python fundamentals and troubleshooting challenges.',
      "Provided one-on-one support to strengthen participants's programming skills, fostering an engaging and collaborative learning environment."
    ]
  }
];
function Experience() {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxs("section", { id: "experience", className: "page-section", children: [
    /* @__PURE__ */ jsx("div", { className: "page-section__sidebar" }),
    /* @__PURE__ */ jsxs("div", { className: "section-wrapper", ref, children: [
      /* @__PURE__ */ jsx("span", { className: "reveal section-label", children: "Education" }),
      EDUCATION.map((e) => /* @__PURE__ */ jsxs("div", { className: "reveal exp__row", children: [
        /* @__PURE__ */ jsx("div", { className: "exp__meta", children: /* @__PURE__ */ jsx("span", { className: "exp__period", children: e.period }) }),
        /* @__PURE__ */ jsxs("div", { className: "exp__body", children: [
          /* @__PURE__ */ jsx("h3", { className: "exp__title", children: e.degree }),
          /* @__PURE__ */ jsxs("p", { className: "exp__org", children: [
            e.institution,
            ", ",
            e.location
          ] })
        ] })
      ] }, e.degree)),
      /* @__PURE__ */ jsx("span", { className: "reveal section-label exp__section-gap", children: "Experience" }),
      EXPERIENCE.map((e) => /* @__PURE__ */ jsxs("div", { className: "reveal exp__row", children: [
        /* @__PURE__ */ jsxs("div", { className: "exp__meta", children: [
          /* @__PURE__ */ jsx("span", { className: "exp__period", children: e.period }),
          /* @__PURE__ */ jsx("span", { className: "exp__location", children: e.location })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "exp__body", children: [
          /* @__PURE__ */ jsx("h3", { className: "exp__title", children: e.role }),
          /* @__PURE__ */ jsx("p", { className: "exp__org", children: e.org }),
          e.desc && /* @__PURE__ */ jsx("p", { className: "exp__desc", children: e.desc }),
          /* @__PURE__ */ jsx("ul", { className: "exp__bullets", children: e.bullets.map((b, i) => /* @__PURE__ */ jsx("li", { children: b }, i)) })
        ] })
      ] }, e.role))
    ] })
  ] });
}
const PUBLISHED = [
  {
    num: "01",
    title: "A Dual Pipeline Machine Learning Framework for Automated Multi-Class Sleep Disorder Screening Using Hybrid Resampling and Ensemble Learning",
    plain: "Designed a two-stage ML pipeline for automatically detecting sleep disorders — addressing severe class imbalance through hybrid resampling and combining multiple classifiers to improve reliability across disorder categories.",
    tags: ["Ensemble Learning", "Healthcare", "Class Imbalance", "Screening"],
    venue: "arXiv · 2025",
    paper: "https://arxiv.org/abs/2601.05814",
    code: "https://github.com/Miftahul-adib/sleep-disorder"
  },
  {
    num: "02",
    title: "A Coverage Preserving Ensemble Framework with Minority Recovery for Robust Indoor Localization",
    plain: "Proposed an ensemble-based localization system that maintains coverage across the full indoor space while recovering accuracy for underrepresented zones — a common failure mode in WiFi fingerprinting systems.",
    tags: ["Indoor Localization", "Ensemble Learning", "Minority Recovery", "Coverage"],
    venue: "IJABC · JSTAGE · 2026",
    paper: "https://www.jstage.jst.go.jp/article/ijabc/2026/2/2026_160/_article",
    code: "https://github.com/Miftahul-adib/Coverage-preserving-localization"
  },
  {
    num: "03",
    title: "Explainable Machine Learning for Chronic Kidney Disease Classification from Routine Urinalysis and Diabetes Records",
    plain: "Built an interpretable ML pipeline for CKD classification using routine clinical tests — applying SHAP and LIME to make model decisions transparent and clinically meaningful.",
    tags: ["Explainable AI", "CKD", "Healthcare", "SHAP", "LIME"],
    venue: "ResearchSquare · Preprint",
    paper: "https://www.researchsquare.com/article/rs-10968179/v1",
    code: "https://github.com/Munfa/CKD-Explainable-AI"
  }
];
const ONGOING = [
  {
    domain: "Education · Public Health",
    title: "Natural Hazard Exposure & Child Literacy in Bangladesh",
    desc: "Examining whether recent natural hazard exposure affects foundational reading and numeracy skills in children aged 7–14, using the nationally representative MICS 2025 dataset."
  },
  {
    domain: "NLP · Mental Health",
    title: "SYMTOLOGY: Code-Mixed Mental Health Dataset",
    desc: "Building a synthetic code-mixed dataset for mental health in a low-resource language using an ontology-driven prompting framework — targeting Bengali–English mixing patterns."
  },
  {
    domain: "Healthcare AI · CGM",
    title: "CGM Forecasting Sensitivity Analysis",
    desc: "Systematic analysis of how short-term blood glucose forecasting models respond to changes in evaluation protocol, historical input window length, and prediction horizon."
  },
  {
    domain: "Healthcare AI · CGM",
    title: "Cross-Population CGM Forecasting",
    desc: "Developing a leakage-controlled evaluation framework to test whether short-term CGM forecasting models generalize across different patient populations."
  },
  {
    domain: "Healthcare AI · CKD",
    title: "Three-Dataset CKD Harmonization",
    desc: "Harmonizing three chronic kidney disease datasets for cross-dataset analysis, external model validation, and explainable machine learning — addressing inconsistencies in feature definitions and label conventions."
  }
];
function Research() {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxs("section", { id: "research", className: "page-section research-section", children: [
    /* @__PURE__ */ jsx("div", { className: "page-section__sidebar" }),
    /* @__PURE__ */ jsxs("div", { className: "section-wrapper", ref, children: [
      /* @__PURE__ */ jsx("span", { className: "reveal section-label", children: "Research" }),
      /* @__PURE__ */ jsx("span", { className: "reveal research__sub-label", children: "Completed" }),
      /* @__PURE__ */ jsx("div", { className: "research__papers", children: PUBLISHED.map((p) => /* @__PURE__ */ jsxs("div", { className: "reveal research__paper-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "research__paper-header", children: [
          /* @__PURE__ */ jsx("span", { className: "research__paper-num", children: p.num }),
          /* @__PURE__ */ jsx("span", { className: "research__paper-venue", children: p.venue })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "research__paper-title", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "research__paper-plain", children: p.plain }),
        /* @__PURE__ */ jsx("div", { className: "research__tags", children: p.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "research__tag", children: t }, t)) }),
        /* @__PURE__ */ jsxs("div", { className: "research__links", children: [
          /* @__PURE__ */ jsx("a", { href: p.paper, target: "_blank", rel: "noopener noreferrer", className: "research__link", children: "Paper ↗" }),
          /* @__PURE__ */ jsx("a", { href: p.code, target: "_blank", rel: "noopener noreferrer", className: "research__link", children: "Code ↗" })
        ] })
      ] }, p.num)) }),
      /* @__PURE__ */ jsx("span", { className: "reveal research__sub-label research__sub-label--ongoing", children: "Ongoing" }),
      /* @__PURE__ */ jsx("div", { className: "research__ongoing-grid", children: ONGOING.map((o) => /* @__PURE__ */ jsxs("div", { className: "reveal research__ongoing-card", children: [
        /* @__PURE__ */ jsx("span", { className: "research__ongoing-status", children: "In Progress" }),
        /* @__PURE__ */ jsx("div", { className: "research__ongoing-domain", children: o.domain }),
        /* @__PURE__ */ jsx("h3", { className: "research__ongoing-title", children: o.title }),
        /* @__PURE__ */ jsx("p", { className: "research__ongoing-desc", children: o.desc })
      ] }, o.title)) })
    ] })
  ] });
}
const PROJECTS = [
  {
    category: "Tools & Systems",
    name: "ScholarLink — Faculty Finder",
    desc: "Semantic search platform enabling students to discover faculty and PhD researchers at SUST using natural language queries. 611+ faculty profiles indexed with vector embeddings.",
    tech: ["FastAPI", "FAISS", "HuggingFace", "Python", "Vercel"],
    live: "https://faculty-finder-phi.vercel.app/",
    code: "https://github.com/Miftahul-adib/Faculty-finder"
  },
  {
    category: "Healthcare",
    name: "Blood Glucose Prediction on OhioT1DM",
    desc: "30-minute-ahead CGM forecasting using ensemble machine learning on the OhioT1DM dataset, with full SHAP and LIME explainability to surface which features drive each prediction.",
    tech: ["Scikit-learn", "SHAP", "LIME", "Pandas", "Matplotlib"],
    code: "https://github.com/Miftahul-adib/Blood-Glucose-Prediction-on-OhioT1DM"
  },
  {
    category: "NLP",
    name: "Bengali LLM Hallucination Detection",
    desc: "System for identifying unsupported or fabricated outputs in Bengali large language models — a reliability problem with direct implications for deploying LLMs in low-resource settings.",
    tech: ["NLP", "Bengali", "LLM", "Python"],
    code: "https://github.com/Miftahul-adib/Bengali-LLM-Hallucination-Detection-Challenge"
  },
  {
    category: "NLP",
    name: "Bengali Long-Form Speech & Speaker Diarization",
    desc: "End-to-end pipeline for recognizing long-form Bengali speech and identifying individual speakers in multi-speaker audio recordings.",
    tech: ["Whisper", "NLP", "Speech", "Diarization", "PyTorch"],
    code: "https://github.com/Miftahul-adib/Bengali-Long-Form-Speech-Recognition-Speaker-Diarization"
  },
  {
    category: "Tools & Systems",
    name: "Retrieval-Augmented QA System",
    desc: "RAG pipeline combining FAISS vector search for document retrieval with TAPAS for answering questions over tabular data.",
    tech: ["FAISS", "TAPAS", "LangChain", "Python"],
    code: "https://github.com/Miftahul-adib/Retrieval-Augmented-QA-System"
  },
  {
    category: "Computer Vision",
    name: "Roadside Object Detection",
    desc: "Real-time multi-class roadside object detection using YOLOv11n with a custom training pipeline, optimized for Bangladeshi road conditions.",
    tech: ["YOLOv11", "OpenCV", "PyTorch", "Computer Vision"],
    code: "https://github.com/Miftahul-adib/Roadside-object-detection"
  },
  {
    category: "Tools & Systems",
    name: "YouTube Data Analysis",
    desc: "Exploratory data analysis of the top 100 YouTube channels — subscriber trends, category distributions, and engagement patterns using Pandas, Matplotlib, and Seaborn.",
    tech: ["Pandas", "Matplotlib", "Seaborn", "EDA"],
    code: "https://github.com/Miftahul-adib/Youtube-data-analysis"
  }
];
function Projects() {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxs("section", { id: "projects", className: "page-section projects-section", children: [
    /* @__PURE__ */ jsx("div", { className: "page-section__sidebar" }),
    /* @__PURE__ */ jsxs("div", { className: "section-wrapper", ref, children: [
      /* @__PURE__ */ jsx("span", { className: "reveal section-label", children: "Projects" }),
      /* @__PURE__ */ jsx("div", { className: "projects__grid", children: PROJECTS.map((p) => /* @__PURE__ */ jsxs("div", { className: "reveal projects__card", children: [
        /* @__PURE__ */ jsx("span", { className: "projects__category", children: p.category }),
        /* @__PURE__ */ jsx("h3", { className: "projects__name", children: p.name }),
        /* @__PURE__ */ jsx("p", { className: "projects__desc", children: p.desc }),
        /* @__PURE__ */ jsx("div", { className: "projects__tech", children: p.tech.map((t) => /* @__PURE__ */ jsx("span", { className: "projects__tech-tag", children: t }, t)) }),
        /* @__PURE__ */ jsxs("div", { className: "projects__links", children: [
          p.live && /* @__PURE__ */ jsx("a", { href: p.live, target: "_blank", rel: "noopener noreferrer", className: "projects__link", children: "Live ↗" }),
          p.code && /* @__PURE__ */ jsx("a", { href: p.code, target: "_blank", rel: "noopener noreferrer", className: "projects__link", children: "Code ↗" })
        ] })
      ] }, p.name)) })
    ] })
  ] });
}
const COMPETITIONS = [
  {
    badge: "4th Place",
    organizer: "Shobdotori · AIFication",
    title: "Bangla Dialect Speech Recognition",
    method: "Dual-stage fine-tuning pipeline using Whisper Medium and LoRA for dialect-aware Bangla speech recognition.",
    tags: ["Whisper", "LoRA", "Speech", "Bengali"],
    team: "BackpropSust",
    code: "https://github.com/Miftahul-adib/AIFication-4th-Place-Solution-BackpropSust"
  },
  {
    badge: "Top 15 / 101 Teams",
    organizer: "DUET AI Hackathon",
    title: "RoadVision — Vehicle Detection",
    method: "YOLOv8-based multi-class vehicle detection pipeline trained and evaluated on Bangladesh highway CCTV footage.",
    tags: ["YOLOv8", "Object Detection", "Computer Vision"],
    team: "BackpropSust",
    code: "https://github.com/Miftahul-adib/Duet-AI-Hackathon-solution"
  },
  {
    badge: "Rank 20 / 151 Teams",
    organizer: "National Datathon",
    title: "PoliMemeDecode — Political Meme Classification",
    method: "Dual-encoder setup (DeBERTa-v3 + RoBERTa) combined with YOLO logo detection and InsightFace for multimodal political meme classification.",
    tags: ["DeBERTa", "RoBERTa", "YOLO", "Multimodal", "NLP"],
    team: "BackpropSust",
    code: "https://github.com/Miftahul-adib/PoliMemeDecode"
  },
  {
    badge: "Final Round",
    organizer: "Infinity AI Buildfest · BRAC University",
    title: "SkinAI — Rural Healthcare Access",
    method: "Platform connecting rural patients in Bangladesh with nearby doctors, with initial skin condition prediction from uploaded images. Selected for preliminary and final round (Healthcare track).",
    tags: ["Healthcare", "Computer Vision", "Deployment"],
    team: "Paradox"
  },
  {
    badge: "4th Place · Online Track",
    organizer: "Build With Gemma @Bangladesh 2026 · Kaggle · Google DeepMind",
    title: "Khata — Whiteboard-to-Practice Pipeline",
    method: "Gemma-powered pipeline that photographs a classroom whiteboard and converts it into structured board-exam practice questions.",
    tags: ["Gemma", "LLM", "Education", "Multimodal"],
    team: "BackpropSust",
    writeup: "https://www.kaggle.com/competitions/build-with-gemma-bangladesh/writeups/new-writeup-1785044974927"
  }
];
function Competitions() {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxs("section", { id: "competitions", className: "page-section competitions-section", children: [
    /* @__PURE__ */ jsx("div", { className: "page-section__sidebar" }),
    /* @__PURE__ */ jsxs("div", { className: "section-wrapper", ref, children: [
      /* @__PURE__ */ jsx("span", { className: "reveal section-label", children: "Competitions" }),
      /* @__PURE__ */ jsx("div", { className: "comp__list", children: COMPETITIONS.map((c) => /* @__PURE__ */ jsxs("div", { className: "reveal comp__entry", children: [
        /* @__PURE__ */ jsxs("div", { className: "comp__header", children: [
          /* @__PURE__ */ jsx("span", { className: "comp__organizer", children: c.organizer }),
          /* @__PURE__ */ jsx("span", { className: "comp__badge", children: c.badge })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "comp__title", children: c.title }),
        c.team && /* @__PURE__ */ jsxs("p", { className: "comp__team", children: [
          "Team: ",
          c.team
        ] }),
        /* @__PURE__ */ jsx("p", { className: "comp__method", children: c.method }),
        /* @__PURE__ */ jsx("div", { className: "comp__tags", children: c.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "comp__tag", children: t }, t)) }),
        /* @__PURE__ */ jsxs("div", { className: "comp__links", children: [
          c.code && /* @__PURE__ */ jsx("a", { href: c.code, target: "_blank", rel: "noopener noreferrer", className: "comp__link", children: "Code ↗" }),
          c.writeup && /* @__PURE__ */ jsx("a", { href: c.writeup, target: "_blank", rel: "noopener noreferrer", className: "comp__link", children: "Writeup ↗" })
        ] })
      ] }, c.title)) })
    ] })
  ] });
}
const GROUPS = [
  {
    heading: "ML & Deep Learning",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "HuggingFace", "YOLO", "Whisper", "LangChain", "LangGraph", "Keras"]
  },
  {
    heading: "Data Analysis & Statistics",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Microsoft Excel", "SPSS", "Stata"]
  },
  {
    heading: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "FAISS Vector DB"]
  },
  {
    heading: "Deployment & Web",
    items: ["FastAPI", "Streamlit", "Pydantic", "Docker", "Render"]
  },
  {
    heading: "Languages & Tools",
    items: ["Python", "SQL", "HTML5", "Git", "GitHub", "Kaggle", "Jupyter"]
  }
];
function Skills() {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxs("section", { id: "skills", className: "page-section skills-section", children: [
    /* @__PURE__ */ jsx("div", { className: "page-section__sidebar" }),
    /* @__PURE__ */ jsxs("div", { className: "section-wrapper", ref, children: [
      /* @__PURE__ */ jsx("span", { className: "reveal section-label", children: "Skills" }),
      /* @__PURE__ */ jsx("div", { className: "skills__groups", children: GROUPS.map((g) => /* @__PURE__ */ jsxs("div", { className: "reveal skills__group", children: [
        /* @__PURE__ */ jsx("h3", { className: "skills__group-heading", children: g.heading }),
        /* @__PURE__ */ jsx("div", { className: "skills__pills", children: g.items.map((item) => /* @__PURE__ */ jsx("span", { className: "skills__pill", children: item }, item)) })
      ] }, g.heading)) })
    ] })
  ] });
}
const GOALS = [
  {
    title: "Philosophy, Psychology, Neuroscience & AI",
    body: "I am deeply interested in the intersection of mind and machine — how insights from philosophy of mind, cognitive psychology, and neuroscience can inform how we build and think about artificial intelligence, and what AI in turn reveals about cognition itself."
  },
  {
    title: "Machine Learning in Healthcare & Physical Science",
    body: "In healthcare, ML can reach patients that specialist care cannot — predicting disease, flagging risk, making the invisible visible in clinical data. In physical science, the laws are known but the patterns are not, and models that respect domain constraints while discovering what lies beyond human intuition are some of the most interesting things you can build."
  },
  {
    title: "Faculty Finder",
    body: "I am working on a platform for PhD aspirants to find professors whose research aligns with their interests."
  },
  {
    title: "Agentic AI & LLMs",
    body: "Building and studying autonomous LLM-based systems that can plan, use tools, and act across multi-step tasks, with a genuine interest in where these systems work, where they fail, and why."
  }
];
function Goals() {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxs("section", { id: "goals", className: "page-section", children: [
    /* @__PURE__ */ jsx("div", { className: "page-section__sidebar" }),
    /* @__PURE__ */ jsxs("div", { className: "section-wrapper", ref, children: [
      /* @__PURE__ */ jsx("span", { className: "reveal section-label", children: "Goals" }),
      /* @__PURE__ */ jsx("div", { className: "goals__grid", children: GOALS.map((g) => /* @__PURE__ */ jsxs("div", { className: "reveal goals__card", children: [
        /* @__PURE__ */ jsx("h4", { className: "goals__title", children: g.title }),
        /* @__PURE__ */ jsx("p", { className: "goals__body", children: g.body })
      ] }, g.title)) })
    ] })
  ] });
}
const LinkedInIcon = () => /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
  /* @__PURE__ */ jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
  /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
] });
const GitHubIcon = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) });
const KaggleIcon = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334z" }) });
const ScholarIcon = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" }) });
const EmailIcon = () => /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
] });
const SOCIALS = [
  { href: "https://www.linkedin.com/in/miftahul-alam-adib/", Icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://github.com/Miftahul-adib", Icon: GitHubIcon, label: "GitHub" },
  { href: "https://www.kaggle.com/miftahuladib", Icon: KaggleIcon, label: "Kaggle" },
  { href: "https://scholar.google.com/citations?hl=en&user=3UH7xHsAAAAJ", Icon: ScholarIcon, label: "Google Scholar" },
  { href: "mailto:miftahuladib04@gmail.com", Icon: EmailIcon, label: "Email" }
];
function Contact() {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "page-section contact-section", children: [
    /* @__PURE__ */ jsx("div", { className: "page-section__sidebar" }),
    /* @__PURE__ */ jsxs("div", { className: "section-wrapper", ref, children: [
      /* @__PURE__ */ jsx("span", { className: "reveal section-label", children: "Contact" }),
      /* @__PURE__ */ jsxs("div", { className: "contact__inner", children: [
        /* @__PURE__ */ jsx("a", { href: "mailto:miftahuladib04@gmail.com", className: "reveal contact__email", children: "miftahuladib04@gmail.com" }),
        /* @__PURE__ */ jsx("a", { href: "/my-portfolio/cv.pdf", className: "reveal contact__cv", download: true, children: "Download CV →" }),
        /* @__PURE__ */ jsx("div", { className: "reveal contact__socials", children: SOCIALS.map(({ href, Icon, label }) => /* @__PURE__ */ jsx(
          "a",
          {
            href,
            target: href.startsWith("mailto") ? void 0 : "_blank",
            rel: "noopener noreferrer",
            className: "contact__social",
            "aria-label": label,
            children: /* @__PURE__ */ jsx(Icon, {})
          },
          label
        )) })
      ] })
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx(Research, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Competitions, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Goals, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] })
  ] });
}
function render() {
  return renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  render
};
