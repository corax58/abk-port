import { Project } from "@/types";

export const aiLeadEnrichmentPipeline: Project = {
  title: "AI Lead Enrichment & Qualification Pipeline",
  description:
    "Automated lead pipeline that researches, scores, and drafts outreach for every inbound lead within 60 seconds — no human triage required.",
  fullDescription: `A B2B service business was handling every inbound lead manually — someone would read the form submission, google the company, guess whether it was worth chasing, and write a reply by hand. That took 15–30 minutes per lead, replies were inconsistent, and hot leads sometimes sat for a day or two before anyone followed up. I built an automated pipeline that does all of that the moment a lead submits the contact form.

### Intake
A **Tally** form captures the minimum fields needed to qualify a lead — name, work email, company, website, and what they need help with — then fires a webhook into n8n the instant it's submitted.

### Enrichment & Scoring
An **n8n** workflow scrapes the lead's company website, strips it down to readable text, and passes everything to an LLM with a strict prompt template. The model returns a structured JSON payload: a 1–10 fit score, reasoning, an industry guess, and a fully drafted first-touch outreach email — subject and body, personalized to what the lead actually asked for.

### Error Handling
If the website scrape fails or the LLM returns malformed JSON, the lead isn't dropped — it's still logged to Airtable with a "Needs Manual Review" status and a lower-priority Slack ping, so nothing silently disappears.

### Routing & Alerts
Every lead is logged to **Airtable**, which serves as the CRM for this phase. Leads scoring 7+ trigger an immediate **Slack** alert to a #hot-leads channel with the score, reasoning, and a ready-to-send draft email, so a rep can act in one click.

### Automatic Follow-Up
A separate scheduled n8n workflow runs daily, checks Airtable for any lead left untouched for 3+ days, and sends a Slack reminder (plus an optional follow-up draft), then marks it so it doesn't nag repeatedly.

### Tech Stack
- **n8n** for workflow orchestration, scraping, error handling, and scheduling
- **Tally** for the intake form
- **Gemini** for lead scoring and email drafting
- **Airtable** as the lead CRM
- **Slack** for real-time alerts and follow-up reminders`,
  projectSource: "Freelance",
  liveLink: "",
  status: "live",
  featuredImage: "/assets/projects/lead-pipeline-main.png",
  images: [
    "/assets/projects/lead-pipeline-1.png",
    "/assets/projects/lead-pipeline-2.png",
    "/assets/projects/lead-pipeline-3.png",
  ],
  alt: "n8n workflow diagram for the AI lead enrichment and qualification pipeline",
  contribution:
    "Designed and built the full pipeline end to end — the n8n workflow (scrape, LLM scoring/drafting, error handling), the Airtable base structure, and the Slack routing/follow-up logic — so every lead gets enriched, scored, and routed within 60 seconds with zero manual triage.",
  toolsId: ["n8n"],
};
