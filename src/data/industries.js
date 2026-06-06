export const industries = [
  {
    id: "coaching",
    name: "Coaching Centre",
    description: "Automate admissions, student support, and fee collection.",
    agentUses: [
      { agentId: "lead-agent", task: "Responds to student inquiries 24/7 on WhatsApp" },
      { agentId: "collection-agent", task: "Sends polite fee reminders to parents" },
      { agentId: "booking-agent", task: "Schedules demo classes with teachers" }
    ]
  },
  {
    id: "restaurant",
    name: "Restaurant",
    description: "Manage reviews, inventory, and marketing on autopilot.",
    agentUses: [
      { agentId: "review-agent", task: "Replies to all Zomato and Google reviews instantly" },
      { agentId: "stock-agent", task: "Predicts when oil and flour will run out" },
      { agentId: "content-agent", task: "Posts weekend special offers on Instagram" }
    ]
  },
  {
    id: "retail",
    name: "Retail Shop",
    description: "Handle GST, billing, and customer loyalty with zero effort.",
    agentUses: [
      { agentId: "tax-agent", task: "Files GSTR-1 and GSTR-3B from your daily bills" },
      { agentId: "support-agent", task: "Answers 'is this available?' queries on WhatsApp" },
      { agentId: "hire-agent", task: "Recruits shop assistants from local areas" }
    ]
  }
];
