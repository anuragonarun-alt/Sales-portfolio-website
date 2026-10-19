/**
 * ══════════════════════════════════════════════════════
 *  ANURAG RAI — PORTFOLIO CONTENT CONFIGURATION
 * ══════════════════════════════════════════════════════
 *
 *  This is the single source-of-truth for all site copy.
 *  - Set a field to "" (empty string) or null to hide it.
 *  - Set `visible: false` on any proof media card to hide it.
 *  - Set `hidden: true` on any experience entry to hide it.
 *
 *  DO NOT fabricate metrics, employers, or client results.
 *  Leave placeholders in place until you can verify them.
 * ══════════════════════════════════════════════════════
 */

// ── Metrics ─────────────────────────────────────────────────────────────────
// Each metric is shown only when `value` is non-empty.
export type Metric = {
  id: string;
  label: string;
  value: string;      // e.g. "$100K+"  — leave "" to hide
  subtext?: string;   // e.g. "across all campaigns"
};

export const metrics: Metric[] = [
  {
    id: "cash-collected",
    label: "Cash Collected",
    value: "$100K+",
    subtext: "verified across campaigns",
  },
  {
    id: "deals-closed",
    label: "Deals Closed",
    value: "",          // ← fill in once verified
    subtext: "high-ticket contracts",
  },
  {
    id: "appointments-booked",
    label: "Appointments Booked",
    value: "",          // ← fill in once verified
    subtext: "qualified calls set",
  },
  {
    id: "conversion-rate",
    label: "Conversion Rate",
    value: "",          // ← fill in once verified
    subtext: "close rate on qualified calls",
  },
];

// ── Experience ───────────────────────────────────────────────────────────────
export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;        // company or offer name
  dates: string;          // e.g. "Jan 2024 – Present"
  offerCategory: string;  // e.g. "Coaching / Info-Products"
  responsibilities: string[];
  results: string[];      // only real, verified results
  hidden?: boolean;       // set true to hide without deleting
};

export const experience: ExperienceEntry[] = [
  // ─── Add your real experience entries here ────────────────────────────────
  // Example structure (hidden by default — fill in and set hidden: false):
  // {
  //   id: "example-role",
  //   role: "High-Ticket Closer",
  //   company: "[Offer / Company Name]",
  //   dates: "[Start] – [End]",
  //   offerCategory: "[Coaching / Agency / SaaS / etc.]",
  //   responsibilities: [
  //     "Running inbound sales calls for a …",
  //     "Managing a pipeline of qualified leads via …",
  //   ],
  //   results: [
  //     "$X collected in [timeframe]",
  //   ],
  //   hidden: false,
  // },
];

// ── Sales Proof ──────────────────────────────────────────────────────────────
export type ProofItem = {
  id: string;
  type: "loom" | "recording" | "case-study" | "testimonial";
  title: string;
  description?: string;
  url: string;            // leave "" to hide
  visible: boolean;
};

export const proofItems: ProofItem[] = [
  {
    id: "intro-loom",
    type: "loom",
    title: "Introduction Video",
    description: "A short Loom walk-through of my sales approach and track record.",
    url: "",              // ← paste Loom embed URL here
    visible: true,
  },
  {
    id: "call-recording-1",
    type: "recording",
    title: "Sales Call Recording",
    description: "A live recorded call demonstrating objection handling and closing.",
    url: "",              // ← paste recording URL here
    visible: true,
  },
];

// ── Target Role ───────────────────────────────────────────────────────────────
export type TargetRole = {
  summary: string;            // 1–2 sentences describing ideal role
  preferredOfferCategory: string; // e.g. "High-ticket coaching, SaaS, agency services"
  compensationStructure: string;  // e.g. "Base + Commission", "Commission-only considered"
  availability: string;           // e.g. "Immediately available", "2-week notice"
  remotePreference: string;       // e.g. "Remote only", "Open to hybrid"
  additionalNotes: string;        // any extra context; leave "" to hide
};

export const targetRole: TargetRole = {
  summary:
    "Seeking a high-ticket closing or appointment-setting role where I can contribute to a process-driven sales team and drive consistent revenue.",
  preferredOfferCategory: "Coaching, consulting, agency services, or SaaS",
  compensationStructure: "Commission-based or base + commission",
  availability: "Immediately available",
  remotePreference: "Remote",
  additionalNotes: "", // leave "" to hide this field
};

// ── Contact ───────────────────────────────────────────────────────────────────
export type ContactConfig = {
  email: string;          // leave "" to hide
  linkedin: string;       // full LinkedIn profile URL; leave "" to hide
  bookingLink: string;    // Calendly / Cal.com / TidyCal URL; leave "" to hide
  twitter: string;        // full Twitter/X URL; leave "" to hide
};

export const contact: ContactConfig = {
  email: "",              // ← e.g. "anurag@example.com"
  linkedin: "",           // ← e.g. "https://linkedin.com/in/anuragrai"
  bookingLink: "",        // ← e.g. "https://cal.com/anuragrai"
  twitter: "",            // ← e.g. "https://twitter.com/anuragrai"
};

// ── Site identity (used across sections and footer) ───────────────────────────
export const identity = {
  name: "Anurag Rai",
  role: "High-Ticket Sales & Appointment Setting",
  copyrightYear: new Date().getFullYear(),
};
