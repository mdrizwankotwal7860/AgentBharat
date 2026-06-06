import PptxGenJS from 'pptxgenjs';

const pptx = new PptxGenJS();

pptx.layout = 'LAYOUT_16x9';
pptx.author = 'AgentBharat';
pptx.company = 'AgentBharat';
pptx.title = 'AgentBharat Pitch Deck v2';

// Slide Masters
pptx.defineSlideMaster({
  title: 'MASTER_SLIDE',
  background: { color: '0F172A' }, // Navy
  objects: [
    { rect: { x: 0, y: 0, w: '100%', h: 0.8, fill: { color: '00E5FF' } } }, // Cyan top bar
    { text: { text: 'AgentBharat', options: { x: 0.5, y: 0.1, w: 3, h: 0.5, color: '0F172A', fontSize: 18, bold: true } } },
    { text: { text: 'India\'s AI Workforce', options: { x: '80%', y: 0.1, w: 2, h: 0.5, color: '0F172A', fontSize: 14, align: 'right' } } },
  ],
  slideNumber: { x: '95%', y: '95%', color: 'FFFFFF', fontSize: 12 }
});

// Slide 1: Title
let slide1 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide1.addText('AgentBharat', { x: 1, y: 2, w: 8, h: 1, fontSize: 54, bold: true, color: '00E5FF' });
slide1.addText('Pay for software, not salaries.', { x: 1, y: 3, w: 8, h: 0.5, fontSize: 28, color: 'FFFFFF' });
slide1.addText('Startup Pitch Deck', { x: 1, y: 4, w: 8, h: 0.5, fontSize: 18, color: 'F59E0B' });

// Slide 2: Startup Idea
let slide2 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide2.addText('STARTUP IDEA: WHAT IT DOES', { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 32, bold: true, color: '00E5FF' });
slide2.addText([
    { text: 'Concept: A centralized platform offering 9 specialized AI digital employees (Agents) for small businesses.\n\n', options: { bullet: true, fontSize: 20, color: 'FFFFFF' } },
    { text: 'Core Functionality: It automates complex, time-consuming tasks like accounting, lead generation, and customer support entirely over WhatsApp.\n\n', options: { bullet: true, fontSize: 20, color: 'FFFFFF' } },
    { text: 'Value Proposition: Giving small street-side businesses the same AI automation power as a Fortune 500 company, at just ₹999/month.', options: { bullet: true, fontSize: 20, color: 'FFFFFF' } }
], { x: 0.5, y: 2, w: 9, h: 3 });

// Slide 3: Problem Statement
let slide3 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide3.addText('PROBLEM STATEMENT', { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 32, bold: true, color: '00E5FF' });
slide3.addText([
    { text: '1. High Human Capital Costs: Hiring staff for basic data entry or support costs ₹15,000 - ₹25,000/month. MSMEs cannot afford this overhead.\n\n', options: { bullet: true, fontSize: 20, color: 'FFFFFF' } },
    { text: '2. Owner Burnout: Without staff, the owner spends 14+ hours a week filing GST, checking inventory, and manually replying to WhatsApp leads.\n\n', options: { bullet: true, fontSize: 20, color: 'FFFFFF' } },
    { text: '3. Software Complexity: Existing tools (like Tally) require accounting knowledge to operate. They digitize data, but they do not DO the work.', options: { bullet: true, fontSize: 20, color: 'FFFFFF' } }
], { x: 0.5, y: 2, w: 9, h: 3 });

// Slide 4: Proposed Solution & Improvement
let slide4 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide4.addText('PROPOSED SOLUTION & IMPROVEMENT', { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 32, bold: true, color: '00E5FF' });
slide4.addText([
    { text: 'The Solution: A fleet of AI Agents (TaxAgent, SalesAgent, SupportAgent) that execute tasks autonomously.\n\n', options: { bullet: true, fontSize: 20, color: '10B981', bold: true } },
    { text: 'How It Improves the Status Quo:\n', options: { fontSize: 20, color: 'F59E0B', bold: true } },
    { text: '   - Zero Learning Curve: Operates seamlessly on WhatsApp. No complex dashboards to learn.\n', options: { bullet: true, fontSize: 18, color: 'FFFFFF' } },
    { text: '   - Instant ROI: Connects directly to existing Tally data or Razorpay to pull data instantly.\n', options: { bullet: true, fontSize: 18, color: 'FFFFFF' } },
    { text: '   - 24/7 Operation: Replies to customer leads in 5 seconds at 2 AM, preventing lost sales.', options: { bullet: true, fontSize: 18, color: 'FFFFFF' } }
], { x: 0.5, y: 2, w: 9, h: 3 });

// Slide 5: Target Users
let slide5 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide5.addText('TARGET USERS', { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 32, bold: true, color: '00E5FF' });
slide5.addText('Market Focus: Digitized Tier 2 & Tier 3 MSMEs in India.', { x: 0.5, y: 1.6, w: 9, h: 0.5, fontSize: 20, color: 'F59E0B' });
slide5.addText([
    { text: 'Coaching Centres & Tuition Institutes:\n', options: { fontSize: 20, color: '00E5FF', bold: true } },
    { text: '   - Needs: Fee collection reminders, student lead management, batch scheduling queries.\n\n', options: { fontSize: 16, color: 'FFFFFF' } },
    { text: 'Restaurants, Cafes & Cloud Kitchens:\n', options: { fontSize: 20, color: '10B981', bold: true } },
    { text: '   - Needs: Low stock alerts for raw materials, reservation handling, Zomato/Swiggy tax reconciliation.\n\n', options: { fontSize: 16, color: 'FFFFFF' } },
    { text: 'Retail Shops & E-Commerce Sellers:\n', options: { fontSize: 20, color: 'EF4444', bold: true } },
    { text: '   - Needs: 24/7 customer support, order tracking automation, bulk WhatsApp marketing.', options: { fontSize: 16, color: 'FFFFFF' } }
], { x: 0.5, y: 2.2, w: 9, h: 3 });

// Slide 6: How It Works & Training Phase
let slide6 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide6.addText('HOW IT WORKS: UI & TRAINING PHASE', { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 32, bold: true, color: '00E5FF' });
slide6.addText([
    { text: 'Step 1: Selection\n', options: { bullet: true, fontSize: 20, color: 'FFFFFF', bold: true } },
    { text: '   - User selects an agent from the Agent Directory UI.\n\n', options: { fontSize: 16, color: 'FFFFFF' } },
    { text: 'Step 2: The Training Phase (Crucial)\n', options: { bullet: true, fontSize: 20, color: 'F59E0B', bold: true } },
    { text: '   - The owner uploads their business "knowledge base" (menus, pricing PDFs, past FAQs).\n', options: { fontSize: 16, color: 'FFFFFF' } },
    { text: '   - The AI processes this via RAG (Retrieval-Augmented Generation) to learn the business context.\n\n', options: { fontSize: 16, color: 'FFFFFF' } },
    { text: 'Step 3: Verification & Deployment\n', options: { bullet: true, fontSize: 20, color: '10B981', bold: true } },
    { text: '   - We simulate a WhatsApp chat for the owner to verify AI accuracy. Once approved, it goes live.', options: { fontSize: 16, color: 'FFFFFF' } }
], { x: 0.5, y: 1.8, w: 9, h: 3.5 });

// Slide 7: Business Model
let slide7 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide7.addText('BUSINESS MODEL (SaaS)', { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 32, bold: true, color: '00E5FF' });
slide7.addText([
    { text: '1. The Hook: 7-Day Free Trial\n', options: { fontSize: 20, color: '10B981', bold: true } },
    { text: '   - Full access to 1 Agent. Proves immediate ROI by automating real tasks before the user pays.\n\n', options: { fontSize: 16, color: 'FFFFFF' } },
    { text: '2. Starter Plan (₹999 / $12 per month)\n', options: { fontSize: 20, color: '00E5FF', bold: true } },
    { text: '   - Access to 2 Agents. 1,000 automated tasks/month. Ideal for sole proprietors.\n\n', options: { fontSize: 16, color: 'FFFFFF' } },
    { text: '3. Growth Plan (₹2,499 / $30 per month)\n', options: { fontSize: 20, color: 'F59E0B', bold: true } },
    { text: '   - Access to 5 Agents. 5,000 tasks/month. Includes CRM/Tally API integrations.\n\n', options: { fontSize: 16, color: 'FFFFFF' } },
    { text: '4. Business Plan (₹4,999 / $60 per month)\n', options: { fontSize: 20, color: 'EF4444', bold: true } },
    { text: '   - Access to all 9 Agents. Unlimited tasks. Full automation suite.', options: { fontSize: 16, color: 'FFFFFF' } }
], { x: 0.5, y: 1.8, w: 9, h: 3.5 });

// Slide 8: Break-even Analysis
let slide8 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide8.addText('BREAK-EVEN ANALYSIS', { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 32, bold: true, color: '00E5FF' });
slide8.addText([
    { text: 'Core Assumptions:\n', options: { fontSize: 20, color: 'F59E0B', bold: true } },
    { text: '- Average Revenue Per User (ARPU): ₹1,800 ($22) / month.\n', options: { bullet: true, fontSize: 16, color: 'FFFFFF' } },
    { text: '- Variable Costs (LLM Tokens, WhatsApp API per user): ₹400 ($5) / month.\n', options: { bullet: true, fontSize: 16, color: 'FFFFFF' } },
    { text: '- Contribution Margin per user: ₹1,400 ($17) / month.\n\n', options: { bullet: true, fontSize: 16, color: 'FFFFFF' } },
    { text: 'Fixed Operating Costs:\n', options: { fontSize: 20, color: 'EF4444', bold: true } },
    { text: '- Servers, Core Engineering Team, Marketing: ₹2,500,000 ($30,000) / month.\n\n', options: { bullet: true, fontSize: 16, color: 'FFFFFF' } },
    { text: 'The Break-Even Point:\n', options: { fontSize: 22, color: '10B981', bold: true } },
    { text: 'To cover fixed costs, we need: ₹2,500,000 / ₹1,400 = 1,785 Active Paying Users.', options: { bullet: true, fontSize: 18, color: 'FFFFFF', bold: true } }
], { x: 0.5, y: 1.8, w: 9, h: 3.5 });

// Slide 9: Funding & GTM
let slide9 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide9.addText('FUNDING & GO-TO-MARKET', { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 32, bold: true, color: '00E5FF' });
slide9.addText([
    { text: 'Raising: $500,000 (Seed Round) for 18 Months Runway\n\n', options: { fontSize: 24, color: '10B981', bold: true } },
    { text: 'Go-To-Market Strategy:\n', options: { fontSize: 20, color: 'FFFFFF', bold: true } },
    { text: '- Viral WhatsApp Marketing: Every automated message ends with "Powered by AgentBharat", turning our users into organic billboards.\n', options: { bullet: true, fontSize: 18, color: 'FFFFFF' } },
    { text: '- Partnership Channels: Partnering with local Chartered Accountants (CAs) who will recommend AgentBharat to their SME clients for easier tax data collection.\n', options: { bullet: true, fontSize: 18, color: 'FFFFFF' } },
    { text: '- Milestone: Reach our break-even point (1,800 users) within Month 9.', options: { bullet: true, fontSize: 18, color: '00E5FF', bold: true } }
], { x: 0.5, y: 1.8, w: 9, h: 3.5 });

pptx.writeFile({ fileName: 'AgentBharat_Pitch_Deck.pptx' })
  .then(() => console.log('Presentation generated successfully!'))
  .catch(err => console.error('Error generating presentation:', err));
