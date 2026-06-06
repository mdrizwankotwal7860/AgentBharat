export const agents = [
  {
    id: "tax-agent",
    name: "TaxAgent",
    icon: "🧾",
    category: "Finance",
    type: "core",
    role: "GST & Compliance Specialist",
    description: "Reads Tally/Excel invoices, calculates CGST/SGST/IGST, auto-files GSTR-1 and GSTR-3B monthly, handles exceptions, sends confirmation.",
    tasks: [
      "Process invoices automatically",
      "Calculate applicable GST",
      "Auto-file GSTR-1 & GSTR-3B",
      "Handle compliance exceptions"
    ],
    tools: ["Tally", "Excel", "GST Portal", "WhatsApp"],
    languages: ["English", "Hindi", "Marathi", "Gujarati"]
  },
  {
    id: "support-agent",
    name: "SupportAgent",
    icon: "💬",
    category: "Customer",
    type: "core",
    role: "Customer Experience Manager",
    description: "Handles customer queries on WhatsApp and website in 12 Indian languages 24/7. Resolves issues end-to-end, escalates only when necessary.",
    tasks: [
      "24/7 Customer Support",
      "Multilingual responses",
      "Issue resolution",
      "Escalation management"
    ],
    tools: ["WhatsApp", "Website", "Zendesk", "Freshdesk"],
    languages: ["English", "Hindi", "Tamil", "Telugu", "Marathi", "Gujarati", "Bengali", "Kannada", "Malayalam", "Odia", "Punjabi", "Assamese"]
  },
  {
    id: "hire-agent",
    name: "HireAgent",
    icon: "👔",
    category: "HR",
    type: "core",
    role: "Talent Acquisition Specialist",
    description: "Posts jobs on Naukri/LinkedIn/Indeed, screens CVs overnight, conducts WhatsApp first-round interviews, shortlists and sends offer letters.",
    tasks: [
      "Post job listings",
      "Screen CVs automatically",
      "Conduct WhatsApp interviews",
      "Send offer letters"
    ],
    tools: ["Naukri", "LinkedIn", "Indeed", "WhatsApp"],
    languages: ["English", "Hindi"]
  },
  {
    id: "stock-agent",
    name: "StockAgent",
    icon: "📦",
    category: "Ops",
    type: "core",
    role: "Inventory & Supply Chain Manager",
    description: "Monitors stock levels in real-time, predicts reorder points using consumption patterns, auto-orders from supplier via WhatsApp.",
    tasks: [
      "Monitor stock levels",
      "Predict reorder points",
      "Auto-order from suppliers",
      "Track deliveries"
    ],
    tools: ["Excel", "Tally", "WhatsApp", "Inventory Systems"],
    languages: ["English", "Hindi"]
  },
  {
    id: "lead-agent",
    name: "LeadAgent",
    icon: "📲",
    category: "Sales",
    type: "core",
    role: "Sales Development Representative",
    description: "Responds to every lead on WhatsApp instantly, qualifies intent, nurtures over time, books demo calls, pushes hot leads to sales team.",
    tasks: [
      "Instant lead response",
      "Qualify lead intent",
      "Nurture prospects",
      "Book demo calls"
    ],
    tools: ["WhatsApp", "HubSpot", "Salesforce", "Calendly"],
    languages: ["English", "Hindi", "Tamil", "Telugu"]
  },
  {
    id: "collection-agent",
    name: "CollectionAgent",
    icon: "💰",
    category: "Finance",
    type: "power",
    role: "Accounts Receivable Manager",
    description: "Follows up on unpaid invoices automatically on Day 1, 3, 7, 15 via polite WhatsApp messages. Tracks payment status, escalates to owner after Day 15.",
    tasks: [
      "Automated follow-ups",
      "Track payment status",
      "Polite WhatsApp reminders",
      "Escalate unpaid invoices"
    ],
    tools: ["Tally", "Razorpay", "WhatsApp", "Excel"],
    languages: ["English", "Hindi", "Regional"]
  },
  {
    id: "content-agent",
    name: "ContentAgent",
    icon: "📱",
    category: "Marketing",
    type: "power",
    role: "Social Media & Content Manager",
    description: "Generates weekly Instagram posts, WhatsApp broadcasts, festival offers. Schedules and publishes automatically based on business type and seasonal data.",
    tasks: [
      "Generate Instagram posts",
      "Create WhatsApp broadcasts",
      "Design festival offers",
      "Schedule and publish"
    ],
    tools: ["Instagram", "WhatsApp", "Facebook", "Canva"],
    languages: ["English", "Hindi", "Marathi", "Bengali"]
  },
  {
    id: "review-agent",
    name: "ReviewAgent",
    icon: "⭐",
    category: "Reputation",
    type: "power",
    role: "Online Reputation Manager",
    description: "Monitors Google, Zomato, Practo and other reviews. Replies to every review within minutes. Flags negative reviews to owner for personal attention.",
    tasks: [
      "Monitor online reviews",
      "Reply within minutes",
      "Flag negative reviews",
      "Sentiment analysis"
    ],
    tools: ["Google My Business", "Zomato", "Practo", "Yelp"],
    languages: ["English", "Hindi"]
  },
  {
    id: "booking-agent",
    name: "BookingAgent",
    icon: "📅",
    category: "Ops",
    type: "power",
    role: "Appointment & Slot Manager",
    description: "Manages booking calendars for clinics, salons, coaching centres. Sends confirmations, 1-hour reminders, handles cancellations and reschedules.",
    tasks: [
      "Manage booking calendar",
      "Send confirmations",
      "Send 1-hour reminders",
      "Handle reschedules"
    ],
    tools: ["Google Calendar", "WhatsApp", "Calendly", "Website"],
    languages: ["English", "Hindi", "Regional"]
  }
];
