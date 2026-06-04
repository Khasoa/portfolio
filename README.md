# Lydia K. — Portfolio

Personal portfolio site built with React. Showcases backend engineering projects, workflow automation systems, and technical skills.

**Live site:** [your-vercel-url]

---

## Stack

- React (Vite)
- Plain CSS with CSS variables — no component library
- Google Fonts: Instrument Serif, Geist
- Deployed on Vercel

---

## Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Workflows.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Divider.jsx
│   └── SectionHeader.jsx
├── data/
│   ├── index.js          # All content — projects, workflows, skills
│   └── brandIcons.js     # SVG path data for skill icons
├── App.jsx
└── index.css
```

All site content lives in `src/data/index.js`. To update projects, workflows, or skills — edit that file only. No component changes needed.

---

## Sections

**Projects** — Backend engineering work. Each card shows name, tagline, description, stack tags, GitHub and live links.

**Workflow Automation** — Three n8n automation systems built as standalone portfolio pieces. Cards show level badge, description, tool tags, and links to GitHub repo, Notion case study, and live demo where available.

**Skills** — Grouped icon grid across Backend, Frontend, Automation & AI, and Tools. Icons sourced from `brandIcons.js` (SVG path data) with inline custom SVGs for tools that have no clean brand icon.

---

## Adding a project

In `src/data/index.js`, add an object to the `projects` array:

```javascript
{
  id: 3, num: "03",
  name: "Project Name",
  tagline: "One-line description",
  description: "Two-sentence description of the problem and what it does.",
  stack: ["Tech1", "Tech2"],
  github: "https://github.com/yourusername/repo",
  live: "",           // leave empty string if not deployed
},
```

---

## Adding a workflow

In `src/data/index.js`, add an object to the `workflows` array:

```javascript
{
  id: 4, num: "04",
  name: "Workflow Name",
  tagline: "Short descriptor",
  description: "Problem. Solution.",
  tools: ["n8n", "OpenAI GPT-4o", "Google Sheets", "Gmail", "Slack"],
  github: "https://github.com/yourusername/repo",
  notion: "",         // Notion case study URL
  live: "",           // live demo URL if available
  comingSoon: false,
  level: "Level 4",
},
```

---

## Adding a skill icon

1. Find the SVG path for the tool at [simpleicons.org](https://simpleicons.org)
2. Add an entry to `src/data/brandIcons.js`:

```javascript
"Tool Name": { color: "#hexcolor", path: "SVG path data" },
```

3. Add `"Tool Name"` to the relevant category array in `src/data/index.js`

If there is no clean single-path brand icon, add an inline SVG to the `customSVGs` object in `src/components/Skills.jsx` instead.

---

## Running locally

```bash
npm install
npm run dev
```

---

## Deploying

Connected to Vercel. Push to `main` to auto-deploy.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## Design tokens

Defined in `src/index.css`:

```css
--bg:        #0f1117   /* page background */
--coral:     #f0a898   /* primary accent */
--coral-dim: rgba(240,168,152,0.11)
--coral-mid: rgba(240,168,152,0.24)
--cream:     #ffffff
--text:      #e8e3dc
--muted:     #b8b3ac
--muted2:    #6a6460
--border:    rgba(255,255,255,0.10)
--border2:   rgba(255,255,255,0.18)
```

Coral is used on: eyebrows, section accents, hover states, CTA buttons, level badges, active nav links. Not on body text or taglines.