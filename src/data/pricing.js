export const plans = [
  {
    id: "free-trial",
    name: "Free Trial",
    agents: "1 Agent",
    price: "₹0",
    period: "/ 7 days",
    trialDays: 7,
    idealFor: "First-time users exploring AgentBharat. Try any 1 agent free for 7 days with full access.",
    highlighted: false,
    features: [
      "1 Agent for 7 days",
      "WhatsApp Integration",
      "12 Indian Languages",
      "Task Dashboard"
    ]
  },
  {
    id: "starter",
    name: "Starter",
    agents: "1 Agent",
    price: "₹999",
    period: "/ month",
    trialDays: 7,
    idealFor: "Solo freelancers, home businesses, single-function needs (e.g. just tax filing or just support).",
    highlighted: false,
    features: [
      "Any 1 Agent",
      "WhatsApp Integration",
      "12 Indian Languages",
      "Task Dashboard",
      "Daily Activity Reports"
    ]
  },
  {
    id: "growth",
    name: "Growth",
    agents: "3 Agents",
    price: "₹2,499",
    period: "/ month",
    trialDays: 7,
    idealFor: "Small shops, coaching centres, local services. Save ₹498/month vs buying 3 agents separately.",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Any 3 Agents",
      "WhatsApp Integration",
      "12 Indian Languages",
      "Task Dashboard",
      "Daily Activity Reports",
      "Custom Agent Persona"
    ]
  },
  {
    id: "business",
    name: "Business",
    agents: "All 9 Agents",
    price: "₹3,999",
    period: "/ month",
    trialDays: 7,
    idealFor: "Restaurants, manufacturers, agencies, clinics. Full agent suite for complete business automation.",
    highlighted: false,
    features: [
      "All 9 Agents",
      "WhatsApp Integration",
      "12 Indian Languages",
      "Task Dashboard",
      "Daily Activity Reports",
      "Custom Agent Persona",
      "Priority Support"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    agents: "Custom",
    price: "Custom",
    period: "",
    trialDays: 14,
    idealFor: "Large SMEs with custom workflows. Dedicated onboarding, SLA, custom agent training.",
    highlighted: false,
    features: [
      "Custom number of Agents",
      "WhatsApp Integration",
      "12 Indian Languages",
      "Task Dashboard",
      "Daily Activity Reports",
      "Custom Agent Persona",
      "Priority Support",
      "Custom Agent Training",
      "Dedicated Account Manager",
      "API Access"
    ]
  }
];

export const features = [
  {
    name: "Number of Agents",
    free: "1 (7 days)",
    starter: "1",
    growth: "3",
    business: "All 9",
    enterprise: "Custom"
  },
  {
    name: "WhatsApp Integration",
    free: true,
    starter: true,
    growth: true,
    business: true,
    enterprise: true
  },
  {
    name: "12 Indian Languages",
    free: true,
    starter: true,
    growth: true,
    business: true,
    enterprise: true
  },
  {
    name: "Task Dashboard",
    free: true,
    starter: true,
    growth: true,
    business: true,
    enterprise: true
  },
  {
    name: "Daily Activity Reports",
    free: "Read-only",
    starter: true,
    growth: true,
    business: true,
    enterprise: true
  },
  {
    name: "Custom Agent Persona",
    free: false,
    starter: false,
    growth: true,
    business: true,
    enterprise: true
  },
  {
    name: "Priority Support",
    free: false,
    starter: false,
    growth: false,
    business: true,
    enterprise: true
  },
  {
    name: "Custom Agent Training",
    free: false,
    starter: false,
    growth: false,
    business: false,
    enterprise: true
  },
  {
    name: "Dedicated Account Manager",
    free: false,
    starter: false,
    growth: false,
    business: false,
    enterprise: true
  },
  {
    name: "API Access",
    free: false,
    starter: false,
    growth: false,
    business: false,
    enterprise: true
  }
];
