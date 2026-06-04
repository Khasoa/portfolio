export const projects = [
  {
    id: 1, num: "01",
    name: "Tareka",
    tagline: "Kenya's recycling ecosystem platform",
    description: "Centralises recycling companies, digitises intake processes, and rewards contributors with tokens via Kotani Pay. Built on FastAPI with PostgreSQL, containerised with Docker.",
    stack: ["FastAPI", "PostgreSQL", "Next.js", "Redis", "Docker", "GitHub Actions"],
    github: "https://github.com/YOUR_USERNAME/tareka",
    live: "https://tareka.vercel.app",
  },
  {
    id: 2, num: "02",
    name: "TerraFold Trace",
    tagline: "Agricultural data traceability system",
    description: "Tracks produce from farmer through harvest, batch, aggregation to warehouse and buyer purchase orders. Full audit trail from field to invoice.",
    stack: ["React", "Flask", "SQLAlchemy", "PostgreSQL", "JWT"],
    github: "https://github.com/YOUR_USERNAME/terrafold-trace",
    live: "",
  },
]

export const workflows = [
  {
    id: 1, num: "01",
    name: "Lead Intelligence",
    tagline: "Revenue intake automation",
    description: "Inbound leads are often manually reviewed, inconsistently prioritized, and delayed in response — resulting in lost conversion opportunities. This system ingests every lead instantly, applies AI-based scoring to evaluate intent and quality, and routes each lead into structured pipelines (Hot, Warm, Cold) with automated follow-up actions. Every lead is logged, classified, and acted on in real time, ensuring no opportunity is missed.",
    tools: ["n8n", "OpenAI GPT-4o", "Google Sheets", "Gmail", "Slack", "Webhook"],
    github: "https://github.com/YOUR_USERNAME/n8n-lead-intelligence-engine",
    notion: "https://YOUR_NOTION_CASE_STUDY_LINK",
    live: "",
    comingSoon: false,
    level: "Level 1",
  },
  {
    id: 2, num: "02",
    name: "Operational Workflow",
    tagline: "Internal operations routing",
    description: "Internal business requests such as onboarding, task assignments, and escalations are typically scattered across email and chat tools, leading to delays and unclear ownership. This system captures all incoming operational requests, uses AI to classify the request type and urgency, and routes it into the correct departmental queue with defined priority levels. Each request is tracked through its lifecycle with automated notifications to ensure accountability and resolution speed.",
    tools: ["n8n", "OpenAI GPT-4o", "Google Sheets", "Gmail", "Slack", "Switch Node"],
    github: "https://github.com/YOUR_USERNAME/n8n-ops-workflow-engine",
    notion: "",
    live: "",
    comingSoon: false,
    level: "Level 2",
  },
  {
    id: 3, num: "03",
    name: "Supplier Compliance Automation",
    tagline: "Enterprise governance and risk management",
    description: "Supplier onboarding processes are often manual, inconsistent, and lack proper auditability, creating risk exposure and compliance gaps. This system evaluates each supplier submission using AI-driven risk scoring combined with rule-based validation for documentation completeness and fraud indicators. Based on the evaluation, suppliers are automatically routed into Approved, Review, or Rejected pipelines, with every decision logged in an immutable audit trail for full traceability and compliance reporting.",
    tools: ["n8n", "OpenAI GPT-4o", "Google Sheets", "Gmail", "Slack", "Compliance Rules Engine"],
    github: "https://github.com/YOUR_USERNAME/n8n-supplier-compliance-engine",
    notion: "",
    live: "",
    comingSoon: false,
    level: "Level 3",
  },
]

export const skills = {
  "Backend": [
    "Python", "FastAPI", "Flask", "PostgreSQL", 
    "SQLAlchemy", "REST APIs", "pytest"
  ],
  "Frontend": [
    "React", "Nextjs", "HTML/CSS", "Tailwind"
  ],
  "Automation & AI": [
    "n8n", "OpenAI GPT-4o", 
    "Anthropic Claude" ],
  "Tools": [
    "Git", "GitHub", "Docker", "Postman", "Google Sheets API", "Notion"
  ],
}