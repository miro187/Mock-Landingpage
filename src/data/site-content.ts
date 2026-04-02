import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Gauge,
  Handshake,
  Layers3,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";

type Stat = {
  value: string;
  label: string;
};

type LinkItem = {
  label: string;
  href: string;
};

type Service = {
  title: string;
  description: string;
  eyebrow: string;
  icon: LucideIcon;
};

type ProcessStep = {
  title: string;
  description: string;
};

type Advantage = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type CaseStudy = {
  title: string;
  category: string;
  summary: string;
  outcomes: Stat[];
};

type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type Faq = {
  question: string;
  answer: string;
};

export const companyName = "Northpoint Systems";

export const navLinks: LinkItem[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats: Stat[] = [
  { value: "58", label: "illustrative workflows mapped across the demo site" },
  { value: "14h", label: "fictional weekly hours returned to operations teams" },
  { value: "9 days", label: "mock timeline to first working delivery sprint" },
];

export const trustHighlights = [
  "Clean business presentation in default light mode",
  "All names, figures, and references are fictional",
  "Built with Next.js, Tailwind CSS, TypeScript, and Framer Motion",
];

export const showcaseBrands = [
  "Claremont Health",
  "Atlas Ledger",
  "North Harbor",
  "Summit Retail",
  "Meridian Ops",
  "Aster Grove",
];

export const services: Service[] = [
  {
    eyebrow: "Signal to system",
    title: "Workflow Architecture",
    description:
      "Map messy handoffs into clear automations that route requests, trigger follow-ups, and keep teams moving without spreadsheet chaos.",
    icon: Workflow,
  },
  {
    eyebrow: "AI support layer",
    title: "Agent Assist Builds",
    description:
      "Design smart assistants for intake, qualification, research, and internal enablement with human review where it matters.",
    icon: Bot,
  },
  {
    eyebrow: "Revenue clarity",
    title: "Reporting Dashboards",
    description:
      "Turn raw pipeline activity into executive-friendly dashboards with trend snapshots, alerts, and concise weekly reporting rituals.",
    icon: BarChart3,
  },
  {
    eyebrow: "Tool consolidation",
    title: "Systems Integration",
    description:
      "Connect CRMs, forms, inboxes, billing tools, and databases so your stack behaves like one system instead of six disconnected tabs.",
    icon: Layers3,
  },
  {
    eyebrow: "Risk-aware execution",
    title: "Governance and QA",
    description:
      "Add approvals, audit checkpoints, fallback paths, and exception handling so automations stay trustworthy after launch.",
    icon: ShieldCheck,
  },
  {
    eyebrow: "Launch velocity",
    title: "Growth Experiment Ops",
    description:
      "Package offers, outbound motions, and campaign loops into repeatable workflows that make testing feel structured instead of frantic.",
    icon: Sparkles,
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Audit the bottlenecks",
    description:
      "We start with decision points, repeat tasks, and the moments where revenue or delivery quality usually gets stuck.",
  },
  {
    title: "Design the operating map",
    description:
      "Every trigger, rule, owner, approval, and edge case is translated into a cleaner operating flow before any build starts.",
  },
  {
    title: "Build the automation layer",
    description:
      "We wire the stack, create the interfaces, and ship dashboards, assistants, and workflows that feel calm to use on day one.",
  },
  {
    title: "Refine after launch",
    description:
      "Performance gets reviewed, weak handoffs get tightened, and the system evolves into something the team can actually trust.",
  },
];

export const advantages: Advantage[] = [
  {
    title: "Executive-ready polish",
    description:
      "The interface, copy, and flow are presented like a serious client-ready system instead of a rough prototype.",
    icon: Gauge,
  },
  {
    title: "Business-first thinking",
    description:
      "Automation choices are framed around team clarity, service speed, and conversion quality rather than tool hype.",
    icon: Handshake,
  },
  {
    title: "Calm complexity handling",
    description:
      "Fallbacks, approvals, and handoff visibility are built in so the experience still feels composed under real-world pressure.",
    icon: Radar,
  },
  {
    title: "Maintainable handoff",
    description:
      "The codebase is structured to be easy to extend, re-theme, and adapt into a real client project later.",
    icon: Wrench,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "HelioCart support routing",
    category: "Fictional ecommerce ops scenario",
    summary:
      "A mock system for triaging support requests, enriching order context, and sending high-intent refund cases to the right owner fast.",
    outcomes: [
      { value: "42%", label: "illustrative faster first-response time" },
      { value: "18h", label: "fictional weekly manual triage removed" },
      { value: "96%", label: "demo routing accuracy after QA rules" },
    ],
  },
  {
    title: "Summit Ledger onboarding flow",
    category: "Fictional finance operations scenario",
    summary:
      "A streamlined intake and qualification system that turns scattered onboarding steps into one predictable internal motion.",
    outcomes: [
      { value: "61%", label: "mock faster onboarding completion" },
      { value: "7", label: "illustrative handoffs replaced by automation" },
      { value: "2.4x", label: "demo increase in qualified account handoff rate" },
    ],
  },
  {
    title: "Northbound Health intake desk",
    category: "Fictional service business scenario",
    summary:
      "An example front-desk automation layer for reminders, intake completion, and visibility across a scheduling-heavy team.",
    outcomes: [
      { value: "33%", label: "fictional drop in no-show volume" },
      { value: "81%", label: "illustrative form completion before appointments" },
      { value: "5 to 1", label: "mock spreadsheet stack consolidated into one view" },
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter Sprint",
    price: "EUR 2,400",
    cadence: "illustrative one-time setup",
    description:
      "Best for a focused landing-page-style automation package or one defined internal workflow.",
    features: [
      "1 core workflow build",
      "UI handoff with polished dashboard states",
      "Basic QA and exception handling",
      "Async launch support",
    ],
    cta: "Choose starter",
  },
  {
    name: "Growth System",
    price: "EUR 5,900",
    cadence: "illustrative launch package",
    description:
      "A stronger multi-flow engagement for teams that want a visible system, better reporting, and cleaner operations.",
    features: [
      "Up to 3 connected workflows",
      "Executive reporting layer",
      "Assistant or agent interface concept",
      "Priority optimization sprint",
    ],
    highlight: true,
    cta: "Choose growth",
  },
  {
    name: "Signature Retainer",
    price: "EUR 1,800",
    cadence: "illustrative monthly continuation",
    description:
      "For ongoing iteration, experimentation, and system tuning after the initial rollout has gone live.",
    features: [
      "Monthly optimization roadmap",
      "Capacity for new automations",
      "Performance reviews and QA",
      "Strategic advisory support",
    ],
    cta: "Choose signature",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "This demo feels like the kind of agency site a funded startup would actually launch with. Even the fictional metrics are presented responsibly.",
    name: "Elena Ward",
    role: "Fictional COO, LumaForge",
  },
  {
    quote:
      "The structure is clean, the hierarchy feels premium, and the mock proof points still make the experience credible as a showcase piece.",
    name: "Mason Reed",
    role: "Fictional Growth Lead, Quarry Labs",
  },
  {
    quote:
      "You can tell this was built to demonstrate delivery quality, not just visual trends. It reads like a real project with thoughtful guardrails.",
    name: "Priya Sol",
    role: "Fictional Product Consultant, Northgrid",
  },
  {
    quote:
      "If I saw this in a freelancer portfolio, I would assume the builder can handle serious business landing pages end to end.",
    name: "Jonah Ellis",
    role: "Fictional Founder, Vector Harbor",
  },
];

export const faqs: Faq[] = [
  {
    question: "Is this brand real?",
    answer:
      "No. Northpoint Systems is intentionally fictional. The brand, copy, logos, metrics, testimonials, pricing, and contact details exist only to demonstrate portfolio-quality execution.",
  },
  {
    question: "Could this structure be adapted for a real client?",
    answer:
      "Yes. The layout, component system, and content rhythm are designed so the mock content can be replaced with real business messaging without rewriting the whole app.",
  },
  {
    question: "Why make the demo disclaimer so visible?",
    answer:
      "Because the goal is to showcase capability without implying real partnerships or results. The design should feel convincing while staying ethically clear.",
  },
  {
    question: "What makes this useful for GitHub and Fiverr?",
    answer:
      "It demonstrates layout craft, motion restraint, responsiveness, semantic structure, maintainable code organization, and a stronger level of copy polish than a blank template.",
  },
  {
    question: "Can the visual style be re-themed?",
    answer:
      "Absolutely. The design system relies on reusable sections, shared spacing, and global tokens, so adapting it to a lighter or more brand-specific direction is straightforward.",
  },
  {
    question: "Does the pricing represent a real offer?",
    answer:
      "No. The pricing cards are illustrative only and are included to complete the SaaS-style landing page experience in a believable, clearly fictional way.",
  },
];

export const footerLinks: LinkItem[] = [
  { label: "Services", href: "#services" },
  { label: "Why choose us", href: "#about" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://example.com/linkedin" },
  { label: "X / Twitter", href: "https://example.com/x" },
  { label: "Dribbble", href: "https://example.com/dribbble" },
  { label: "GitHub", href: "https://example.com/github" },
];
