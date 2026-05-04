// ─── APEX Mock Data ───────────────────────────────────────────────────────────
// Drives all screens during UI/UX testing. Replace with backend calls in Phase 3.

import type { Lesson, ModuleKey } from '../types/lesson';

export const MOCK_LESSONS: Lesson[] = [
  {
    lesson_id: 'L001',
    title: 'The Culture Bet That Saved Netflix',
    subtitle: 'How radical transparency became the operating system for a $200B company',
    company: 'Netflix',
    company_abbreviation: 'NF',
    year_range: '2001–2009',
    module: 'culture_building',
    category: 'Culture Transformation',
    category_color_key: 'green',
    read_time_minutes: 9,
    difficulty: 'medium',
    tags: ['Culture', 'Talent', 'Transparency'],
    source_disclosure: 'Publicly disclosed via Patty McCord autobiography & Netflix Culture Deck',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'In 2001, Netflix laid off a third of its workforce after the dot-com crash. What happened next defied every standard HR playbook — the remaining team performed better, not worse. Reed Hastings and Patty McCord used the crisis as a forcing function to articulate what actually made the company work.',
        body_paragraphs: [
          'Most companies respond to hard times by adding process — more approvals, more oversight, more rules. Netflix went the opposite direction. They published a 125-slide deck that described how they hired, fired, and rewarded people. It went viral. Sheryl Sandberg called it "the most important document ever to come out of Silicon Valley."',
          'The central thesis was uncomfortable: treat employees as adults. Pay them at the top of the market. Give them no vacation policy — track outcomes, not hours. And if their role is no longer a fit, give them a generous severance rather than managing them out slowly.',
          'The hardest part was not the policies themselves — it was the honesty required to execute them. Managers had to tell high performers when they were no longer the best person for a growing role. This demanded a level of directness most organisations actively suppress.',
        ],
        pull_quote: {
          text: 'Adequate performance gets a generous severance package. We are not a family — we are a team, and we are always improving the roster.',
          attribution: 'Reed Hastings, Netflix Co-founder',
        },
        decisions: [
          {
            abbreviation: 'TP',
            title: 'Radical Transparency',
            description: 'Published internal culture norms publicly, creating accountability at every level.',
          },
          {
            abbreviation: 'NP',
            title: 'No Policy Policy',
            description: 'Removed vacation caps and expense rules. Trusted context over control.',
          },
          {
            abbreviation: 'TM',
            title: 'Keeper Test',
            description: 'Managers asked: "Would I fight to keep this person?" If no — act.',
          },
          {
            abbreviation: 'MP',
            title: 'Market Pay',
            description: 'Pay top of market always. Do not use stock as a substitute for salary.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '2001',
            title: 'The Dot-Com Crash',
            description: 'Netflix lays off roughly a third of its workforce after the dot-com bust slashes DVD orders.',
          },
          {
            step: 2,
            year: '2003',
            title: 'Culture Codification Begins',
            description: 'Hastings and McCord begin writing down what they observed made the remaining team exceptional.',
          },
          {
            step: 3,
            year: '2006',
            title: 'Internal Deck Circulates',
            description: 'The 125-slide "Netflix Culture" deck is shared internally and becomes the company operating manual.',
          },
          {
            step: 4,
            year: '2009',
            title: 'Culture Deck Goes Public',
            description: 'Deck is posted on SlideShare. 15 million views. Spawns a generation of culture-first companies.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Think about the last time you kept someone in a role longer than you should have. What was the real cost — to the team, to them, and to you?',
          'If your organisation published a "culture deck" today, would it describe how things actually work — or how leadership wishes they worked?',
          'The Keeper Test asks: "Would I fight to keep this person?" Run the test on your current team. What does it tell you?',
          'Netflix traded process for context. Where in your team are you adding rules where you should be adding clarity?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Culture is a hiring filter, not a values poster.',
            body: 'Netflix made their expectations explicit and public. That self-selected for people who wanted to operate that way — and filtered out those who didn\'t before they joined.',
          },
          {
            headline: 'High density of talent changes what\'s possible.',
            body: 'When every person on the team is excellent, you need fewer rules. The rules exist to manage variance. Reduce the variance.',
          },
          {
            headline: 'Honesty at termination is a form of respect.',
            body: 'Letting someone go generously and honestly — instead of managing them out slowly — treats them as a capable adult who can handle the truth and move on.',
          },
          {
            headline: 'Context scales. Control doesn\'t.',
            body: 'As an organisation grows, detailed controls break down. Leaders who invest in context — shared understanding of goals and trade-offs — build teams that make good decisions independently.',
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L002',
    title: 'Satya Nadella\'s Growth Mindset Pivot',
    subtitle: 'Rebooting a $300B company by changing the one thing no one thought was the problem',
    company: 'Microsoft',
    company_abbreviation: 'MS',
    year_range: '2014–2019',
    module: 'scaling_teams',
    category: 'Strategic Turnaround',
    category_color_key: 'orange',
    read_time_minutes: 8,
    difficulty: 'accessible',
    tags: ['Strategy', 'Leadership Mindset', 'Culture'],
    source_disclosure: 'Disclosed in Satya Nadella\'s book "Hit Refresh" (2017)',
    is_new: false,
    is_locked: false,
    unlock_after_count: 0,
    progress: 65,
    status: 'in_progress',
    tabs: {
      overview: {
        situation:
          'When Nadella became CEO in 2014, Microsoft was losing the mobile war, had missed search, and was culturally paralysed by stack ranking — a system that forced managers to grade their own teams on a curve, guaranteeing internal competition over collaboration.',
        body_paragraphs: [
          'Stack ranking had a precise, measurable effect: the best people refused to join teams that already had strong performers, because the system guaranteed someone had to be ranked at the bottom. Innovation clusters — the places where great work happens — became impossible to form.',
          'Nadella\'s diagnosis was that the company had a "know-it-all" culture when it needed a "learn-it-all" culture. He introduced Carol Dweck\'s growth mindset framework not as a wellness initiative but as the architecture for decision-making.',
          'The most visible operational change was the elimination of stack ranking. But the deeper change was in what meetings felt like. Nadella modelled curiosity publicly — asking questions before giving answers, crediting others, and naming uncertainty as a feature rather than a weakness.',
        ],
        pull_quote: {
          text: 'Every person, every organisation, and even every society arrives at a point at which they owe it to themselves to hit refresh.',
          attribution: 'Satya Nadella, CEO Microsoft',
        },
        decisions: [
          {
            abbreviation: 'SR',
            title: 'Kill Stack Ranking',
            description: 'Removed forced grading curve that structurally rewarded internal competition.',
          },
          {
            abbreviation: 'GM',
            title: 'Growth Mindset Model',
            description: 'Publicly modelled learn-it-all behaviour. Made vulnerability a leadership signal.',
          },
          {
            abbreviation: 'CL',
            title: 'Cloud Pivot',
            description: 'Bet the company on Azure. Moved from device-centric to cloud-first strategy.',
          },
          {
            abbreviation: 'OP',
            title: 'Open Partnerships',
            description: 'Partnered with former rivals — Linux on Azure, Office on iOS. Ego subordinated to market.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '2014',
            title: 'Nadella Appointed CEO',
            description: 'Third CEO in Microsoft history. First internal appointment in 25 years.',
          },
          {
            step: 2,
            year: '2014',
            title: 'Stack Ranking Abolished',
            description: 'First major structural change. HR system that had defined Microsoft for 20 years removed.',
          },
          {
            step: 3,
            year: '2016',
            title: 'Azure Surpasses AWS Growth Rate',
            description: 'Cloud pivot begins to show financial results. Market cap starts sustained recovery.',
          },
          {
            step: 4,
            year: '2019',
            title: '$1 Trillion Market Cap',
            description: 'Microsoft becomes second company in history to reach $1T. Culture work validates at market scale.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Where in your organisation does internal competition cause people to withhold information from each other? What\'s the structural cause?',
          'Nadella modelled curiosity before asking others to adopt it. What behaviours are you modelling that contradict what you\'re asking of your team?',
          'What is the "know-it-all" equivalent on your team — the posture that prevents people from admitting what they don\'t know?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Incentive structures shape culture more than values statements.',
            body: 'Stack ranking created exactly the culture Microsoft had, despite every poster in every hallway saying otherwise. Change the system, not the messaging.',
          },
          {
            headline: 'The CEO\'s behaviour is the culture.',
            body: 'Nadella didn\'t announce a mindset change. He demonstrated it in every public meeting, every interview, every leadership review. Culture travels top-down through behaviour.',
          },
          {
            headline: 'Strategic pivots require cultural permission.',
            body: 'The cloud bet required teams to collaborate across business units that had been rivals. The cultural work came first — without it, the strategy had no terrain to land on.',
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L003',
    title: 'Toyota\'s Andon Cord Philosophy',
    subtitle: 'How giving every worker the power to stop production created the most reliable supply chain in history',
    company: 'Toyota',
    company_abbreviation: 'TY',
    year_range: '1950s–Present',
    module: 'servant_leadership',
    category: 'Operational Excellence',
    category_color_key: 'teal',
    read_time_minutes: 7,
    difficulty: 'accessible',
    tags: ['Operations', 'Quality', 'Empowerment'],
    source_disclosure: 'Disclosed via Toyota Production System documentation and academic research',
    is_new: false,
    is_locked: false,
    unlock_after_count: 0,
    progress: 100,
    status: 'completed',
    tabs: {
      overview: {
        situation:
          'In most manufacturing plants, stopping the production line is the worst thing a worker can do. In Toyota\'s factories, it is required. Every station has an Andon cord — pull it, and the line stops. This single design decision encodes an entire management philosophy.',
        body_paragraphs: [
          'The Andon cord inverts the normal power dynamic. In conventional manufacturing, quality problems get hidden until the end of the line, because stopping production is career-limiting. At Toyota, the opposite is true: not pulling the cord when you see a problem is what gets you in trouble.',
          'What makes this work is the response protocol. When the cord is pulled, a team leader arrives within a defined window — typically 60 seconds. The goal is not to restart the line. The goal is to understand the root cause. The line restarts only when the cause is understood and addressed.',
        ],
        pull_quote: {
          text: 'We do not simply stop the line. We stop the line to learn.',
          attribution: 'Toyota Production System Principle',
        },
        decisions: [
          {
            abbreviation: 'AC',
            title: 'Andon Cord',
            description: 'Any worker can halt the entire production line to surface a quality issue.',
          },
          {
            abbreviation: '5W',
            title: 'Five Whys',
            description: 'Root cause analysis standard. Ask why five times before accepting an explanation.',
          },
          {
            abbreviation: 'JK',
            title: 'Jidoka',
            description: 'Automation with a human touch. Machines stop themselves when defects are detected.',
          },
          {
            abbreviation: 'KZ',
            title: 'Kaizen',
            description: 'Continuous improvement. Every worker is responsible for improving their own process.',
          },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: '1950s', title: 'TPS Formalised', description: 'Taiichi Ohno systematises the Toyota Production System. Andon becomes a standard tool.' },
          { step: 2, year: '1970s', title: 'Oil Crisis Test', description: 'While US automakers collapse under the oil crisis, Toyota\'s lean system proves its resilience.' },
          { step: 3, year: '1984', title: 'NUMMI Joint Venture', description: 'Toyota partners with GM in California. GM engineers study TPS. Most miss the cultural roots.' },
          { step: 4, year: '2000s', title: 'Global Benchmark', description: 'Toyota becomes the world\'s largest automaker. TPS is taught in business schools as a management standard.' },
        ],
      },
      reflect: {
        prompts: [
          'Does your team feel safe surfacing problems early — or do they surface them only when unavoidable? What signals have you given them about the cost of stopping the line?',
          'Think about the last significant quality failure in your team. At what point was the problem first visible? What prevented it from being surfaced then?',
          'The Five Whys discipline is simple to describe and hard to practise. When did you last accept the first explanation of a problem rather than interrogating its root?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Psychological safety is an operational variable.', body: 'The Andon cord only works if workers believe pulling it is safe. If pulling it gets you blamed, it stops being pulled. Leaders set that condition through their response behaviour.' },
          { headline: 'Slow down to speed up.', body: 'Stopping the line feels like it costs time. It does. But every problem allowed to pass costs more — it compounds, hides, and eventually surfaces as a crisis.' },
          { headline: 'The goal of a problem is to be learned from.', body: 'Toyota\'s frame is not: minimise disruption. It is: maximise learning. Every fault is a data point. Treat it like one.' },
        ],
      },
    },
  },

  {
    lesson_id: 'L004',
    title: 'Intel\'s Strategic Inflection Point',
    subtitle: 'How Andy Grove made the hardest decision in Silicon Valley history — twice',
    company: 'Intel',
    company_abbreviation: 'IN',
    year_range: '1985–1998',
    module: 'crisis_leadership',
    category: 'Crisis Leadership',
    category_color_key: 'blue',
    read_time_minutes: 10,
    difficulty: 'complex',
    tags: ['Crisis', 'Strategy', 'Reinvention'],
    source_disclosure: 'Disclosed in Andy Grove\'s book "Only the Paranoid Survive" (1996)',
    is_new: false,
    is_locked: true,
    unlock_after_count: 3,
    progress: 0,
    status: 'locked',
    tabs: {
      overview: {
        situation:
          'Andy Grove navigated two separate crises that would have ended most companies. The first: in 1985, Intel\'s founding product — the memory chip it had invented — was being destroyed by Japanese manufacturers pricing it into oblivion. The second: in 1994, a mathematics professor discovered a flaw in the Pentium processor that could cause errors in floating-point calculations. Both required the same rare quality: the courage to accept brutal facts before they became unavoidable.',
        body_paragraphs: [
          'The memory crisis was existential at the identity level. Intel had invented DRAM. Leaving it felt like betrayal. Japanese manufacturers had mastered volume production and were pricing chips at below Intel\'s cost of goods. The company was losing $173 million per year. Grove\'s solution — captured in his famous "revolving door" conversation with Gordon Moore — was to strip away emotional attachment and ask what a rational outsider would do. The answer was obvious: exit memory, bet everything on microprocessors. The execution was brutal: thousands of layoffs, plant closures, a company-wide identity crisis. Grove did it anyway.',
          'Nine years later, with Intel now dominant, the second crisis arrived differently. On November 22, 1994 — the day after Thanksgiving — Thomas Nicely, a mathematics professor at Lynchburg College, posted to an internet forum about a flaw in the Pentium chip that caused errors in certain division calculations. Intel\'s initial response was a catastrophic miscalculation: the company said the bug only affected "theoretical" math operations, offered replacements only to customers who could "prove" they needed full floating-point precision, and told most consumers their chips were fine. The internet didn\'t accept the framing.',
          'IBM suspended all Pentium-based computer shipments. CNN ran the story. The flaw — which Intel\'s own engineers had quietly discovered months earlier and chosen not to disclose — became front-page news. Grove was receiving 10,000 calls per day. The engineers argued the bug would affect the average user once every 27,000 years. Users didn\'t care about statistics — they cared that they had been told to prove they deserved a replacement. By December, Grove reversed course completely: full no-questions-asked replacement for anyone who asked. The cost was $475 million.',
          'The deeper lesson is in the contrast. In 1985, Grove responded to crisis with speed and clarity — he made the call before the board was ready, because waiting longer was more expensive than acting on imperfect information. In 1994, he initially responded with defensiveness — protecting the engineering position rather than the customer relationship. The $475M fix was more expensive than a transparent disclosure would have been. Grove later called the Pentium crisis his greatest personal failure in leadership.',
        ],
        pull_quote: {
          text: 'Success breeds complacency. Complacency breeds failure. Only the paranoid survive.',
          attribution: 'Andy Grove',
        },
        decisions: [
          {
            abbreviation: 'ME',
            title: 'Memory Exit',
            description: 'Shut down Intel\'s founding product line. Redirected thousands of engineers to microprocessors.',
          },
          {
            abbreviation: 'RD',
            title: 'Revolving Door Test',
            description: 'Stripped emotional attachment from strategy. Asked what a new CEO would obviously do.',
          },
          {
            abbreviation: 'PR',
            title: 'Pentium Recall',
            description: 'Reversed defensive position. Full no-questions-asked replacement. $475M cost accepted.',
          },
          {
            abbreviation: 'PC',
            title: 'Paranoid Culture',
            description: 'Institutionalised early-warning thinking. "Only the paranoid survive" became company philosophy.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '1985',
            title: 'Memory Exit Decision',
            description: 'Intel abandons DRAM — the product it invented. Thousands laid off. All resources redirected to microprocessors.',
          },
          {
            step: 2,
            year: '1993',
            title: 'Pentium Launch',
            description: 'Intel\'s microprocessor becomes the world\'s most recognised chip brand. "Intel Inside" campaign begins.',
          },
          {
            step: 3,
            year: 'Nov 1994',
            title: 'FDIV Bug Disclosed',
            description: 'Professor Nicely posts about floating-point flaw. Intel\'s defensive response triggers media firestorm.',
          },
          {
            step: 4,
            year: 'Dec 1994',
            title: '$475M Recall',
            description: 'Grove reverses position. No-questions-asked replacement for all customers. Full cost absorbed.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Intel\'s engineers discovered the Pentium flaw months before it went public and chose not to disclose it. When your team finds a problem, is the default to disclose or to contain? What drives that instinct?',
          'Grove\'s defensive initial response cost more than transparency would have. Think of a situation where your organisation defended a position longer than it should have. What was the real cost?',
          'The revolving door test asks: what would a new CEO do? Apply it to your biggest current strategic challenge. What does the answer tell you?',
          'Grove called the Pentium response his greatest leadership failure — despite it being a profitable company making a technically accurate argument. What does that tell you about the difference between being right and being trusted?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Defensiveness in crisis amplifies the crisis.',
            body: 'Intel\'s initial "prove you need it" position turned a technical flaw into a trust crisis. The $475M replacement was the cost of days spent defending an indefensible customer experience.',
          },
          {
            headline: 'The revolving door test cuts through emotional attachment.',
            body: 'Asking "what would a new CEO do?" removes sunk costs and identity from strategy. It surfaces what everyone already knows but no one will say.',
          },
          {
            headline: 'Speed in crisis is cheaper than defence.',
            body: 'Grove\'s 1985 memory exit was fast and decisive. His 1994 Pentium response was slow and defensive. The first cost less. The lesson: accept the brutal fact early.',
          },
          {
            headline: 'Customer trust is not recoverable by technical argument.',
            body: 'Intel was statistically correct that most users would never encounter the bug. Customers didn\'t care. Trust is emotional, not actuarial. You cannot reason people back into it.',
          },
        ],
      },
    },
  },

  // ─── CRISIS LEADERSHIP MODULE ───────────────────────────────────────────────
  {
    lesson_id: 'L005',
    title: 'The Tylenol Recall That Defined Crisis Management',
    subtitle: 'How James Burke chose people over profit and created the gold standard for corporate responsibility',
    company: 'Johnson & Johnson',
    company_abbreviation: 'JJ',
    year_range: '1982',
    module: 'crisis_leadership',
    category: 'Crisis Leadership',
    category_color_key: 'blue',
    read_time_minutes: 8,
    difficulty: 'accessible',
    tags: ['Crisis', 'Ethics', 'Trust'],
    source_disclosure: 'Public case study taught at Harvard Business School',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'In September 1982, seven people in Chicago died after taking Tylenol capsules laced with cyanide. Johnson & Johnson faced a choice: recall only the affected batches (cheaper, defensible) or recall every Tylenol product nationwide — 31 million bottles, $100 million in losses.',
        body_paragraphs: [
          'CEO James Burke chose the total recall within 72 hours. He ordered it against the advice of the FBI, who feared a nationwide recall would encourage copycat attacks. Burke\'s reasoning was simple: "The first obligation is to the customer."',
          'What followed became the template for modern crisis communication. Burke appeared on 60 Minutes. The company set up toll-free hotlines. They offered free replacements. They invented tamper-evident packaging — an innovation that became legally mandated for the entire industry.',
          'Within a year, Tylenol had recovered 70% of its market share. Within two years, it was back to #1. Burke later said the recovery happened because people already trusted J&J — the recall confirmed that trust rather than creating it.',
        ],
        pull_quote: {
          text: 'The reputation of a thousand years may be undermined by the conduct of one hour.',
          attribution: 'Japanese proverb, cited by James Burke',
        },
        decisions: [
          { abbreviation: 'TR', title: 'Total Recall', description: '31 million bottles pulled. $100M cost accepted immediately without board debate.' },
          { abbreviation: 'PT', title: 'Public Transparency', description: 'CEO appeared on national television. No lawyers filtering the message.' },
          { abbreviation: 'TE', title: 'Tamper-Evident Design', description: 'Invented triple-seal packaging. Set new industry standard within 6 months.' },
          { abbreviation: 'CF', title: 'Customer First Credo', description: 'Used existing company credo as decision-making anchor during chaos.' },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: 'Sep 1982', title: 'Seven Deaths Reported', description: 'Cyanide-laced Tylenol capsules kill seven people in Chicago over three days.' },
          { step: 2, year: 'Oct 1982', title: 'Nationwide Recall', description: 'Burke orders full recall within 72 hours. 31 million bottles worth $100M pulled from shelves.' },
          { step: 3, year: 'Nov 1982', title: 'Tamper-Proof Redesign', description: 'New triple-seal packaging designed and manufactured in under 10 weeks.' },
          { step: 4, year: '1983', title: 'Market Recovery', description: 'Tylenol recovers 70% market share. Trust rebuilt through decisive action.' },
        ],
      },
      reflect: {
        prompts: [
          'When was the last time your team faced a decision where the ethical choice was also the expensive one? What did you choose, and what made that choice possible?',
          'Burke made the recall decision in 72 hours. What decisions in your organisation take weeks because no one has a clear framework for what matters most?',
          'J&J\'s credo — written decades earlier — became the decision anchor in crisis. Does your team have a similarly clear hierarchy of priorities that could guide action under pressure?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Speed in crisis is a trust signal.', body: 'The 72-hour decision communicated more about J&J\'s values than any ad campaign ever could. Hesitation in crisis is interpreted as calculation.' },
          { headline: 'Pre-existing values are crisis infrastructure.', body: 'Burke didn\'t need to decide what mattered in the moment. The J&J credo had already codified it. Build your values before you need them.' },
          { headline: 'Short-term loss can be long-term investment.', body: '$100M in immediate cost bought decades of trust capital. The market valued the character signal over the quarterly earnings hit.' },
        ],
      },
    },
  },

  {
    lesson_id: 'L006',
    title: 'Sullenberger\'s 208 Seconds',
    subtitle: 'The decision framework behind the Miracle on the Hudson',
    company: 'US Airways',
    company_abbreviation: 'UA',
    year_range: '2009',
    module: 'crisis_leadership',
    category: 'Crisis Leadership',
    category_color_key: 'blue',
    read_time_minutes: 7,
    difficulty: 'medium',
    tags: ['Crisis', 'Decision-Making', 'Preparation'],
    source_disclosure: 'Public record, NTSB investigation, Sullenberger autobiography "Highest Duty"',
    is_new: false,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'On January 15, 2009, US Airways Flight 1549 struck a flock of geese 90 seconds after takeoff. Both engines failed. Captain Chesley Sullenberger had 208 seconds to decide where to put a 70-ton aircraft with 155 people aboard.',
        body_paragraphs: [
          'Sullenberger\'s background was not just piloting — he was a safety researcher, a glider pilot, and had spent decades studying accident investigation. When the crisis hit, he wasn\'t inventing a response. He was executing patterns he\'d rehearsed mentally for 40 years.',
          'The key decision was simple to state and terrifying to make: reject both available runways (Teterboro and LaGuardia) and ditch in the Hudson River. Sullenberger later explained that he could feel the energy state of the aircraft — altitude and speed converting to distance — and knew the runways were unreachable.',
          'What makes this a leadership case rather than just a piloting case is how Sullenberger managed the human system. His voice stayed calm. He delegated clearly to co-pilot Jeff Skiles. He told the cabin crew one sentence: "Brace for impact." No ambiguity, no panic, no wasted words.',
        ],
        pull_quote: {
          text: 'I wasn\'t choosing to be a hero. I was choosing not to die. Everything I\'d done for 42 years had prepared me for those 208 seconds.',
          attribution: 'Chesley Sullenberger',
        },
        decisions: [
          { abbreviation: 'RR', title: 'Reject Runways', description: 'Rejected LaGuardia and Teterboro. Trusted his energy-state assessment over ATC suggestions.' },
          { abbreviation: 'HD', title: 'Hudson Ditch', description: 'Chose the river — a survivable option if executed perfectly. Zero margin for error.' },
          { abbreviation: 'CD', title: 'Clear Delegation', description: 'Assigned Skiles specific tasks. Reduced cognitive load through role clarity.' },
          { abbreviation: 'CM', title: 'Calm Communication', description: '"Brace for impact." Three words. No ambiguity. Allowed cabin crew to execute their protocols.' },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: '15:27:11', title: 'Bird Strike', description: 'Both engines ingest geese at 2,818 feet. Immediate loss of thrust.' },
          { step: 2, year: '15:27:33', title: 'Decision Made', description: 'Sullenberger takes controls from Skiles. "My aircraft." Rejects runway options within 22 seconds.' },
          { step: 3, year: '15:29:28', title: '"Brace for Impact"', description: 'Single PA announcement. Flight attendants begin brace protocol.' },
          { step: 4, year: '15:30:39', title: 'Hudson Landing', description: 'Aircraft touches down on Hudson River at 150mph. All 155 survive.' },
        ],
      },
      reflect: {
        prompts: [
          'Sullenberger\'s 40 years of preparation made 208 seconds of execution possible. What are you preparing for now that you may need to execute instantly in future?',
          'In crisis, Sullenberger rejected expert advice (ATC\'s runway suggestion) because he had better situational awareness. When have you overridden external advice because you knew the situation better? Were you right?',
          'His calm voice was a leadership tool — it regulated the emotional state of everyone on the aircraft. How deliberately do you manage your tone under pressure?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Crisis performance is preparation revealed.', body: 'Sullenberger didn\'t rise to the occasion. He fell to the level of his training. Performance under pressure doesn\'t exceed your preparation — it reveals it.' },
          { headline: 'Reject false choices under pressure.', body: 'ATC offered two runways. Neither was reachable. Sullenberger invented option three. Under pressure, most people fixate on presented options instead of generating new ones.' },
          { headline: 'Emotional regulation is a leadership skill.', body: 'Sullenberger\'s calm voice kept 155 people from panicking. Your emotional output under pressure sets the ceiling for your team\'s performance.' },
        ],
      },
    },
  },

  // ─── INNOVATION UNDER PRESSURE MODULE ───────────────────────────────────────
  {
    lesson_id: 'L007',
    title: 'SpaceX: Three Failures and a Miracle',
    subtitle: 'How Elon Musk turned three consecutive rocket explosions into the future of space travel',
    company: 'SpaceX',
    company_abbreviation: 'SX',
    year_range: '2006–2008',
    module: 'innovation',
    category: 'Innovation Under Pressure',
    category_color_key: 'purple',
    read_time_minutes: 9,
    difficulty: 'medium',
    tags: ['Innovation', 'Resilience', 'Risk'],
    source_disclosure: 'Publicly documented in Eric Berger\'s "Liftoff" and public SpaceX records',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'By September 2008, SpaceX had attempted three launches of Falcon 1. All three had failed. The company had funds for exactly one more attempt. If Flight 4 failed, SpaceX would go bankrupt. Elon Musk was simultaneously watching Tesla approach insolvency.',
        body_paragraphs: [
          'Each failure had a different cause — a corroded nut, premature engine shutdown, stage separation collision. This meant the engineering team couldn\'t blame a single systemic issue. They had to diagnose and fix three unrelated problems while running out of money and time.',
          'Musk made a decision that defined SpaceX\'s culture: instead of extending the timeline to be "safe," he accelerated. The team moved the entire operation to Kwajalein Atoll, sleeping in shipping containers, working 20-hour days. They rebuilt Flight 4 in six weeks.',
          'On September 28, 2008, Falcon 1 reached orbit. It was the first privately-funded liquid-fuel rocket to do so. Six weeks later, NASA awarded SpaceX a $1.6 billion contract. The company went from near-death to funded within two months.',
        ],
        pull_quote: {
          text: 'If something is important enough, you should try even if the probable outcome is failure.',
          attribution: 'Elon Musk',
        },
        decisions: [
          { abbreviation: 'AC', title: 'Accelerate, Don\'t Retreat', description: 'Shortened timeline after failures instead of extending it. Bet on team velocity over caution.' },
          { abbreviation: 'RC', title: 'Root Cause Discipline', description: 'Each failure analysed to molecular level. No guessing, no blame — only engineering facts.' },
          { abbreviation: 'VP', title: 'Vertical Integration', description: 'Built components in-house rather than outsourcing. Faster iteration, lower cost, full quality control.' },
          { abbreviation: 'AL', title: 'All-In Culture', description: 'Team lived on-site at launch facility. Eliminated commute time, bureaucracy, and half-measures.' },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: 'Mar 2006', title: 'Flight 1 Fails', description: 'Engine fire 33 seconds after liftoff. Corroded fuel nut. Rocket crashes into reef.' },
          { step: 2, year: 'Mar 2007', title: 'Flight 2 Fails', description: 'Reaches space but second stage fuel slosh causes premature shutdown.' },
          { step: 3, year: 'Aug 2008', title: 'Flight 3 Fails', description: 'First stage collides with second stage during separation. Carries NASA and Malaysian payloads.' },
          { step: 4, year: 'Sep 2008', title: 'Flight 4 Succeeds', description: 'Falcon 1 reaches orbit. First privately-funded liquid-fuel rocket to achieve this.' },
        ],
      },
      reflect: {
        prompts: [
          'When your team faces repeated failure, do you extend timelines (adding safety) or compress them (forcing focus)? What does each choice signal to the team?',
          'SpaceX\'s failures each had different root causes. In your domain, when something fails multiple times, do you assume one cause or investigate each instance independently?',
          'Musk bet the entire company on Flight 4. When have you made an all-in decision? What made it possible — or what held you back?',
          'The SpaceX team lived on-site for six weeks. What would your team accomplish if all friction — commutes, meetings, bureaucracy — was temporarily removed?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Urgency creates clarity.', body: 'With unlimited time, teams optimise for comfort. With a deadline that means extinction, only essential work survives. SpaceX\'s constraint was a feature, not a bug.' },
          { headline: 'Failure is data, not identity.', body: 'Three explosions could have defined SpaceX as "the company that can\'t launch." Instead, each failure was treated as an engineering dataset — emotional responses were separated from analytical ones.' },
          { headline: 'Vertical integration is a speed multiplier.', body: 'When SpaceX needed to fix a component, they walked to the next room. When competitors needed to fix one, they filed a request with a vendor. Ownership of the full stack enables iteration velocity.' },
        ],
      },
    },
  },

  {
    lesson_id: 'L008',
    title: 'NVIDIA\'s CUDA Bet',
    subtitle: 'How Jensen Huang invested billions in software no one wanted — until everyone needed it',
    company: 'NVIDIA',
    company_abbreviation: 'NV',
    year_range: '2006–2023',
    module: 'innovation',
    category: 'Innovation Under Pressure',
    category_color_key: 'purple',
    read_time_minutes: 9,
    difficulty: 'complex',
    tags: ['Innovation', 'Long-term Thinking', 'Platform'],
    source_disclosure: 'Public earnings calls, Jensen Huang interviews, industry analysis',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'In 2006, NVIDIA was a gaming GPU company. Jensen Huang made a bet that most of his board and employees didn\'t understand: invest billions over a decade in CUDA — a software platform that would let scientists use GPUs for general computation. The market for this didn\'t exist yet.',
        body_paragraphs: [
          'For nearly a decade, CUDA was a cost center. Analysts questioned why a hardware company was spending so heavily on software with no clear revenue path. Gaming was profitable. Data centers were Intel\'s territory. AI was an academic curiosity with no commercial application at scale.',
          'Huang\'s thesis was structural: Moore\'s Law was slowing for CPUs, but parallel workloads were growing exponentially. He believed that eventually, the world would need to compute differently — and when it did, CUDA would be the only mature ecosystem available.',
          'When deep learning exploded in 2012 and generative AI arrived in 2022, NVIDIA wasn\'t pivoting — it was harvesting. Every AI researcher already knew CUDA. Every framework was built on it. The moat wasn\'t the silicon — it was the decade of developer ecosystem work that no competitor could replicate overnight.',
        ],
        pull_quote: {
          text: 'Our company goes through a near-death experience every ten years. It\'s how we know we\'re pushing hard enough.',
          attribution: 'Jensen Huang, CEO NVIDIA',
        },
        decisions: [
          { abbreviation: 'CU', title: 'CUDA Investment', description: 'Billions invested in software platform for a market that didn\'t exist. 15-year payoff timeline.' },
          { abbreviation: 'DE', title: 'Developer Ecosystem', description: 'Made CUDA free for researchers. Prioritised ecosystem lock-in over short-term revenue.' },
          { abbreviation: 'DC', title: 'Data Center Pivot', description: 'Gradually shifted focus from gaming to compute. Rearchitected chips for AI workloads.' },
          { abbreviation: 'FS', title: 'Full Stack Vision', description: 'Designed hardware, software, frameworks, and cloud services. Owned the entire compute layer.' },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: '2006', title: 'CUDA Launched', description: 'GPU computing platform released. Academics curious; market indifferent.' },
          { step: 2, year: '2012', title: 'AlexNet Moment', description: 'Deep learning breakthrough uses NVIDIA GPUs. Research community adopts CUDA en masse.' },
          { step: 3, year: '2020', title: 'Data Center Revenue Surges', description: 'NVIDIA\'s data center revenue surpasses gaming for the first time.' },
          { step: 4, year: '2023', title: '$1 Trillion Valuation', description: 'Generative AI boom makes NVIDIA the most valuable semiconductor company in history.' },
        ],
      },
      reflect: {
        prompts: [
          'Huang invested for 15 years before the payoff. What investments is your team making now that won\'t pay off for 3-5 years? How do you protect them from quarterly thinking?',
          'NVIDIA\'s moat turned out to be developer ecosystem, not hardware specs. What is your organisation\'s equivalent of an ecosystem moat — something competitors can\'t replicate quickly?',
          'Analysts questioned CUDA spending for a decade. How do you maintain conviction on long-term bets when the evidence isn\'t yet visible? What would make you abandon the bet?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Invest in the platform, not just the product.', body: 'NVIDIA\'s chip competitors match specs regularly. None can match the decade of ecosystem work around CUDA. Platforms create switching costs that products alone cannot.' },
          { headline: 'The best time to build for a market is before it exists.', body: 'By the time AI exploded, NVIDIA had 15 years of compounding ecosystem advantage. Competitors starting in 2023 face a decade-long catch-up — in software, not silicon.' },
          { headline: 'Conviction requires tolerance for looking wrong.', body: 'For nearly a decade, CUDA looked like a misallocation of capital. Huang had to be comfortable with the market disagreeing. Long-term vision and short-term validation rarely coexist.' },
        ],
      },
    },
  },

  // ─── TURNAROUNDS MODULE ─────────────────────────────────────────────────────
  {
    lesson_id: 'L009',
    title: 'Steve Jobs\' Return to Apple',
    subtitle: 'How a fired founder came back to save the company he built — by killing 70% of its products',
    company: 'Apple',
    company_abbreviation: 'AP',
    year_range: '1997–2001',
    module: 'turnarounds',
    category: 'Turnarounds',
    category_color_key: 'red',
    read_time_minutes: 10,
    difficulty: 'medium',
    tags: ['Strategy', 'Focus', 'Turnaround'],
    source_disclosure: 'Walter Isaacson biography, public Apple records, WWDC keynotes',
    is_new: false,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'When Steve Jobs returned to Apple in 1997, the company was 90 days from bankruptcy. It sold dozens of confusing products — multiple desktop lines, a TV appliance, printers, the Newton PDA. Revenue was declining, the board was fractured, and Microsoft was ascendant.',
        body_paragraphs: [
          'Jobs\' first act was elimination. He drew a simple 2×2 grid: Consumer/Pro on one axis, Desktop/Portable on the other. Four products. Everything else was cancelled. "Deciding what not to do is as important as deciding what to do," he told the team.',
          'The second act was emotional: the "Think Different" campaign. Apple had lost its sense of identity. Jobs didn\'t advertise products — he advertised values. The campaign reconnected employees and customers to why Apple existed in the first place.',
          'The third act was operational: the iMac. A single, opinionated product that violated industry norms — no floppy drive, translucent colored plastic, USB-only. It sold 800,000 units in the first five months and proved that Apple could still ship products people loved.',
        ],
        pull_quote: {
          text: 'People think focus means saying yes to the thing you\'ve got to focus on. But that\'s not what it means at all. It means saying no to the hundred other good ideas.',
          attribution: 'Steve Jobs, WWDC 1997',
        },
        decisions: [
          { abbreviation: 'EL', title: 'Eliminate 70%', description: 'Cancelled dozens of products. Reduced to four core offerings on a 2×2 matrix.' },
          { abbreviation: 'TD', title: 'Think Different', description: 'Ran values-based campaign before having new products. Rebuilt brand identity first.' },
          { abbreviation: 'IM', title: 'iMac Launch', description: 'Single opinionated product. No backward compatibility. Design as differentiator.' },
          { abbreviation: 'MS', title: 'Microsoft Deal', description: 'Accepted $150M from Microsoft and Office commitment. Swallowed pride for survival.' },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: '1997', title: 'Jobs Returns', description: 'Apple acquires NeXT. Jobs becomes interim CEO of a company 90 days from bankruptcy.' },
          { step: 2, year: '1997', title: 'Product Purge', description: '70% of product lines cancelled. Thousands laid off. 2×2 product grid established.' },
          { step: 3, year: '1998', title: 'iMac Ships', description: 'Translucent, USB-only, no floppy. 800,000 sold in 5 months. Apple is alive.' },
          { step: 4, year: '2001', title: 'iPod Launches', description: 'Apple enters consumer electronics. Revenue diversification begins. Turnaround complete.' },
        ],
      },
      reflect: {
        prompts: [
          'Jobs\' first act was killing products, not creating them. What would you eliminate from your team\'s portfolio if forced to cut 70%? What does your answer tell you about your current focus?',
          'The "Think Different" campaign sold values, not products. If your team had to articulate its identity in one sentence — not what you do, but why you exist — what would it be?',
          'Jobs accepted $150M from Microsoft — his philosophical enemy. What pride-driven decisions might you be making that serve identity over survival?',
          'The iMac had no floppy drive. Customers complained. Jobs said they\'d adapt. Where are you maintaining backward compatibility that\'s preventing forward progress?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Focus is subtraction, not addition.', body: 'Jobs didn\'t add a great product to a confusing lineup. He cleared the field first. Clarity comes from removal. Your team\'s best work is hidden under their busywork.' },
          { headline: 'Identity precedes strategy.', body: 'Before shipping a single new product, Jobs rebuilt why Apple existed. Strategy without identity is just a list of activities. Purpose focuses everything downstream.' },
          { headline: 'Accept help from imperfect sources.', body: 'The Microsoft deal was humiliating but necessary. Leaders who let pride dictate survival decisions often preside over beautiful failures.' },
          { headline: 'Opinionated products find passionate users.', body: 'The iMac alienated some. It enchanted many more. Trying to please everyone produces mediocrity. Strong opinions filter for the right audience.' },
        ],
      },
    },
  },

  {
    lesson_id: 'L010',
    title: 'Alan Mulally\'s Ford Rescue',
    subtitle: 'The outsider who saved an American icon by making executives tell the truth',
    company: 'Ford',
    company_abbreviation: 'FD',
    year_range: '2006–2014',
    module: 'turnarounds',
    category: 'Turnarounds',
    category_color_key: 'red',
    read_time_minutes: 8,
    difficulty: 'accessible',
    tags: ['Turnaround', 'Transparency', 'Culture'],
    source_disclosure: 'Bryce Hoffman\'s "American Icon" and public Ford records',
    is_new: false,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'In 2006, Ford lost $12.7 billion — the largest annual loss in its 103-year history. The company was hemorrhaging market share, had too many brands (Jaguar, Land Rover, Volvo, Aston Martin), and a culture where executives hid bad news to survive.',
        body_paragraphs: [
          'Alan Mulally arrived from Boeing with no automotive experience. His first leadership team meeting used a color-coded system: green (on track), yellow (concern), red (off track). Every executive reported green. For a company losing $12.7 billion, everything was apparently fine.',
          'Mulally didn\'t get angry. He said: "We\'re going to lose $12.7 billion this year. Is there anything that\'s not going well?" The next week, one executive — Mark Fields — showed a red chart for the Edge launch delay. The room went silent. Mulally stood up and clapped. "Great visibility, Mark. Who can help him?"',
          'That single moment changed Ford. Within weeks, the charts were covered in red and yellow. Problems that had been hidden for years surfaced. And with them, solutions. Mulally had created the cultural permission to be honest — by rewarding the first person brave enough to try it.',
        ],
        pull_quote: {
          text: 'You can\'t manage a secret. The data sets you free.',
          attribution: 'Alan Mulally',
        },
        decisions: [
          { abbreviation: 'BPR', title: 'Business Plan Review', description: 'Weekly color-coded meetings. Red/yellow/green. No hiding. No ambiguity.' },
          { abbreviation: 'OT', title: 'One Ford', description: 'Sold Jaguar, Land Rover, Volvo, Aston Martin. Focused everything on the Ford brand.' },
          { abbreviation: 'BL', title: 'Borrow Before Crisis', description: 'Mortgaged everything — including the Ford logo — to secure $23.6B credit line before the recession hit.' },
          { abbreviation: 'RT', title: 'Rewarded Truth', description: 'Publicly praised the first executive who showed a red chart. Made honesty safe.' },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: '2006', title: 'Mulally Arrives', description: 'First outsider CEO. Company lost $12.7B. Executives hide problems.' },
          { step: 2, year: '2006', title: 'The Red Chart Moment', description: 'Mark Fields shows first honest "red" status. Mulally applauds. Culture shifts.' },
          { step: 3, year: '2008', title: 'Crisis Prepared', description: 'Ford declines government bailout. $23.6B credit line secured months earlier covers the recession.' },
          { step: 4, year: '2014', title: 'Profitable Exit', description: 'Mulally retires. Ford has been profitable for 5 consecutive years. Stock up 1,400%.' },
        ],
      },
      reflect: {
        prompts: [
          'Mulally clapped when he saw the first red chart. How do you respond when someone on your team surfaces bad news? What does your response teach them about what\'s safe?',
          'Ford\'s executives had been trained that showing problems meant losing their jobs. What signals — explicit or implicit — have you given your team about the cost of honesty?',
          'Mulally borrowed $23.6B before the recession, while competitors waited. Where are you waiting for the crisis before preparing for it?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Reward the first truth-teller publicly.', body: 'Every culture change needs a first mover. Your job as a leader is to make that first mover visibly safe — so the second and third follow.' },
          { headline: 'Systems reveal what culture permits.', body: 'The BPR system didn\'t create honesty. It created a structure where honesty could exist. Without the system, good intentions stay invisible.' },
          { headline: 'Borrow capacity before you need it.', body: 'Ford survived 2008 because Mulally mortgaged assets during calm. Leaders who prepare for storms during sunshine have options when competitors don\'t.' },
        ],
      },
    },
  },

  // ─── DECISION MAKING MODULE ─────────────────────────────────────────────────
  {
    lesson_id: 'L011',
    title: 'Bezos\' One-Way and Two-Way Doors',
    subtitle: 'The mental model that let Amazon make thousands of decisions at startup speed — at megacorp scale',
    company: 'Amazon',
    company_abbreviation: 'AZ',
    year_range: '1997–Present',
    module: 'decision_making',
    category: 'Decision Making',
    category_color_key: 'pink',
    read_time_minutes: 7,
    difficulty: 'accessible',
    tags: ['Decision-Making', 'Speed', 'Frameworks'],
    source_disclosure: 'Amazon shareholder letters (1997–2020), public interviews',
    is_new: false,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'As Amazon grew from a bookstore to the world\'s largest retailer, Bezos noticed a pattern: large companies become slow not because people are lazy, but because they apply the same decision process to every decision regardless of reversibility.',
        body_paragraphs: [
          'Bezos introduced a framework: Type 1 decisions (one-way doors) are irreversible and deserve careful analysis. Type 2 decisions (two-way doors) are easily reversed and should be made quickly by individuals or small teams, not committees.',
          'The insight was that most decisions are Type 2 — reversible — but organisations treat them all as Type 1. The result: every decision requires approval chains, documents, and meetings. Speed dies not from one bad policy but from a thousand small slowdowns.',
          'Amazon operationalised this by pushing Type 2 decisions down to the lowest competent level. Teams of six people could launch features, create services, and spend budgets without escalation. The result was thousands of parallel experiments running simultaneously — most failing, some becoming AWS, Prime, or Alexa.',
        ],
        pull_quote: {
          text: 'Most decisions should probably be made with somewhere around 70% of the information you wish you had. If you wait for 90%, in most cases, you\'re probably being slow.',
          attribution: 'Jeff Bezos, 2016 Shareholder Letter',
        },
        decisions: [
          { abbreviation: 'T2', title: 'Two-Way Door Default', description: 'Assume decisions are reversible unless proven otherwise. Speed is the default.' },
          { abbreviation: '6P', title: 'Six-Page Memos', description: 'For Type 1 decisions: written narrative memos read in silence before discussion. No slides.' },
          { abbreviation: 'ST', title: 'Two-Pizza Teams', description: 'Teams small enough to be fed by two pizzas. Autonomy to ship without approval chains.' },
          { abbreviation: 'DI', title: 'Disagree and Commit', description: 'Once decided, everyone commits fully — even dissenters. Revisit only with new data.' },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: '1997', title: 'Day One Philosophy', description: 'First shareholder letter establishes speed and experimentation as core principles.' },
          { step: 2, year: '2002', title: 'Two-Pizza Teams', description: 'Amazon restructures into small, autonomous teams. API mandate forces service boundaries.' },
          { step: 3, year: '2006', title: 'AWS Launches', description: 'Product of two-pizza team autonomy. Internal infrastructure sold externally. $80B+ business emerges.' },
          { step: 4, year: '2016', title: 'Decision Framework Published', description: 'Bezos codifies Type 1/Type 2 in shareholder letter. Framework adopted globally.' },
        ],
      },
      reflect: {
        prompts: [
          'Map your last five team decisions. How many were genuinely irreversible (Type 1) versus easily undone (Type 2)? How much time did you spend on each?',
          'Where in your organisation are reversible decisions being treated as irreversible? What approval processes exist that slow things down without reducing risk?',
          '"Disagree and commit" requires trust that your disagreement was heard. Does your team believe that? How do you know?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Speed is a strategy, not a style.', body: 'Amazon\'s speed isn\'t cultural accident. It\'s engineered through decision frameworks that match process weight to decision weight. Reversible decisions get lightweight process.' },
          { headline: 'Most organisational slowness is misclassification.', body: 'Teams don\'t mean to be slow. They treat every decision like it\'s permanent because no one has told them it\'s safe to be fast.' },
          { headline: '70% information is enough for most decisions.', body: 'Waiting for certainty is itself a decision — a decision to be slow. For reversible choices, bias toward action with incomplete information.' },
        ],
      },
    },
  },

  // ─── EMOTIONAL INTELLIGENCE MODULE ──────────────────────────────────────────
  {
    lesson_id: 'L012',
    title: 'Nadella\'s Empathy as Operating System',
    subtitle: 'How a personal tragedy reshaped the emotional architecture of a $3 trillion company',
    company: 'Microsoft',
    company_abbreviation: 'MS',
    year_range: '2014–2024',
    module: 'emotional_intelligence',
    category: 'Emotional Intelligence',
    category_color_key: 'grey',
    read_time_minutes: 8,
    difficulty: 'accessible',
    tags: ['Empathy', 'Culture', 'Vulnerability'],
    source_disclosure: 'Satya Nadella\'s "Hit Refresh" and public leadership talks',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'When Satya Nadella\'s son Zain was born with severe cerebral palsy in 1996, Nadella initially responded with self-pity. Over years, his wife Anu reframed his perspective: "This is not about you. It\'s about what Zain needs." That shift — from self-focus to other-focus — became Nadella\'s leadership framework.',
        body_paragraphs: [
          'When Nadella became CEO in 2014, Microsoft\'s culture was defined by combative internal reviews, aggressive debate, and intellectual dominance. Nadella introduced something the company had never valued: listening. He began leadership meetings by asking what people had learned, not what they had achieved.',
          'The most radical change was how Nadella handled conflict. Previous Microsoft leaders won arguments. Nadella asked questions. He would say: "Help me understand your perspective." Engineers initially mistook this for weakness. Over time, they recognized it as a different kind of strength — one that extracted better information from the system.',
          'The business impact was measurable: Microsoft\'s partnership strategy transformed. Under Ballmer, competitors were enemies. Under Nadella, Linux ran on Azure, Office shipped on iOS, and Microsoft invested in OpenAI. Empathy — understanding what others need — became a business strategy, not just a personal virtue.',
        ],
        pull_quote: {
          text: 'The source of all empathy is to realize that the other person is not you. They have a completely different context, completely different life experience.',
          attribution: 'Satya Nadella',
        },
        decisions: [
          { abbreviation: 'LS', title: 'Listen First', description: 'Restructured meetings around questions, not declarations. Leaders model curiosity.' },
          { abbreviation: 'PE', title: 'Partner with Enemies', description: 'Empathy applied to competitors. Understood what customers needed from partnerships, not what ego demanded.' },
          { abbreviation: 'VL', title: 'Vulnerable Leadership', description: 'Shared personal story publicly. Made vulnerability a leadership signal instead of a weakness.' },
          { abbreviation: 'GR', title: 'Growth Over Performance', description: 'Replaced "performance culture" with "growth culture." Failure became learning data.' },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: '1996', title: 'Zain\'s Birth', description: 'Son born with cerebral palsy. Nadella begins years-long journey from self-pity to empathy.' },
          { step: 2, year: '2014', title: 'CEO Appointment', description: 'Introduces empathy and growth mindset as operational principles. Meets skepticism.' },
          { step: 3, year: '2018', title: 'Culture Visibly Shifts', description: 'Employee satisfaction at record highs. Cross-team collaboration measurably increases.' },
          { step: 4, year: '2024', title: '$3 Trillion Valuation', description: 'Microsoft becomes most valuable company. Empathy-driven strategy validated at market scale.' },
        ],
      },
      reflect: {
        prompts: [
          'When did you last respond to a team member\'s problem with curiosity instead of a solution? What happened differently?',
          'Nadella\'s empathy journey started with personal hardship. What experience in your life shifted your capacity to see others\' perspectives?',
          'Microsoft\'s old culture rewarded "knowing." Nadella\'s rewards "learning." Which does your team culture actually reward — regardless of what you say it rewards?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Empathy is information extraction.', body: 'Listening isn\'t soft. It\'s strategic. Leaders who understand what others actually need — customers, partners, employees — make better decisions than those who project their own assumptions.' },
          { headline: 'Vulnerability in leaders creates permission.', body: 'When the CEO shares personal struggle, it signals that being human is safe. That signal cascades. Teams that feel safe perform measurably better.' },
          { headline: 'Former enemies become allies when you understand their needs.', body: 'Microsoft partnered with Linux, iOS, and OpenAI by asking: "What do users need?" not "What do we want to win?" Empathy toward competitors unlocked strategic options ego had blocked.' },
        ],
      },
    },
  },

  // ─── SERVANT LEADERSHIP MODULE ──────────────────────────────────────────────
  {
    lesson_id: 'L013',
    title: 'Costco\'s Employee-First Heresy',
    subtitle: 'How paying workers double the industry wage created the most profitable retailer per square foot',
    company: 'Costco',
    company_abbreviation: 'CO',
    year_range: '1983–Present',
    module: 'servant_leadership',
    category: 'Servant Leadership',
    category_color_key: 'teal',
    read_time_minutes: 7,
    difficulty: 'accessible',
    tags: ['Servant Leadership', 'Culture', 'Long-term'],
    source_disclosure: 'Public financial data, Brad Stone reporting, Jim Sinegal interviews',
    is_new: false,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'When Jim Sinegal co-founded Costco in 1983, Wall Street had a clear model for retail success: minimize labour costs, maximize executive compensation, and optimize for quarterly earnings. Sinegal did the opposite on every dimension — and outperformed.',
        body_paragraphs: [
          'Costco pays workers $25/hour average (nearly double Walmart). Provides healthcare on day one. Promotes 70% of management from within. Sinegal capped his own salary at $350K when peers earned $20M+. Analysts repeatedly called it "too generous to employees."',
          'The economics proved counterintuitive: Costco\'s employee turnover is 6% (vs. 44% industry average). Lower turnover means lower hiring costs, better customer service, less theft, and institutional knowledge that compounds. The "generosity" was actually arbitrage — investing in retention rather than recruitment cycles.',
          'Wall Street pushed for price increases, benefit cuts, and higher margins. Sinegal refused. When an analyst asked why he didn\'t raise membership fees, Sinegal replied: "I could also hold up customers at gunpoint, but that doesn\'t make it a good strategy." His constraint was long-term: build a system where employees, customers, and shareholders all win — in that order.',
        ],
        pull_quote: {
          text: 'Wall Street is in the business of making money between now and next Tuesday. We\'re in the business of building an organisation that will be here 50 years from now.',
          attribution: 'Jim Sinegal, Costco Co-founder',
        },
        decisions: [
          { abbreviation: 'DW', title: 'Double Wages', description: 'Pay workers 2x industry average. Accept lower margin for lower turnover and higher performance.' },
          { abbreviation: 'IP', title: 'Internal Promotion', description: '70% of managers promoted from within. Created career paths where competitors offered dead ends.' },
          { abbreviation: 'CC', title: 'CEO Pay Cap', description: 'Sinegal capped own salary at $350K. Signal: we win together or not at all.' },
          { abbreviation: 'CL', title: 'Customer Loyalty', description: 'Never raised prices unnecessarily. Built trust through restraint.' },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: '1983', title: 'Costco Founded', description: 'Jim Sinegal and Jeffrey Brotman open first warehouse. Employee-first model from day one.' },
          { step: 2, year: '1997', title: 'Analysts Push Back', description: 'Wall Street consistently rates Costco a "hold" citing "too generous" employee compensation.' },
          { step: 3, year: '2012', title: 'Turnover at 6%', description: 'Industry averages 44%. Costco proves retention is cheaper than recruitment at scale.' },
          { step: 4, year: '2024', title: 'Revenue Exceeds $250B', description: 'Costco is world\'s 3rd largest retailer. Model validated over four decades.' },
        ],
      },
      reflect: {
        prompts: [
          'Where does your organisation cut costs on people to show margin — and what is the hidden cost of that "savings" in turnover, knowledge loss, and disengagement?',
          'Sinegal resisted Wall Street pressure for decades. What short-term pressures are you yielding to that contradict your long-term values?',
          'Costco promotes 70% from within. What percentage of your team\'s management came from internal promotion? What does that signal to frontline workers about their future?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Generosity is arbitrage when turnover is expensive.', body: 'Paying people well isn\'t charity. At scale, the math favours retention. Every departure costs 6-9 months salary in replacement and ramp-up costs. Costco did the math.' },
          { headline: 'Stakeholder order matters.', body: 'Employees first, customers second, shareholders third. This order isn\'t altruism — it\'s causal. Great employees create great customer experiences, which create shareholder returns.' },
          { headline: 'Constraint is a long-term strategy.', body: 'Not raising prices feels like leaving money on the table. But it builds trust that compounds for decades. Short-term restraint creates long-term loyalty.' },
        ],
      },
    },
  },

  // ─── CULTURE BUILDING MODULE (additional) ───────────────────────────────────
  {
    lesson_id: 'L014',
    title: 'Pixar\'s Braintrust',
    subtitle: 'How Pixar built a system for honest creative feedback without destroying trust',
    company: 'Pixar',
    company_abbreviation: 'PX',
    year_range: '1995–Present',
    module: 'culture_building',
    category: 'Culture Building',
    category_color_key: 'green',
    read_time_minutes: 8,
    difficulty: 'medium',
    tags: ['Culture', 'Feedback', 'Creativity'],
    source_disclosure: 'Ed Catmull\'s "Creativity, Inc." and public Pixar documentation',
    is_new: false,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'Every Pixar movie — from Toy Story to Inside Out — goes through a phase where it\'s terrible. Not mediocre. Terrible. The company\'s competitive advantage isn\'t avoiding bad first drafts. It\'s building a system that makes bad drafts better through radically honest feedback without destroying the director\'s ownership.',
        body_paragraphs: [
          'The Braintrust is a meeting of senior creative leaders who review works-in-progress every few months. The rules are specific: feedback must be constructive, directed at the project (not the person), and — crucially — the director has no obligation to take any of it. The Braintrust advises. It does not mandate.',
          'This last point is what makes it work. When feedback comes without authority, it stays honest. If the Braintrust could override the director, people would game it politically. Because the director retains full control, the Braintrust can afford to be completely candid — their honesty carries no threat.',
          'Ed Catmull, Pixar\'s president, notes that the system requires constant maintenance. People naturally soften feedback over time as they become friends with directors. Catmull periodically rotates membership and explicitly names the tendency toward politeness as the system\'s primary failure mode.',
        ],
        pull_quote: {
          text: 'Candor isn\'t cruel. It\'s kind. Withholding feedback because you want to be nice is actually the cruelest thing you can do — you\'re prioritizing your comfort over their success.',
          attribution: 'Ed Catmull, Pixar',
        },
        decisions: [
          { abbreviation: 'NM', title: 'No Mandates', description: 'Braintrust gives feedback. Director decides what to take. Separates candor from authority.' },
          { abbreviation: 'PP', title: 'Project Not Person', description: 'All feedback directed at the work. "The scene doesn\'t work" not "You didn\'t execute."' },
          { abbreviation: 'RM', title: 'Rotate Membership', description: 'Periodic rotation prevents politeness calcification. Newcomers ask harder questions.' },
          { abbreviation: 'EF', title: 'Early and Often', description: 'Show work when it\'s ugly. Don\'t polish before feedback. Waste follows late honesty.' },
        ],
      },
      timeline: {
        events: [
          { step: 1, year: '1995', title: 'Toy Story Struggles', description: 'First Braintrust emerges organically. Senior team reviews struggling screenplay. Process works.' },
          { step: 2, year: '2000', title: 'Process Formalised', description: 'Regular Braintrust meetings established for all productions. Rules codified.' },
          { step: 3, year: '2012', title: 'Brave Intervention', description: 'Director change mid-production. Braintrust feedback enables successful creative pivot.' },
          { step: 4, year: '2015', title: 'Inside Out Breakthrough', description: 'Film rebuilt three times based on Braintrust feedback. Wins Oscar. Process validated.' },
        ],
      },
      reflect: {
        prompts: [
          'Does your team have a structure for honest feedback that separates candor from authority? Or does feedback always come with the implicit power to override?',
          'Pixar shows ugly work early. Does your team wait until something is polished before seeking feedback? What\'s the cost of late honesty?',
          'Catmull says politeness is the Braintrust\'s primary failure mode. Where has your team become too polite — where kindness is actually cowardice?',
        ],
      },
      takeaways: {
        items: [
          { headline: 'Separate feedback from authority.', body: 'When the person giving feedback can also override you, feedback becomes political. Remove the authority and candor becomes safe. Safe candor produces better work.' },
          { headline: 'Show work before it\'s ready.', body: 'Early ugly feedback is cheap. Late polished feedback is expensive. Every week you wait to show imperfect work is a week of compounding in the wrong direction.' },
          { headline: 'Politeness is a system failure, not a virtue.', body: 'Teams that are "nice" to each other often produce mediocre work. The kindest thing you can do is tell someone the truth early enough for them to act on it.' },
        ],
      },
    },
  },

  // ─── SCALING TEAMS MODULE (additional) ──────────────────────────────────────
  {
    lesson_id: 'L015',
    title: 'Stripe\'s Writing Culture',
    subtitle: 'How a payments company used written communication to scale decisions across 8,000 people',
    company: 'Stripe',
    company_abbreviation: 'ST',
    year_range: '2010–Present',
    module: 'scaling_teams',
    category: 'Scaling Teams',
    category_color_key: 'orange',
    read_time_minutes: 7,
    difficulty: 'medium',
    tags: ['Scaling', 'Communication', 'Remote'],
    source_disclosure: 'Public Stripe engineering blog, Patrick Collison interviews',
    is_new: false,
    is_locked: true,
    unlock_after_count: 5,
    progress: 0,
    status: 'locked',
    tabs: {
      overview: {
        situation:
          'By 2018, Stripe had grown from a two-brother startup in an apartment to 2,000 employees processing hundreds of billions of dollars annually. It operated across 46 countries and multiple time zones. The default scaling path — more meetings, more Slack, more management layers — was available and tempting. The Collison brothers chose a different path: institutionalise written communication as the primary medium for decisions, context, and coordination.',
        body_paragraphs: [
          'The philosophy is deceptively simple: if a decision is worth making, it is worth writing down. At Stripe, significant decisions — product directions, architectural choices, strategic pivots — begin with a written document, not a meeting. Not bullet points or a slide deck. Prose. The discipline of writing forces the author to confront the gaps in their own thinking that verbal communication hides. If you can\'t write it clearly, you don\'t understand it clearly.',
          'The meeting structure follows from this. At Stripe, important meetings begin with participants reading the relevant document in silence — typically 10 to 20 minutes. The discussion begins only after everyone has the same context. This eliminates the asymmetry of traditional meetings where the person who prepared the slides controls the narrative. The room starts equal. It also makes charisma less powerful than rigour: a well-reasoned written argument outperforms confident improvisation.',
          'The scaling effect is the real advantage. When a decision is written and stored, it compounds. A new engineer in Singapore can understand why an architectural decision was made two years earlier, without asking anyone. The institutional knowledge doesn\'t live in the heads of senior engineers who joined in 2016 — it lives in documents anyone can read. Writing is the only communication medium that scales across time. Every verbal conversation that isn\'t documented disappears.',
          'Stripe also uses RFC (Request for Comment) documents for technical decisions. Before implementing a significant change, engineers write a proposal that defines the problem, the solution, alternatives considered, and the trade-offs. Others comment in writing. The process is slow by design: RFC forces engineers to persuade rather than simply execute, and surfaces objections before they become production incidents. It also creates a record of why things were built the way they were — invaluable when the original author is no longer available.',
        ],
        pull_quote: {
          text: 'Writing is thinking. To write well is to think clearly. That\'s why it\'s so hard.',
          attribution: 'David McCullough — a principle embedded in Stripe\'s operating culture',
        },
        decisions: [
          {
            abbreviation: 'WF',
            title: 'Writing First',
            description: 'Significant decisions documented in prose before meetings. Writing forces clarity of thinking.',
          },
          {
            abbreviation: 'RM',
            title: 'Read-First Meetings',
            description: 'Meetings begin with silent reading. Equal context. Rigour over charisma.',
          },
          {
            abbreviation: 'RF',
            title: 'RFC Process',
            description: 'Technical changes require written proposals with alternatives and trade-offs documented.',
          },
          {
            abbreviation: 'IK',
            title: 'Institutional Knowledge',
            description: 'Decisions archived and searchable. New hires can trace the reasoning behind any system.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '2010',
            title: 'Stripe Founded',
            description: 'Patrick and John Collison launch Stripe from their apartment. Writing culture begins from day one.',
          },
          {
            step: 2,
            year: '2014',
            title: 'Culture Formalised',
            description: 'Company scales past 200 employees. Written documentation becomes explicit policy, not just habit.',
          },
          {
            step: 3,
            year: '2018',
            title: '2,000 Employees, 46 Countries',
            description: 'Writing cited as primary mechanism enabling asynchronous coordination across time zones.',
          },
          {
            step: 4,
            year: '2023',
            title: 'Stripe at Scale',
            description: '8,000 employees. $1T+ in annual payment volume. Documentation culture maintains decision coherence at scale.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Think about the last significant decision your team made. Was it written down? Can someone who joins next year understand what was decided and why?',
          'Stripe\'s meetings start with silent reading. How much of your meeting time is spent getting everyone to the same context that a shared document could have provided in advance?',
          'The RFC process forces engineers to persuade rather than execute. Where in your work do you implement changes without documenting your reasoning — and what\'s the downstream cost?',
          'Verbal communication that isn\'t documented disappears. What institutional knowledge in your organisation exists only in the heads of specific people? What happens when they leave?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Writing forces thinking.',
            body: 'If you cannot explain a decision clearly in writing, you do not understand it clearly. The discipline of prose reveals gaps that slides and bullet points conceal.',
          },
          {
            headline: 'Documentation compounds while verbal communication decays.',
            body: 'Every undocumented verbal decision disappears. Every documented decision can be revisited, shared, and built upon. Writing is the only communication medium that scales across time.',
          },
          {
            headline: 'Context equality changes meeting dynamics.',
            body: 'When everyone reads the same document before speaking, charisma and verbal confidence become less powerful than rigour. Silent reading levels the playing field.',
          },
          {
            headline: 'Slow down before execution to prevent costly reversals.',
            body: 'The RFC process is deliberately slow. The investment in writing a proposal catches objections before they become production incidents. It is faster than fixing a mistake at scale.',
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L016',
    title: 'Eisenhower\'s D-Day Decision',
    subtitle: 'The 24-hour window where one man carried the weight of the free world\'s fate',
    company: 'Allied Forces',
    company_abbreviation: 'AF',
    year_range: '1944',
    module: 'decision_making',
    category: 'Decision Making',
    category_color_key: 'pink',
    read_time_minutes: 9,
    difficulty: 'complex',
    tags: ['Decision-Making', 'Pressure', 'Leadership'],
    source_disclosure: 'Military records, Eisenhower papers at Dwight D. Eisenhower Presidential Library',
    is_new: false,
    is_locked: true,
    unlock_after_count: 8,
    progress: 0,
    status: 'locked',
    tabs: {
      overview: {
        situation:
          'By the spring of 1944, the Allied invasion of Nazi-occupied Europe was ready — 156,000 troops, 6,939 naval vessels, 11,590 aircraft, and years of planning compressed into a single launch window. Supreme Allied Commander Dwight D. Eisenhower had to make the go/no-go decision with one variable he could not control: the weather. The decision, made at 4:15am on June 5th, would determine whether the war ended in 1945 or dragged into 1947.',
        body_paragraphs: [
          'The original target date was June 5. A full moon and low tide were required for the beach landings — conditions that aligned only once per month, for a three-day window. Group Captain James Stagg, Eisenhower\'s chief meteorologist, faced the most consequential forecast of any meteorologist in history. On June 4th, he told Eisenhower that June 5 was unsuitable — storms would prevent air cover and make landing craft unnavigable. He forecast a brief gap: a 36-hour window of marginally acceptable conditions might open on June 6.',
          'Eisenhower convened his commanders. Air Marshal Trafford Leigh-Mallory said conditions were still inadequate for air operations. Field Marshal Montgomery said go — "I would say go." Admiral Bertram Ramsay was cautious. The advisors could not agree. Eisenhower listened to all of them, then sat in silence. He later described it: "The tension in the room was palpable. But the decision had to be mine alone." He gave a provisional go for June 6, with a final confirmation at 4:15am on June 5th.',
          'The confirmation meeting was held in darkness, in a cramped room at Southwick House, rain beating against the windows. Stagg entered with his revised forecast: the window would hold. Eisenhower sat quietly for 45 seconds. Then: "OK, we\'ll go." One witness described his face as "a man carrying the weight of the free world." The decision set 156,000 people in motion across the English Channel. There was no recall.',
          'What makes this case extraordinary is what Eisenhower did that night. He wrote a message in case the invasion failed: "Our landings in the Cherbourg-Havre area have failed to gain a satisfactory foothold and I have withdrawn the troops... The troops, the air and the Navy did all that bravery and devotion to duty could do. If any blame or fault attaches to the attempt it is mine alone." He dated it July 5 — a mistake that historians believe reveals the crushing weight of the moment. He folded it, put it in his wallet, and prepared to face the beach at dawn.',
        ],
        pull_quote: {
          text: 'I have full confidence in your courage, devotion to duty and skill in battle. We will accept nothing less than full victory.',
          attribution: 'Dwight D. Eisenhower, Order of the Day, June 6, 1944',
        },
        decisions: [
          {
            abbreviation: '24',
            title: '24-Hour Delay',
            description: 'Delayed from June 5 to June 6 based on a probabilistic weather window. Accepted uncertainty over certainty of failure.',
          },
          {
            abbreviation: 'SC',
            title: 'Sole Command',
            description: 'Consulted all advisors but made the final call alone. Did not delegate the decision or seek consensus.',
          },
          {
            abbreviation: 'FN',
            title: 'Failure Note',
            description: 'Wrote and carried a personal admission of responsibility in case the invasion failed. Pre-committed to accountability.',
          },
          {
            abbreviation: 'CI',
            title: 'Commit Irreversibly',
            description: 'Once given, the order could not be recalled. 156,000 troops in motion. Eisenhower accepted no option of retreat.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: 'Jun 4, 1944',
            title: 'June 5 Aborted',
            description: 'Stagg forecasts storms. Eisenhower delays the invasion by 24 hours. 5,000 ships already at sea ordered to hold.',
          },
          {
            step: 2,
            year: 'Jun 5, 4:15am',
            title: 'The Go Decision',
            description: 'Stagg delivers revised forecast. After 45 seconds of silence, Eisenhower says: "OK, we\'ll go."',
          },
          {
            step: 3,
            year: 'Jun 5, night',
            title: 'Failure Note Written',
            description: 'Eisenhower writes personal admission of failure to carry in his wallet. Accepts sole responsibility in advance.',
          },
          {
            step: 4,
            year: 'Jun 6, 1944',
            title: 'D-Day Succeeds',
            description: '156,000 troops land on five Normandy beaches. 4,414 Allied deaths. The largest amphibious assault in history succeeds.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Eisenhower made the go decision with roughly 50% confidence in the weather forecast. What level of certainty do you demand before committing to major decisions — and is that threshold optimal, or is it fear disguised as rigour?',
          'He wrote the failure note before launching. Pre-committing to accountability in writing changes how you approach a decision. What would happen if you did this before your next high-stakes choice?',
          'Monty said go. Leigh-Mallory said the conditions were inadequate. Eisenhower had to decide when his best advisors disagreed. How do you make a call when the people you trust most are split?',
          'The delay from June 5 to June 6 required 5,000 ships already at sea to hold position in rough weather. The cost of hesitation was concrete and measurable. Where are you incurring a hidden cost by demanding more certainty before acting?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Certainty is not a prerequisite for commitment.',
            body: 'Eisenhower launched the largest military operation in history on a probabilistic weather forecast from one man. Waiting for certainty would have meant missing the window entirely.',
          },
          {
            headline: 'Pre-committing to accountability improves decision quality.',
            body: 'Writing the failure note before the launch forced Eisenhower to be clear about what he was deciding and why. Pre-accepted accountability removes the instinct to hedge.',
          },
          {
            headline: 'Consensus among advisors is not the goal — clarity is.',
            body: 'Eisenhower\'s commanders disagreed. He listened to all of them and decided alone. The goal was not to find unanimous agreement but to gather the best available information and act.',
          },
          {
            headline: 'Delay has a cost. Quantify it before demanding more certainty.',
            body: 'A second delay would have meant another month\'s wait, with intelligence leaks likely and morale collapsing. Understanding the cost of inaction is as important as understanding the risk of action.',
          },
        ],
      },
    },
  },

  // ─── PHASE 1 NEW CASE STUDIES (L017–L026) ──────────────────────────────────────

  {
    lesson_id: 'L017',
    title: "Patagonia's 'Don't Buy This Jacket'",
    subtitle: 'How anti-consumerist conviction built a $3 billion brand — then gave it all away',
    company: 'Patagonia',
    company_abbreviation: 'PA',
    year_range: '2011–2022',
    module: 'culture_building',
    category: 'Culture Building',
    category_color_key: 'green',
    read_time_minutes: 10,
    difficulty: 'medium',
    tags: ['Culture', 'Sustainability', 'Brand', 'Purpose'],
    source_disclosure: 'Publicly disclosed via Yvon Chouinard\'s "Let My People Go Surfing," company press releases, and NYT interviews',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'On Black Friday 2011, Patagonia ran a full-page ad in the New York Times with the headline "Don\'t Buy This Jacket." Beneath an image of their best-selling R2 fleece, the ad detailed the environmental cost of the garment — 135 litres of water and 20 pounds of carbon dioxide. The ad asked customers to think twice before purchasing. It was either the most brilliant marketing move in retail history, or the most self-destructive.',
        body_paragraphs: [
          'Patagonia had been building toward this moment for decades. Yvon Chouinard, a rock climber who never wanted to be a businessman, founded the company almost by accident. He started making reusable steel pitons because the disposable ones were destroying Yosemite\'s rock faces. That instinct — that the product should not damage the thing it was meant to celebrate — became the company\'s operating system. By the time the ad ran, Patagonia was already donating 1% of revenue to environmental causes and had switched to organic cotton at enormous cost.',
          'The ad worked not because it was reverse psychology, but because it was genuine. Patagonia backed the message with Worn Wear, which repaired, resold, and recycled used garments. They built the largest garment repair facility in North America. Revenue, paradoxically, surged — growing 30% to roughly $540 million by 2012, and exceeding $1.5 billion by 2022.',
          'What made Patagonia\'s culture unusual was the willingness to accept economic pain in service of stated values. When they discovered supply chain labour abuses in Brazil, they spent 18 months auditing every supplier and published the results. When research showed synthetic fabrics shed microplastics, they funded independent research that could have damaged their own product line.',
          'The culmination came in September 2022, when Chouinard transferred ownership of the entire company — valued at roughly $3 billion — to a trust and nonprofit dedicated to fighting climate change. "Earth is now our only shareholder," he said. The family gave up all ownership.',
        ],
        pull_quote: {
          text: 'The more you know, the less you need.',
          attribution: 'Yvon Chouinard',
        },
        decisions: [
          {
            abbreviation: 'DB',
            title: "Don't Buy Campaign",
            description: 'Ran anti-consumerist ads at peak buying season. Backed it with repair and resale infrastructure.',
          },
          {
            abbreviation: 'WW',
            title: 'Worn Wear Programme',
            description: "Built North America's largest garment repair centre. Made not-buying the easier option.",
          },
          {
            abbreviation: 'SC',
            title: 'Supply Chain Transparency',
            description: 'Published full environmental footprint. Cut suppliers who violated standards.',
          },
          {
            abbreviation: 'EO',
            title: 'Earth Ownership',
            description: 'Transferred $3B company to environmental trust. Eliminated family wealth extraction.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '1973',
            title: 'Company Founded',
            description: 'Chouinard turns his climbing gear side business into Patagonia. Names it after a remote region to evoke adventure.',
          },
          {
            step: 2,
            year: '1996',
            title: 'Organic Cotton Switch',
            description: 'Converts entire cotton line to organic at significant cost. Reduces product line from 120 items to 66.',
          },
          {
            step: 3,
            year: '2011',
            title: "Don't Buy This Jacket",
            description: 'Black Friday NYT ad challenges consumerism. Revenue grows 30% in the following year.',
          },
          {
            step: 4,
            year: '2022',
            title: 'Earth Ownership',
            description: 'Chouinard transfers 100% ownership to Holdfast Collective and Patagonia Purpose Trust.',
          },
        ],
      },
      reflect: {
        prompts: [
          'When has your organisation said one thing publicly but acted differently internally? What was the cost of that gap?',
          'Patagonia accepted short-term revenue loss for long-term brand trust. Where in your work could you trade short-term metrics for deeper credibility?',
          'Chouinard built repair infrastructure before asking people not to buy. How do you ensure your values are backed by structural support, not just slogans?',
          'The company published its own failures voluntarily. What would happen if your team made its biggest mistakes transparent to stakeholders?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Authenticity compounds over decades.',
            body: 'Patagonia\'s "Don\'t Buy" campaign worked because it was preceded by 40 years of consistent values-driven decisions. Trust is not built by a single act but by a pattern.',
          },
          {
            headline: 'Structure your values into operations.',
            body: 'Worn Wear, repair centres, and supply chain audits turned abstract principles into concrete systems. Values without infrastructure are just marketing.',
          },
          {
            headline: 'Voluntary transparency builds unassailable trust.',
            body: 'Publishing your own failures before someone else discovers them creates a level of credibility that competitors cannot replicate.',
          },
          {
            headline: 'Purpose can be the ultimate competitive moat.',
            body: "When Chouinard gave away the company, it cemented Patagonia's brand in a way no marketing budget could achieve. Radical commitment attracts radical loyalty.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L018',
    title: "Spotify's Squad Model",
    subtitle: 'The org design that went viral — and the painful lessons hidden behind the whitepaper',
    company: 'Spotify',
    company_abbreviation: 'SP',
    year_range: '2012–2020',
    module: 'scaling_teams',
    category: 'Scaling Teams',
    category_color_key: 'orange',
    read_time_minutes: 9,
    difficulty: 'medium',
    tags: ['Organisation Design', 'Autonomy', 'Agile', 'Scaling'],
    source_disclosure: "Publicly disclosed via Henrik Kniberg's whitepapers and talks, Spotify Engineering Blog, and multiple post-mortems by former employees",
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'By 2012, Spotify had grown from a Swedish startup to a global music streaming platform with hundreds of engineers spread across Stockholm, New York, and London. The company faced the universal scaling problem: how do you move fast when you have 300 engineers instead of 30? Traditional hierarchies were too slow. Pure flat structures were chaotic. Spotify needed a third option.',
        body_paragraphs: [
          'The core unit was the Squad: a small, cross-functional team of 6–12 people — designers, developers, testers, and a product owner — who operated like a mini-startup. Each squad owned a specific feature end-to-end. They chose their own tools, processes, and ways of working. There was no mandated methodology. The only requirement was outcomes: ship working software that users love.',
          'Squads were grouped into Tribes (capped at ~100 people — the Dunbar number). Across tribes, Chapters connected people with the same skill set for knowledge sharing. Guilds were informal communities of interest. The model was deliberately organic — it looked messy on paper, but it optimised for speed of autonomous decision-making at the edges.',
          "The model's greatest strength was also its greatest vulnerability. When it worked, squads moved with startup-like speed inside a large organisation. But the model depended on cultural norms that were never formally codified. As Spotify grew beyond 2,000 engineers, some squads became silos. Lack of standardisation created integration headaches. New hires struggled with a system that lived in tribal knowledge.",
          'By 2020, Spotify had quietly moved away from the pure Squad Model. Former engineers published candid retrospectives acknowledging the gap between the idealised whitepaper and messy reality. But its core insight — that small, autonomous, cross-functional teams outperform hierarchical command structures — permanently changed how the industry builds software.',
        ],
        pull_quote: {
          text: 'Alignment enables autonomy. The stronger the alignment, the more autonomy you can afford to grant.',
          attribution: 'Henrik Kniberg, Spotify Agile Coach',
        },
        decisions: [
          {
            abbreviation: 'SQ',
            title: 'Squad Autonomy',
            description: 'Small cross-functional teams with full ownership. No mandated methodology.',
          },
          {
            abbreviation: 'TR',
            title: 'Tribe Structure',
            description: 'Capped at ~100 people (Dunbar number). Maintained human-scale communities.',
          },
          {
            abbreviation: 'CH',
            title: 'Chapters & Guilds',
            description: 'Cross-cutting skill groups for knowledge sharing without adding hierarchy.',
          },
          {
            abbreviation: 'IA',
            title: 'Internal Accountability',
            description: 'Squads measured on outcomes, not process. Trusted teams to find their own way.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '2012',
            title: 'Squad Model Formalised',
            description: 'Henrik Kniberg publishes the Spotify engineering culture whitepaper. Model goes viral in the agile community.',
          },
          {
            step: 2,
            year: '2014',
            title: 'Scaling to 300+ Engineers',
            description: 'Model expanded across Stockholm, New York, and London offices. Tribes form around product areas.',
          },
          {
            step: 3,
            year: '2018',
            title: 'Growing Pains',
            description: 'Internal friction emerges. Squads become silos. Integration costs rise as team count exceeds 200.',
          },
          {
            step: 4,
            year: '2020',
            title: 'Post-Mortem',
            description: 'Former engineers publish retrospectives. Spotify quietly evolves past the pure model. Lesson: culture cannot be copy-pasted.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Where in your organisation do teams have autonomy in name but not in practice? What would genuine autonomy require?',
          "Spotify's model broke down when cultural norms weren't codified. What unwritten rules does your team depend on that would confuse a new hire?",
          'The Dunbar number (~100) capped tribe size. At what point does your team lose the ability to coordinate informally? What happens then?',
          'The Squad Model was more aspirational than real. Where is your organisation confusing its idealised description with its actual operation?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Autonomy requires alignment as a prerequisite.',
            body: 'Without shared goals and clear boundaries, autonomous teams diverge into silos. Alignment is not the opposite of autonomy — it is its foundation.',
          },
          {
            headline: 'Org models are not transferable products.',
            body: "The Spotify Model failed when other companies copied the structure without the culture. Organisational design is context-dependent, not plug-and-play.",
          },
          {
            headline: 'Scaling breaks informal coordination.',
            body: 'What works at 50 people breaks at 500. The signals, norms, and trust networks that enable small-team speed must be deliberately replaced with lightweight formal structures at scale.',
          },
          {
            headline: 'Honest post-mortems are more valuable than success stories.',
            body: "Spotify's retrospectives were more instructive than its original whitepaper. The willingness to publicly document failure is a sign of organisational maturity.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L019',
    title: 'Gene Kranz and Apollo 13',
    subtitle: 'How Mission Control invented survival 200,000 miles from Earth — in 87 hours',
    company: 'NASA',
    company_abbreviation: 'NA',
    year_range: '1970',
    module: 'crisis_leadership',
    category: 'Crisis Leadership',
    category_color_key: 'blue',
    read_time_minutes: 12,
    difficulty: 'complex',
    tags: ['Crisis', 'Decision Making', 'Teamwork', 'Pressure'],
    source_disclosure: 'Publicly disclosed via Gene Kranz\'s autobiography "Failure Is Not an Option," NASA transcripts, and congressional testimony',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'On April 13, 1970, an oxygen tank exploded aboard Apollo 13, 200,000 miles from Earth. The spacecraft was venting oxygen into space. Power was failing. Three astronauts were in a crippled vessel with a dwindling supply of oxygen, water, power, and heat. Mission Control had no contingency plan for this scenario. Flight Director Gene Kranz had to invent the solution in real time.',
        body_paragraphs: [
          "Kranz's first decision set the tone for everything that followed. Within minutes of the explosion, someone said the word \"abort.\" Kranz shut it down immediately. Not because he had a solution — but because panic is contagious, and the first job of a crisis leader is to control the emotional temperature of the room. \"Let's everybody keep cool. Let's solve the problem, but let's not make it any worse by guessing.\"",
          'The technical challenges were staggering. The Lunar Module — designed for two men for 45 hours — had to become a lifeboat for three men for four days. Power was rationed to one-fifth of normal. The spacecraft became colder than a refrigerator. Carbon dioxide built up because the Command Module\'s square canisters didn\'t fit the Lunar Module\'s round receptacles. Engineers on the ground built an adapter using cardboard, plastic bags, and duct tape. The astronauts built it from verbal instructions. It worked.',
          "Kranz organised Mission Control into rotating tiger teams, each focused on a specific problem. He insisted on one rule: every recommendation had to account for downstream consequences. No one could solve their problem by creating someone else's problem. This forced systems thinking under extreme pressure.",
          'When engineers proposed a faster return trajectory, Kranz rejected it because it required firing the main engine on a damaged spacecraft. He chose the slower, safer free-return trajectory around the moon. It was an agonising extra day, but it eliminated a catastrophic variable. The re-entry blackout lasted ninety seconds longer than normal — the longest silence in NASA history. Then the crew radioed in. They were alive.',
        ],
        pull_quote: {
          text: 'Failure is not an option.',
          attribution: 'Gene Kranz (the sentiment embodied by Mission Control culture)',
        },
        decisions: [
          {
            abbreviation: 'EC',
            title: 'Emotional Control',
            description: "Shut down panic immediately. Controlled the room's temperature before the problem.",
          },
          {
            abbreviation: 'FR',
            title: 'Free-Return Trajectory',
            description: 'Chose the slower, safer path. Rejected the faster option that relied on an unverifiable engine.',
          },
          {
            abbreviation: 'TT',
            title: 'Tiger Teams',
            description: 'Rotated specialists through focused problem sets. Mandated systems thinking: no siloed solutions.',
          },
          {
            abbreviation: 'IA',
            title: 'Improvised Adapter',
            description: 'Square-peg-round-hole CO2 fix using cardboard, plastic bags, and tape. Solved constraints with available materials.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: 'Apr 13, 1970',
            title: 'Oxygen Tank Explodes',
            description: '"Houston, we\'ve had a problem." Spacecraft losing oxygen and power 200,000 miles from Earth.',
          },
          {
            step: 2,
            year: 'Apr 14, 1970',
            title: 'Lifeboat Activated',
            description: 'Crew powers down Command Module, transfers to Lunar Module. Power rationed to one-fifth of normal.',
          },
          {
            step: 3,
            year: 'Apr 15, 1970',
            title: 'CO2 Crisis Solved',
            description: 'Ground team invents adapter from spacecraft materials. Crew builds it from verbal instructions.',
          },
          {
            step: 4,
            year: 'Apr 17, 1970',
            title: 'Splashdown',
            description: 'After 87 hours in a freezing spacecraft, all three astronauts land safely in the South Pacific.',
          },
        ],
      },
      reflect: {
        prompts: [
          "Kranz's first act was to shut down panic, not solve the problem. When facing a crisis, do you control the emotional temperature first — or do you jump straight to solutions?",
          'The "no siloed solutions" rule forced every team to think about consequences for others. Where do your teams solve their own problems by creating problems elsewhere?',
          'Kranz rejected the faster trajectory because it relied on an unverifiable assumption. When have you chosen speed over certainty — and what was the cost?',
          'The CO2 adapter was built from cardboard, plastic bags, and tape. What constraints in your environment could be solved with available materials rather than ideal ones?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Control the room before controlling the problem.',
            body: 'Panic spreads faster than solutions. The first job of a crisis leader is to set the emotional tone — calm, focused, methodical — before any technical decision is made.',
          },
          {
            headline: 'Reject speed when it depends on unverifiable assumptions.',
            body: "The faster trajectory required trusting a potentially damaged engine. Kranz chose certainty over speed. In a crisis, the cost of being wrong exceeds the cost of being slow.",
          },
          {
            headline: 'Systems thinking prevents cascading failures.',
            body: "Requiring every solution to account for downstream consequences prevents the common crisis pattern where fixing one problem creates two new ones.",
          },
          {
            headline: 'Constraints breed creativity when panic is removed.',
            body: 'The CO2 adapter was pure invention under pressure. But it only happened because the team was calm enough to think creatively within severe material constraints.',
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L020',
    title: "Amazon's AWS — The Accidental Empire",
    subtitle: 'How internal infrastructure became the foundation of the modern internet',
    company: 'Amazon',
    company_abbreviation: 'AZ',
    year_range: '2003–2015',
    module: 'innovation',
    category: 'Innovation Under Pressure',
    category_color_key: 'purple',
    read_time_minutes: 11,
    difficulty: 'complex',
    tags: ['Innovation', 'Platform Thinking', 'Internal Tools', 'Disruption'],
    source_disclosure: 'Publicly disclosed via Brad Stone\'s "The Everything Store," AWS re:Invent keynotes, and Jeff Bezos shareholder letters',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "In 2003, Amazon was a bookstore expanding into general retail. Its technology infrastructure was a mess — a monolithic architecture where teams waited months for provisioning. During a strategy retreat, a junior engineer proposed that Amazon's internal infrastructure could be offered as a service to external developers. The idea seemed absurd. Amazon was a retailer. Why would anyone buy computing power from a bookstore?",
        body_paragraphs: [
          "The insight was deceptively simple: Amazon had already solved the hardest infrastructure problems at scale for its own retail business. Elastic compute, distributed storage, global networking — all existed internally. The idea was to productise what already existed and let anyone use it on-demand, paying only for what they consumed. Bezos saw what competitors missed: infrastructure itself was a product, and the market was essentially infinite.",
          "Bezos made two separating decisions. First, AWS must run as a genuinely independent business, charging market rates — not subsidised internal rates. Amazon's own retail teams would be customers, not privileged insiders. This forced AWS to be genuinely excellent. Second, the \"two-pizza team\" rule: every service owned by a team small enough to feed with two pizzas, preventing bureaucratic bloat.",
          "Critics called it a distraction from retail. Wall Street questioned hundreds of millions invested in thin-margin infrastructure. But Bezos understood infrastructure businesses have enormous economies of scale, and switching costs compound over time. Once a company builds on AWS, the cost of migrating away grows every month.",
          "By 2015, AWS generated $7.8 billion in revenue and $1.86 billion in operating income — more profit than Amazon's entire retail operation. Netflix, Airbnb, the CIA, and thousands of startups ran on AWS. Amazon had accidentally created the foundation of the modern internet.",
        ],
        pull_quote: {
          text: "We've had three big ideas at Amazon that we've stuck with for 18 years, and they're the reason we're successful: Put the customer first. Invent. And be patient.",
          attribution: 'Jeff Bezos',
        },
        decisions: [
          {
            abbreviation: 'IP',
            title: 'Infrastructure as Product',
            description: 'Recognised internal tools could be external products. Productised what already existed.',
          },
          {
            abbreviation: 'IN',
            title: 'Independent Business',
            description: "AWS charged market rates. Amazon's own teams were customers, not insiders. Forced genuine competitiveness.",
          },
          {
            abbreviation: 'TP',
            title: 'Two-Pizza Teams',
            description: 'Small autonomous teams owned each service end-to-end. Prevented bureaucratic overhead.',
          },
          {
            abbreviation: 'PL',
            title: 'Patient Capital',
            description: 'Invested billions despite Wall Street pressure. Understood infrastructure economics compound over time.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '2003',
            title: 'The Paper',
            description: "Benjamin Black and Chris Pinkham propose selling Amazon's infrastructure as a service. Bezos approves.",
          },
          {
            step: 2,
            year: '2006',
            title: 'S3 & EC2 Launch',
            description: 'Simple Storage Service launches March. Elastic Compute Cloud follows August. First customers are startups.',
          },
          {
            step: 3,
            year: '2013',
            title: 'CIA Contract',
            description: 'AWS wins $600M CIA cloud contract over IBM. Legitimacy with enterprise and government established.',
          },
          {
            step: 4,
            year: '2015',
            title: 'Profit Revelation',
            description: 'AWS reported separately for first time: $7.8B revenue, $1.86B profit. More profitable than all of Amazon retail.',
          },
        ],
      },
      reflect: {
        prompts: [
          'What internal tools or capabilities does your organisation have that external customers might pay for? What would it take to productise them?',
          "Bezos forced AWS to charge market rates to internal teams. Where does your organisation give insiders preferential treatment that masks poor quality?",
          "The two-pizza team rule prevented bureaucratic bloat. What is the maximum team size at which your organisation still moves fast? What happens beyond that threshold?",
          'AWS was called a distraction for years before proving its value. What initiative in your organisation is being dismissed as a distraction but might be the future?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Your internal infrastructure might be your most valuable product.',
            body: "Amazon's greatest innovation wasn't a consumer product — it was recognising that the boring, invisible infrastructure powering its own business was more valuable as an external offering.",
          },
          {
            headline: 'Treat internal teams as real customers.',
            body: 'Charging market rates and refusing to subsidise forces internal products to be genuinely competitive. Privilege breeds mediocrity.',
          },
          {
            headline: 'Patient capital beats quarterly thinking.',
            body: 'AWS required billions in investment for years before proving its economics. Infrastructure businesses compound — but only if you survive the critics long enough.',
          },
          {
            headline: 'Small teams with full ownership outperform large teams with shared responsibility.',
            body: 'The two-pizza rule ensured that every service had clear ownership, fast decision-making, and no diffusion of responsibility.',
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L021',
    title: "Howard Schultz's Starbucks Comeback",
    subtitle: 'How closing 7,100 stores for an afternoon saved a brand that had lost its soul',
    company: 'Starbucks',
    company_abbreviation: 'SB',
    year_range: '2008–2012',
    module: 'turnarounds',
    category: 'Turnarounds',
    category_color_key: 'red',
    read_time_minutes: 10,
    difficulty: 'medium',
    tags: ['Turnaround', 'Brand', 'Customer Experience', 'Focus'],
    source_disclosure: 'Publicly disclosed via Howard Schultz\'s "Onward," earnings calls, NYT and WSJ coverage, and Harvard Business Review case studies',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "By 2007, Starbucks had become exactly the thing Howard Schultz feared most: a commodity. Growth from 1,000 to 15,000 stores in a decade had hollowed out the experience. Stores smelled like burnt cheese instead of fresh coffee. The stock had dropped 50%. Same-store sales were declining for the first time. In January 2008, Schultz returned as CEO to fix what he helped break.",
        body_paragraphs: [
          "Schultz's first act was symbolic and expensive. On February 26, 2008, he closed all 7,100 US stores for three and a half hours during peak business to retrain every barista on espresso. The estimated cost: $6 million in lost revenue. Wall Street called it theatrical. But Starbucks's problem wasn't operational efficiency — it was soul. You can't fix soul with a memo. You need a ritual.",
          'He moved aggressively to strip away everything that diluted the brand. Killed breakfast sandwiches that overpowered coffee aroma. Removed automatic espresso machines that eliminated barista craft. Shut 600 underperforming stores. Halted new openings. For a company addicted to growth, this felt like amputation. But the logic was clear: you cannot grow your way out of a quality problem.',
          "The hardest part was cultural. 170,000 employees had been trained in a growth mindset where more stores meant more opportunity. At a leadership conference in New Orleans — deliberately chosen as a city rebuilding after Katrina — 10,000 managers heard Schultz admit his own role: \"I came back because I felt a deep responsibility. I helped create the problem.\"",
          'By 2012, the turnaround was complete. Revenue grew from $10.4B to $13.3B. Stock exceeded its previous peak. The deeper lesson: a company can grow too fast for its own culture to keep up, and the cure is the courage to go backwards before going forward.',
        ],
        pull_quote: {
          text: 'Growth and success can cover up a lot of mistakes. When growth slows, the mistakes become visible.',
          attribution: 'Howard Schultz',
        },
        decisions: [
          {
            abbreviation: 'RT',
            title: 'Retraining Ritual',
            description: 'Closed 7,100 stores for espresso retraining. Lost $6M. Sent the message that quality matters more than sales.',
          },
          {
            abbreviation: 'SB',
            title: 'Strip the Brand',
            description: 'Removed automatic machines, cut sandwiches, killed drive-through expansion. Restored sensory experience.',
          },
          {
            abbreviation: 'CS',
            title: 'Close 600 Stores',
            description: 'Shut underperforming locations. Accepted short-term pain for long-term brand health.',
          },
          {
            abbreviation: 'NO',
            title: 'New Orleans Conference',
            description: "10,000 managers volunteered and heard Schultz admit his mistakes. Rebuilt trust through vulnerability.",
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: 'Jan 2008',
            title: 'Schultz Returns as CEO',
            description: 'Stock down 50%. Same-store sales declining. Returns to fix what he helped break.',
          },
          {
            step: 2,
            year: 'Feb 2008',
            title: '7,100 Stores Closed for Retraining',
            description: 'Three-and-a-half-hour espresso retraining. $6M in lost revenue. Wall Street panics.',
          },
          {
            step: 3,
            year: '2008–2009',
            title: '600 Stores Closed',
            description: 'Underperforming locations shut. New openings halted. Company resets around quality over quantity.',
          },
          {
            step: 4,
            year: '2012',
            title: 'Full Recovery',
            description: 'Revenue reaches $13.3B. Stock exceeds pre-crisis highs. China expansion accelerates.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Where is your organisation growing faster than its culture can support? What signals tell you the quality is slipping?',
          "Schultz closed 7,100 stores as a ritual, not just a training session. When have you needed a dramatic gesture to signal that something has fundamentally changed?",
          "He admitted publicly that he helped create the problem. When is the last time a leader in your organisation took genuine ownership of a systemic failure they contributed to?",
          "The cure was going backwards before going forwards. What would it look like to deliberately shrink or simplify before the next growth push?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Growth can destroy the thing it was meant to scale.',
            body: "Starbucks grew the store count but diluted the experience. Scale without quality control is not growth — it's erosion.",
          },
          {
            headline: 'Rituals communicate more than memos.',
            body: 'Closing 7,100 stores sent a message that no internal email could achieve. Symbolic actions reach people that rational arguments miss.',
          },
          {
            headline: 'Leaders must own their contribution to the problem.',
            body: "Schultz's admission that he helped create the drift gave him credibility to demand change. People follow leaders who share blame, not just credit.",
          },
          {
            headline: 'Sometimes the bravest strategy is subtraction.',
            body: "Closing stores, cutting products, and halting expansion required more courage than any growth plan. Knowing what to stop is as important as knowing what to start.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L022',
    title: "Bob Chapman's Everybody Matters",
    subtitle: 'How treating a $3 billion manufacturer like a family — without layoffs — outperformed Wall Street',
    company: 'Barry-Wehmiller',
    company_abbreviation: 'BW',
    year_range: '1997–2015',
    module: 'servant_leadership',
    category: 'Servant Leadership',
    category_color_key: 'teal',
    read_time_minutes: 9,
    difficulty: 'medium',
    tags: ['People-First', 'Manufacturing', 'Trust', 'Empathy'],
    source_disclosure: 'Publicly disclosed via Bob Chapman\'s "Everybody Matters" (co-authored with Raj Sisodia), TED talks, and media interviews',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "Barry-Wehmiller is a $3 billion manufacturing company in St. Louis — not the kind that typically produces leadership philosophy. It makes paper-converting machinery and packaging equipment. When Bob Chapman became CEO in 1997, the company was a struggling conglomerate. What transformed it was Chapman's radical premise: a company's primary purpose is to send every employee home each day feeling fulfilled and valued.",
        body_paragraphs: [
          "Chapman's awakening came during a wedding. Watching the ceremony, he realised that every morning, employees' families entrust their most precious people to his company's care. \"Do we treat them with that same reverence?\" The answer was no. Most companies treat employees as functions — human resources to be optimised. Chapman decided to treat them as people first.",
          'The first test came during the 2008 crisis. Revenue dropped 30%. The standard playbook: lay off 20%. Chapman rejected it. Instead, every employee — from CEO to factory floor — took four weeks of unpaid leave spread across the year. "We\'re going to share the pain so that no one has to bear it alone." Employees voluntarily traded furlough weeks with colleagues who couldn\'t afford them. Trust, it turned out, is reciprocal.',
          'Barry-Wehmiller survived the recession without a single layoff and emerged with a more loyal, engaged, and productive workforce. Chapman codified his philosophy as "Truly Human Leadership." Performance reviews were replaced with personal growth conversations. Every leader takes a course called "Listen Like a Leader."',
          "The company's acquisition strategy includes cultural transformation: when acquiring a new company (over 100 completed), the first change is management culture, not the product line. Employee engagement exceeds 90%, voluntary turnover is a fraction of industry average, and revenue grew from $200M to $3B under Chapman's leadership.",
        ],
        pull_quote: {
          text: 'We measure success by the way we touch the lives of people.',
          attribution: 'Bob Chapman',
        },
        decisions: [
          {
            abbreviation: 'FM',
            title: 'Furlough Over Layoffs',
            description: 'Shared pain equally during the 2008 crisis. Every employee took 4 weeks unpaid. Zero layoffs.',
          },
          {
            abbreviation: 'LL',
            title: 'Listen Like a Leader',
            description: 'Replaced performance reviews with personal growth conversations. Trained every leader in active listening.',
          },
          {
            abbreviation: 'AC',
            title: 'Acquisition Culture',
            description: 'Over 100 acquisitions where culture transformation precedes operational changes.',
          },
          {
            abbreviation: 'TP',
            title: 'Trust is Primary',
            description: "Treated employee wellbeing as the primary metric. Made 'sending people home fulfilled' the company mission.",
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '1997',
            title: 'Chapman Becomes CEO',
            description: 'Barry-Wehmiller is a struggling $200M industrial conglomerate. Chapman begins culture transformation.',
          },
          {
            step: 2,
            year: '2008',
            title: 'Furlough Decision',
            description: 'Revenue drops 30%. Rejects layoffs. Implements shared furlough. Zero employees terminated.',
          },
          {
            step: 3,
            year: '2012',
            title: 'TEDx Talk Goes Viral',
            description: "Chapman's Truly Human Leadership talk reaches millions. Becomes a case study in people-first management.",
          },
          {
            step: 4,
            year: '2015',
            title: '"Everybody Matters" Published',
            description: 'Revenue exceeds $2.5B. 100+ acquisitions completed using culture-first integration model.',
          },
        ],
      },
      reflect: {
        prompts: [
          "Chapman asks: \"Would you treat your employees the way you'd want your children's employer to treat them?\" How does your organisation measure up?",
          'The furlough decision shared pain equally across all levels. When your organisation faces cost pressure, who bears the burden — and who is protected?',
          "Chapman replaced performance reviews with growth conversations. What would happen if you stopped rating people and started developing them instead?",
          "Trust was reciprocal: when Chapman showed care, employees showed care for each other. Where could demonstrating vulnerability as a leader unlock generosity in your team?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Shared sacrifice builds deeper loyalty than shared success.',
            body: "The furlough decision cost everyone equally — and created a bond that years of bonuses never could. People remember who stood with them in hard times.",
          },
          {
            headline: 'Listening is the most underrated leadership skill.',
            body: "Chapman trained every leader to listen before acting. In a culture of constant communication, the leaders who pause to genuinely hear create the deepest trust.",
          },
          {
            headline: 'Culture transformation must precede operational change.',
            body: "In 100+ acquisitions, Chapman proved that changing how people feel about their work changes how they perform it. Culture first, operations second.",
          },
          {
            headline: 'People-first management is not soft — it is profitable.',
            body: '$200M to $3B in revenue. 90%+ engagement. Fraction of industry turnover. Treating people as people is not charity — it is a superior operating model.',
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L024',
    title: "Jacinda Ardern's Christchurch Response",
    subtitle: 'How empathy-first leadership changed gun laws in 26 days and redefined crisis communication',
    company: 'New Zealand Government',
    company_abbreviation: 'NZ',
    year_range: '2019',
    module: 'emotional_intelligence',
    category: 'Emotional Intelligence',
    category_color_key: 'grey',
    read_time_minutes: 10,
    difficulty: 'medium',
    tags: ['Empathy', 'Crisis Communication', 'Grief', 'Moral Authority'],
    source_disclosure: "Publicly disclosed via press conferences, parliamentary records, and media coverage (BBC, NYT, The Guardian)",
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "On March 15, 2019, a gunman attacked two mosques in Christchurch, New Zealand, killing 51 people and injuring 49 others. It was the deadliest mass shooting in New Zealand's history. Within hours, Prime Minister Jacinda Ardern faced a test that would define her leadership: how do you lead a grieving nation through its worst day while simultaneously making policy decisions that will shape the country for decades?",
        body_paragraphs: [
          'Ardern\'s first public statement set a tone no modern political leader had struck in similar circumstances. She began with grief, not policy: "They have chosen to make New Zealand their home, and it is their home. They are us." The phrase "they are us" became the defining message. It was not a slogan crafted by a communications team — it was an instinctive expression that empathy must precede policy.',
          "What distinguished Ardern was the consistency between words and physical actions. She flew to Christchurch immediately, visited survivors, met families of the deceased, wore a hijab when visiting the Muslim community as a gesture of respect, and wept openly. In a political culture that equates composure with strength, she demonstrated that vulnerability could be a form of leadership.",
          "The strategic decisions were equally remarkable. Within 72 hours, she announced gun law changes. Within 26 days, Parliament passed the Arms Amendment Act 119 to 1, banning most semi-automatic weapons. The speed was extraordinary — comparable legislation had stalled for decades elsewhere. She achieved it through moral authority built by her emotional response.",
          'She also refused to say the perpetrator\'s name. "He sought notoriety, and that is why you will never hear me mention his name." This reframed the narrative from perpetrator to victims. It was a masterclass in controlling the emotional architecture of a crisis: who we centre, who we name, who we remember.',
        ],
        pull_quote: {
          text: 'They are us.',
          attribution: 'Jacinda Ardern, March 15, 2019',
        },
        decisions: [
          {
            abbreviation: 'EU',
            title: 'Empathy First',
            description: 'Led with grief, not policy. "They are us." Established emotional connection before strategic action.',
          },
          {
            abbreviation: 'PP',
            title: 'Physical Presence',
            description: 'Visited every affected community personally. Wept openly. Collapsed the distance between leader and people.',
          },
          {
            abbreviation: 'GL',
            title: 'Gun Law Reform',
            description: 'Banned semi-automatic weapons within 26 days. Fastest firearms legislation reform in modern history.',
          },
          {
            abbreviation: 'NR',
            title: 'Deny the Narrative',
            description: 'Refused to name the attacker. Recentred attention on victims. Changed media coverage patterns.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: 'Mar 15, 2019',
            title: 'Attack Begins',
            description: 'Gunman opens fire at Al Noor Mosque and Linwood Islamic Centre. 51 killed, 49 injured.',
          },
          {
            step: 2,
            year: 'Mar 15, 2019',
            title: '"They Are Us"',
            description: 'Ardern delivers first public statement. Establishes empathy-first framework for national response.',
          },
          {
            step: 3,
            year: 'Mar 21, 2019',
            title: 'Gun Reform Announced',
            description: 'Six days after attack, Ardern announces ban on semi-automatic weapons and assault rifles.',
          },
          {
            step: 4,
            year: 'Apr 10, 2019',
            title: 'Arms Amendment Act Passed',
            description: 'Parliament votes 119–1. Buyback programme launched. 56,000 weapons surrendered.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Ardern led with empathy before policy. When facing a crisis, do you allow space for grief before jumping to solutions — or do you skip the human step?',
          'She demonstrated vulnerability as a form of strength. When has showing emotion made you a more effective leader? When has suppressing it cost you credibility?',
          'The refusal to name the attacker controlled the narrative architecture. In your communications, who are you centring — the problem or the people affected?',
          'Ardern built moral authority through emotional presence, then spent it on decisive policy. What is the relationship between empathy and authority in your leadership?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Empathy is not the opposite of decisiveness — it enables it.',
            body: "Ardern's emotional response built the moral authority and political capital that made 26-day gun reform possible. Empathy first, then action.",
          },
          {
            headline: 'Physical presence communicates what words cannot.',
            body: "Being there — visibly grieving, holding people, wearing symbols of respect — collapses the distance between leader and community in ways that press conferences never can.",
          },
          {
            headline: 'Control who gets centred in the narrative.',
            body: 'By refusing to name the attacker, Ardern denied him the notoriety he sought and redirected attention to victims and community resilience. Narrative architecture is a leadership choice.',
          },
          {
            headline: 'Vulnerability in leadership is a signal of strength, not weakness.',
            body: 'Weeping openly did not diminish Ardern\'s authority — it amplified it. People trust leaders who demonstrate genuine human emotion in moments of genuine tragedy.',
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L025',
    title: "Indra Nooyi's PepsiCo Transformation",
    subtitle: 'How a 12-year battle to make junk food healthy grew revenue from $35B to $63.5B',
    company: 'PepsiCo',
    company_abbreviation: 'PC',
    year_range: '2006–2018',
    module: 'scaling_teams',
    category: 'Scaling Teams',
    category_color_key: 'orange',
    read_time_minutes: 10,
    difficulty: 'medium',
    tags: ['Strategy', 'Health', 'Transformation', 'Stakeholder Management'],
    source_disclosure: 'Publicly disclosed via Indra Nooyi\'s "My Life in Full," PepsiCo annual reports, and Fortune/Forbes interviews',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "When Indra Nooyi became CEO of PepsiCo in 2006, the world was turning against its core products. Sugary sodas and salty chips were being linked to obesity and diabetes. Regulators were circling. Consumer preferences were shifting. Nooyi faced the choice every legacy company dreads: transform the portfolio at the risk of alienating the core business, or defend the existing portfolio and hope the health trend was a fad.",
        body_paragraphs: [
          'Nooyi introduced "Performance with Purpose," reorganising PepsiCo\'s entire portfolio into three categories: "Fun for You" (Doritos, Pepsi), "Better for You" (reduced-fat/sugar versions), and "Good for You" (Quaker Oats, Tropicana, Naked Juice). The strategy was not to abandon indulgent products but to ensure the fastest-growing tier was the healthier one.',
          "Resistance was fierce. Frito-Lay and Beverages divisions argued reformulation would alienate customers. Marketing worried health messaging would undermine the brand's fun positioning. Activist investor Nelson Peltz publicly pressured Nooyi to split the company. Wall Street wanted short-term returns; Nooyi was playing a decade-long game.",
          "Nooyi held firm but wasn't rigid. She protected R&D for healthier products while maintaining core brand marketing. She reformulated incrementally — reducing sodium in Lay's by 25% over years without announcement. She acquired health brands (Naked Juice, Sabra) to accelerate the shift. And she invested in the food scientists tasked with making healthier products that actually tasted good.",
          "By 2018, 'Good for You' and 'Better for You' products represented over 50% of revenue — up from ~38%. Net revenue grew from $35B to $63.5B. PepsiCo survived the health-conscious shift that devastated other legacy food companies. The lesson: move fast enough to stay ahead of the market, but slow enough that you don't destroy the organisation's ability to execute.",
        ],
        pull_quote: {
          text: 'If all you want me to do is cut the sugar and add the salt, I can do that. But you hired me to build a company that thrives for the next 100 years.',
          attribution: 'Indra Nooyi',
        },
        decisions: [
          {
            abbreviation: 'PP',
            title: 'Performance with Purpose',
            description: 'Reframed company strategy around long-term health. Three product tiers: Fun/Better/Good for You.',
          },
          {
            abbreviation: 'IR',
            title: 'Incremental Reformulation',
            description: 'Reduced sodium and sugar gradually. Consumers adjusted without backlash. Stealth transformation.',
          },
          {
            abbreviation: 'AR',
            title: 'Activist Resistance',
            description: "Withstood Nelson Peltz's public pressure to split the company. Maintained long-term vision against short-term demands.",
          },
          {
            abbreviation: 'PA',
            title: 'Portfolio Acquisition',
            description: 'Acquired Naked Juice, Sabra, and other health brands. Accelerated shift through M&A alongside organic R&D.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '2006',
            title: 'Nooyi Becomes CEO',
            description: 'First woman and person of color to lead PepsiCo. Introduces "Performance with Purpose."',
          },
          {
            step: 2,
            year: '2010',
            title: 'Portfolio Rebalanced',
            description: '"Good for You" products growing at 2x rate of indulgent products. R&D investment accelerates.',
          },
          {
            step: 3,
            year: '2013',
            title: 'Peltz Pressure',
            description: 'Activist investor demands company split. Nooyi publicly defends integrated strategy. Board backs her.',
          },
          {
            step: 4,
            year: '2018',
            title: 'Transformation Complete',
            description: 'Healthy products exceed 50% of revenue. Revenue grown from $35B to $63.5B. Nooyi steps down.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Nooyi faced pressure to optimise for short-term returns versus long-term transformation. Where are you being pressured to prioritise the urgent over the important?',
          "She reformulated products incrementally so consumers didn't notice. Where could gradual change achieve what abrupt change would make fail?",
          "Peltz wanted to split the company for short-term value. How do you respond when powerful stakeholders push for decisions you believe are strategically wrong?",
          "Nooyi protected R&D budgets during pressure to cut costs. What investments in your organisation are being threatened that you know will pay off in 5–10 years?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Transformation tempo matters as much as direction.',
            body: "Moving too fast destroys execution capability. Moving too slow lets the market pass you. Nooyi found the tempo that transformed PepsiCo without breaking it.",
          },
          {
            headline: 'Stealth reformulation avoids backlash.',
            body: 'Reducing sodium by 25% over several years without announcing it let consumers adjust naturally. Not every change needs to be a headline.',
          },
          {
            headline: 'Resist activist pressure with long-term evidence.',
            body: "Nooyi didn't argue philosophy with Peltz — she argued numbers. Performance with Purpose delivered growth. Results silence critics.",
          },
          {
            headline: 'Portfolio diversification is risk management.',
            body: "Companies dependent on a single product category are fragile. Nooyi's three-tier structure ensured PepsiCo could survive any single-category decline.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L026',
    title: "Dyson's 5,127 Prototypes",
    subtitle: 'How 15 years of failure, debt, and rejection built a $30 billion empire',
    company: 'Dyson',
    company_abbreviation: 'DY',
    year_range: '1979–1993',
    module: 'innovation',
    category: 'Innovation Under Pressure',
    category_color_key: 'purple',
    read_time_minutes: 9,
    difficulty: 'medium',
    tags: ['Persistence', 'Invention', 'Iteration', 'Conviction'],
    source_disclosure: 'Publicly disclosed via James Dyson\'s autobiography "Against the Odds," BBC interviews, and Dyson company records',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "In 1978, James Dyson noticed his bag-type vacuum lost suction as the bag filled. He had an idea: use cyclonic separation — the same principle used in industrial sawmills — to create a vacuum that never lost suction. What followed was 5,127 prototypes over 15 years, built by hand, funded by personal savings and mounting debt, rejected by every major manufacturer in the world.",
        body_paragraphs: [
          'The first prototype was cardboard and duct tape attached to an old Hoover. The principle was sound: spin air at high speed inside a cone, and centrifugal force separates dust from air without any bag. The problem was engineering. Every variable — cone angle, air speed, entry point, exit diameter — affected performance. Dyson adjusted one variable at a time, tested, measured, and recorded. Prototype 1 to prototype 5,127.',
          "The rejection phase was more painful than the engineering. Every major manufacturer rejected him: Hoover, Electrolux, Miele, Black & Decker. The reason was devastating: the vacuum bag market was worth $500 million annually. A bagless vacuum would destroy that revenue. Hoover's VP told him: \"If this idea were any good, we would have already thought of it.\" The industry rejected it because it worked too well.",
          'By the late 1980s, Dyson was deeply in debt. His wife\'s salary covered the mortgage. But Dyson had a conviction: iteration itself was the product. Each failed prototype wasn\'t failure — it was data. "I made 5,126 prototypes that didn\'t work. I learnt from each one. If I can be bothered to try 5,127 times, I\'ll probably find a way."',
          'The breakthrough came from Japan — a company licensed the technology and launched the G-Force at $2,000 per unit. It became a status symbol. The revenue funded Dyson\'s own manufacturing. In 1993, the DC01 launched in the UK and became the best-selling vacuum within 22 months. By 2005, Dyson held 30% of the US market. James Dyson became Britain\'s wealthiest person.',
        ],
        pull_quote: {
          text: 'Enjoy failure and learn from it. You can never learn from success.',
          attribution: 'James Dyson',
        },
        decisions: [
          {
            abbreviation: 'SI',
            title: 'Single-Variable Iteration',
            description: 'Changed one variable per prototype. 5,127 iterations, each producing measurable data.',
          },
          {
            abbreviation: 'SM',
            title: 'Self-Manufacturing',
            description: 'After universal rejection, manufactured under his own brand. Controlled the product end-to-end.',
          },
          {
            abbreviation: 'JL',
            title: 'Japan License',
            description: 'Licensed technology to Japanese market first. Used revenue to fund own manufacturing.',
          },
          {
            abbreviation: 'CR',
            title: 'Customer Over Revenue',
            description: 'Built a product that eliminated $500M in bag sales. Solved the customer problem that incumbents protected.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '1979',
            title: 'First Prototype',
            description: 'Cardboard and duct tape cyclone attached to a Hoover. Proof of concept works.',
          },
          {
            step: 2,
            year: '1979–1984',
            title: '5,127 Prototypes',
            description: "Five years of daily iteration in a coach house. One variable changed per test. Funded by wife's salary.",
          },
          {
            step: 3,
            year: '1986',
            title: 'Japan Launch',
            description: 'G-Force licensed to Japanese company. Sells at $2,000 as a status symbol. Generates manufacturing capital.',
          },
          {
            step: 4,
            year: '1993',
            title: 'DC01 Launches in UK',
            description: 'Becomes best-selling vacuum in Britain within 22 months. Proves every rejecting manufacturer wrong.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Dyson changed one variable per prototype and tracked the results. How disciplined is your iteration process — do you change one thing at a time, or multiple things and hope?',
          'Every major manufacturer rejected him because a better product would destroy their existing revenue. Where is your industry protecting an inferior solution because it generates recurring revenue?',
          'Dyson was in debt, rejected by everyone, and sustained only by conviction. What is the difference between persistence and delusion — and how do you know which one you are in?',
          'The breakthrough came from an unexpected market (Japan, at $2,000). Where might your idea succeed first that you haven\'t considered?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Single-variable iteration produces compounding knowledge.',
            body: "Changing one thing at a time is slower per cycle but produces clear signal. After 5,127 iterations, Dyson knew more about cyclonic separation than anyone alive.",
          },
          {
            headline: "Incumbents reject innovations that threaten their revenue model.",
            body: 'Hoover and Electrolux rejected a better product because it eliminated bag sales. When incumbents say "if it were good, we\'d have thought of it," they mean "it threatens our business model."',
          },
          {
            headline: 'Conviction must outlast rejection.',
            body: 'Every manufacturer said no. Most inventors would quit. The difference between Dyson and thousands of forgotten inventors was not talent — it was the willingness to continue when all evidence suggested stopping.',
          },
          {
            headline: 'Find your Japan — the market that values the innovation the mainstream rejects.',
            body: "When your home market won't accept your product, find the market that will — even if it's geographically or demographically unexpected. Revenue from early adopters funds the assault on the mainstream.",
          },
        ],
      },
    },
  },

  // ─── L027–L031: NEW CASE STUDIES ────────────────────────────────────────────

  {
    lesson_id: 'L027',
    title: "Phil Jackson's Mindful Dynasty",
    subtitle: 'How a coach used Zen Buddhism and emotional intelligence to win 11 championships — by letting go of control',
    company: 'Chicago Bulls / LA Lakers',
    company_abbreviation: 'NBA',
    year_range: '1989–2011',
    module: 'emotional_intelligence',
    category: 'Emotional Intelligence',
    category_color_key: 'grey',
    read_time_minutes: 9,
    difficulty: 'accessible',
    tags: ['Empathy', 'Team Dynamics', 'Mindfulness', 'Ego Management'],
    source_disclosure: "Phil Jackson's 'Eleven Rings,' 'Sacred Hoops,' and public interviews with players and staff",
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'When Phil Jackson became head coach of the Chicago Bulls in 1989, he inherited the most individually talented — and dysfunctional — team in basketball. Michael Jordan was arguably the greatest player alive, and the Bulls built their entire offence around him. They had never won a championship. Jordan\'s talent was not the constraint. The team\'s inability to function as a collective was.',
        body_paragraphs: [
          'Jackson\'s diagnosis was unusual for professional sport: the team suffered from excessive individualism, and the cure was not better tactics but a shift in consciousness. He introduced Zen Buddhism and mindfulness practices to his players — mandatory meditation, Native American rituals, and a reading list that included books on Buddhism, philosophy, and mythology. Other coaches called it eccentric. Jackson called it competitive preparation.',
          'The tactical expression of this philosophy was the triangle offence — a system that required every player to read the floor and make decisions without looking to Jordan for instruction. The offence had no plays in the conventional sense. It responded to what the defence gave. The principle was radical: subordinate individual brilliance to collective intelligence. Jordan, who had spent his career being the answer to every problem, had to learn to be one node in a network.',
          'The most testing case was Dennis Rodman. Jackson recruited Rodman to the Bulls in 1995 despite — or because of — his reputation as the most uncoachable player in the league. Jackson\'s approach was not to control Rodman but to understand him. He studied Rodman\'s background, met with psychologists, and created specific agreements about behaviour rather than rules. He allowed Rodman to take unannounced trips to Las Vegas for 48 hours in the middle of a season. The team won the championship that year.',
          "Jackson's ability to manage the relationship between Jordan and Scottie Pippen — one celebrated, one undersold — was equally instructive. Pippen was paid $2.8 million per year while Jordan earned $33 million. Resentment was rational. Jackson created systems that publicly valued Pippen's contribution and privately acknowledged the inequity was real. He never asked Pippen not to feel what he felt. He asked Pippen to channel it.",
        ],
        pull_quote: {
          text: 'The strength of the team is each individual member. The strength of each member is the team.',
          attribution: 'Phil Jackson',
        },
        decisions: [
          {
            abbreviation: 'MD',
            title: 'Mindfulness Practice',
            description: 'Introduced mandatory meditation and mindfulness to an NBA locker room. Players performed better under pressure.',
          },
          {
            abbreviation: 'TO',
            title: 'Triangle Offence',
            description: 'Replaced hero-ball with collective decision-making. Every player reads the floor. No plays.',
          },
          {
            abbreviation: 'RD',
            title: 'Rodman Agreement',
            description: "Managed Rodman through bespoke agreements, not rules. Allowed Vegas trips. Won championships anyway.",
          },
          {
            abbreviation: 'EP',
            title: 'Ego Redistribution',
            description: "Publicly elevated Pippen. Redirected Jordan's dominance to serve collective outcomes.",
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '1989',
            title: 'Jackson Appointed Head Coach',
            description: 'Inherits Michael Jordan but no championship culture. Introduces mindfulness and triangle offence.',
          },
          {
            step: 2,
            year: '1991–1993',
            title: 'Three-Peat: Chicago',
            description: 'Bulls win three consecutive NBA championships. Jordan accepts collective play. System proves itself.',
          },
          {
            step: 3,
            year: '1996–1998',
            title: 'Second Three-Peat',
            description: 'Rodman recruited. Three more titles. Jackson manages the most volatile roster in basketball.',
          },
          {
            step: 4,
            year: '2000–2002',
            title: 'LA Lakers Three-Peat',
            description: 'Jackson moves to LA. Applies same system to Kobe Bryant and Shaquille O\'Neal. Three more titles.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Jackson asked the most talented player in the world to subordinate his instincts to a system. When have you needed to redirect individual brilliance toward collective performance? How did you do it?',
          'He studied Rodman before setting rules. Where do you apply blanket policies to people whose behaviour requires individual understanding?',
          'The triangle offence had no plays — it responded to what the defence gave. Where in your team\'s work are you running scripted responses when the situation requires real-time reading?',
          'Jackson created space for Rodman\'s Vegas trip mid-season. What unconventional flexibility have you denied because of how it looks, when granting it might unlock performance?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Collective intelligence outperforms individual brilliance at scale.',
            body: 'Jordan was more talented than anyone he played against. The Bulls started winning when Jordan accepted that the team\'s collective awareness was more dangerous than his individual excellence.',
          },
          {
            headline: 'Rules manage averages; agreements manage individuals.',
            body: "Rules are designed for the average person. Exceptional people — Rodman, Jordan, Kobe — often need individual agreements that acknowledge who they actually are.",
          },
          {
            headline: 'Mindfulness is a competitive advantage, not a wellness exercise.',
            body: 'Players who meditate regularly perform better under pressure because they can observe their emotional state without being controlled by it. Jackson treated this as a performance tool, not a therapy.',
          },
          {
            headline: 'Acknowledge what is real before asking people to transcend it.',
            body: "Pippen's pay inequality was real. Jackson didn't ask him to pretend otherwise. He acknowledged it, then asked Pippen to choose how to channel the energy. Honesty precedes transformation.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L028',
    title: "Mary Barra's GM Recall",
    subtitle: "How the world's biggest automaker was caught hiding a deadly defect — and how its CEO chose accountability over defence",
    company: 'General Motors',
    company_abbreviation: 'GM',
    year_range: '2014',
    module: 'emotional_intelligence',
    category: 'Emotional Intelligence',
    category_color_key: 'grey',
    read_time_minutes: 10,
    difficulty: 'medium',
    tags: ['Accountability', 'Crisis Communication', 'Institutional Failure', 'Empathy'],
    source_disclosure: "US Congressional testimony (2014), Anton Valukas investigation report, Mary Barra's public statements and interviews",
    is_new: true,
    is_locked: true,
    unlock_after_count: 14,
    progress: 0,
    status: 'locked',
    tabs: {
      overview: {
        situation:
          "Mary Barra had been CEO of General Motors for 11 days when the company recalled 2.6 million vehicles for an ignition switch defect linked to at least 124 deaths and 275 injuries. The defect had been known inside GM for over a decade. Engineers had discovered it in 2001. Managers had reviewed it in 2005 and decided not to fix it because the cost — $0.57 per vehicle — wasn't worth approving. The cover-up was not a conspiracy. It was something more insidious: an institution that had learned not to surface bad news.",
        body_paragraphs: [
          'The investigation that followed — led by attorney Anton Valukas — produced one of the most devastating institutional post-mortems in American corporate history. It introduced a phrase that entered the business lexicon: "the GM nod." In meetings, GM employees would nod and appear to agree on an action. Then nothing would happen. No one was responsible because no one had explicitly refused. Responsibility dissolved in the gap between agreement and action.',
          "Barra\'s initial response was imperfect. She appeared before Congress twice and said \"I don't know\" thirty times in a single session — honest, but not reassuring. Critics called her evasive. But the deeper reading is different: she was eleven days into the job when the crisis broke. The honest answer to \"why did this happen\" was genuinely \"I am investigating.\" She chose transparency over performance.",
          'What distinguished Barra from her predecessors was the structure of the response. She hired Kenneth Feinberg — the same fund manager who administered the 9/11 compensation fund — to run a no-fault victim compensation programme without litigation caps. She did not force families to sue. She did not make them prove causation. She acknowledged corporate responsibility before the legal process compelled her to. This decision cost GM more than $600 million but established Barra as the kind of CEO who would accept the real cost of a real failure.',
          "Barra also commissioned the Valukas report with a mandate to be fully honest and publish the findings — including findings that reflected badly on her own organisation. The report named names. It described decisions made and not made over thirteen years. It was the most thorough public act of institutional self-examination in recent automotive history. Barra's emotional intelligence was in understanding what the situation required: not defence of the institution, but accountability to the people the institution had harmed.",
        ],
        pull_quote: {
          text: 'I never want to put this behind us. I want to put this in our history so we never forget it.',
          attribution: 'Mary Barra, General Motors CEO',
        },
        decisions: [
          {
            abbreviation: 'VR',
            title: 'Valukas Report',
            description: 'Commissioned fully independent investigation with mandate to publish. Named names. No whitewash.',
          },
          {
            abbreviation: 'NF',
            title: 'No-Fault Fund',
            description: 'Hired Feinberg to run victim compensation without litigation caps. Accepted responsibility before legal compulsion.',
          },
          {
            abbreviation: 'TP',
            title: 'Transparent Testimony',
            description: 'Said "I don\'t know" in Congress rather than performing confidence. Chose honesty over optics.',
          },
          {
            abbreviation: 'GM',
            title: 'Kill the GM Nod',
            description: "Institutionalised 'Speak Up for Safety' programme. Made surfacing bad news explicitly rewarded.",
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: 'Jan 15, 2014',
            title: 'Barra Becomes CEO',
            description: 'First female CEO of a major automaker. Has been in the role 11 days when the crisis breaks.',
          },
          {
            step: 2,
            year: 'Feb 2014',
            title: '2.6 Million Vehicles Recalled',
            description: 'Ignition switch defect linked to 124 deaths. Internal documents show GM knew since 2001.',
          },
          {
            step: 3,
            year: 'Apr 2014',
            title: 'Congressional Testimony',
            description: 'Barra testifies twice. Says "I don\'t know" 30 times. Commits to full Valukas investigation.',
          },
          {
            step: 4,
            year: 'Jun 2014',
            title: 'Valukas Report Published',
            description: '315-page report identifies the "GM nod." Feinberg fund pays $600M+ to victims without litigation.',
          },
        ],
      },
      reflect: {
        prompts: [
          'The GM nod describes a culture where everyone agrees and no one acts. Where does this pattern exist in your organisation — and what structural condition creates it?',
          'Barra said "I don\'t know" thirty times in front of Congress. When is honesty about not knowing the more trustworthy response than a confident but uncertain answer?',
          'GM knew about the defect for 13 years. Who in your organisation knows about a problem that hasn\'t surfaced to leadership? What would it take for them to feel safe raising it?',
          'Barra commissioned a report designed to damage the company\'s reputation. What would it take for your organisation to conduct a fully honest public post-mortem on a significant failure?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Institutional cultures of silence require structural interventions.',
            body: "The GM nod wasn't the result of bad people — it was the result of a system where surfacing bad news was riskier than suppressing it. Culture change requires changing what is rewarded and punished.",
          },
          {
            headline: 'Accepting responsibility before legal compulsion builds more trust than denying until forced.',
            body: 'Barra\'s no-fault fund cost $600M but established moral authority. Companies that defend until discovery spend more and lose more trust in the process.',
          },
          {
            headline: '"I don\'t know" is a form of respect.',
            body: "Performing confidence you don't have is a form of disrespect to the people asking. Barra's honesty about the limits of her knowledge in Congress was read as weakness at the time and trustworthiness in retrospect.",
          },
          {
            headline: 'Make failure part of the permanent record.',
            body: "Publishing the Valukas report ensured GM couldn't quietly move on. Encoding institutional failures in the record prevents the forgetting that leads to recurrence.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L029',
    title: "Lou Gerstner's IBM Elephant Dance",
    subtitle: 'How an outsider who knew nothing about computers saved the most important technology company in history — by refusing to have a strategy',
    company: 'IBM',
    company_abbreviation: 'IB',
    year_range: '1993–2002',
    module: 'turnarounds',
    category: 'Turnarounds',
    category_color_key: 'red',
    read_time_minutes: 11,
    difficulty: 'complex',
    tags: ['Turnaround', 'Culture', 'Outsider Leadership', 'Focus'],
    source_disclosure: "Lou Gerstner's 'Who Says Elephants Can't Dance?' (2002) and IBM public records",
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "In 1993, IBM lost $8 billion — the largest annual loss in US corporate history at the time. The board had already decided to break the company into independent units: separate companies for mainframes, PCs, software, and services. IBM had missed the shift from mainframes to personal computing and was being destroyed by focused competitors like Compaq, Dell, Oracle, and Microsoft. When Lou Gerstner arrived from RJR Nabisco — a cookies and tobacco company — the first question every journalist asked was: 'Do you even own a computer?'",
        body_paragraphs: [
          'Gerstner\'s first public statement was deliberately counterintuitive. Reporters pressed him for his strategy to save IBM. His answer: "The last thing IBM needs right now is a vision." He meant it exactly as stated. IBM had spent years on strategies, reorganisations, and mission statements while the business collapsed. The problem was execution, not vision. He needed to see the company working before he could decide what it should become.',
          "The most consequential early decision was to reverse the board's plan to break IBM up. Every advisor — McKinsey, Goldman Sachs, the board itself — recommended the split. Gerstner's instinct was different: IBM's integration was its only remaining competitive advantage. A fragmented IBM was just another set of mid-size technology companies in a market crowded with mid-size technology companies. An integrated IBM could offer something no competitor could: a single company that managed everything from mainframes to services to software for large enterprises.",
          'The cultural diagnosis was as important as the financial one. Gerstner observed that IBM had become insular, arrogant, and focused entirely on internal politics rather than customers. The company had invented Unix, the PC, the relational database, and numerous other technologies — and then watched competitors build businesses on those inventions because IBM was too slow, too political, and too focused on protecting existing revenue. His cultural intervention was blunt: "IBM has been navel-gazing. We are going to face outward." Performance reviews were redesigned around customer outcomes.',
          "By 1994, IBM returned to profitability. By 2001, revenue had grown from $62B to $86B. Gerstner had repositioned IBM from a hardware company — which it could never win as — to a services and consulting company, launching IBM Global Services, which became the world's largest IT services business. He later wrote that the transformation was 70% cultural and 30% financial: 'Until I came to IBM, I probably would have said that culture was just one among several important elements in any organisation\'s make-up. I came to see, in my time at IBM, that culture isn\'t just one aspect of the game — it is the game.'",
        ],
        pull_quote: {
          text: "Culture isn't just one aspect of the game — it is the game.",
          attribution: 'Lou Gerstner',
        },
        decisions: [
          {
            abbreviation: 'NV',
            title: 'No Vision Yet',
            description: "Refused to announce a strategy. Focused on operations and customers for the first year. Earned the right to a vision.",
          },
          {
            abbreviation: 'KT',
            title: 'Keep IBM Together',
            description: "Reversed board's breakup plan. Bet on integration as the only remaining competitive advantage.",
          },
          {
            abbreviation: 'FO',
            title: 'Face Outward',
            description: 'Redesigned performance reviews around customer outcomes. Replaced internal metrics with external ones.',
          },
          {
            abbreviation: 'GS',
            title: 'IBM Global Services',
            description: 'Pivoted from hardware to services. Built the world\'s largest IT consulting business from internal capability.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: 'Apr 1993',
            title: 'Gerstner Arrives',
            description: "IBM lost $8B in 1992 — largest US corporate loss at the time. Board prepared to break company up. Gerstner says 'no vision yet.'",
          },
          {
            step: 2,
            year: '1993–1994',
            title: 'No Breakup, Cut Costs',
            description: 'Reverses board plan. Cuts 35,000 jobs. Reduces costs by $2.8B. Returns IBM to profitability by 1994.',
          },
          {
            step: 3,
            year: '1996',
            title: 'Services Pivot',
            description: 'IBM Global Services launched as standalone unit. Services revenue begins to exceed hardware revenue.',
          },
          {
            step: 4,
            year: '2002',
            title: "Gerstner's Retirement",
            description: 'IBM revenue $86B, up from $62B. The elephant has danced. Gerstner publishes his account.',
          },
        ],
      },
      reflect: {
        prompts: [
          "Gerstner refused to announce a strategy for 18 months. When have you announced a vision before you understood the problem — and what was the cost of that sequence?",
          "Every advisor recommended breaking IBM up. Gerstner disagreed with all of them. How do you maintain a conviction that contradicts expert consensus? What evidence would make you change your mind?",
          "IBM's problem was cultural before it was financial. Where in your organisation do internal politics consume energy that should go toward customers?",
          "Gerstner said culture is not one aspect of the game — it is the game. What does your organisation's culture actually reward, as distinct from what it says it values?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Earn the right to a vision before announcing one.',
            body: "Gerstner's refusal to lead with a strategy wasn't weakness — it was discipline. He understood that a vision built before understanding the problem is just words. Execution clarity comes first.",
          },
          {
            headline: "Contrarian conviction requires first-principles thinking.",
            body: "Everyone said break IBM up. Gerstner asked: 'What is IBM's only remaining advantage?' The answer — integration — led to the opposite of the consensus view. First-principles thinking often contradicts expert opinion.",
          },
          {
            headline: 'Insular cultures destroy companies from within.',
            body: "IBM had invented many of the technologies its competitors were monetising. The problem was not innovation — it was a culture so internally focused it failed to commercialise its own breakthroughs.",
          },
          {
            headline: 'Services pivot is available to most product companies.',
            body: 'IBM turned its internal knowledge into the world\'s largest IT consulting business. Most product companies have deep expertise they could productise as services. The constraint is usually identity, not capability.',
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L030',
    title: "Ray Dalio's Radical Transparency",
    subtitle: 'The hedge fund that records every meeting, grades every employee in public, and became the most successful in history',
    company: 'Bridgewater Associates',
    company_abbreviation: 'BW',
    year_range: '1975–Present',
    module: 'decision_making',
    category: 'Decision Making',
    category_color_key: 'pink',
    read_time_minutes: 10,
    difficulty: 'complex',
    tags: ['Decision Making', 'Transparency', 'Systems Thinking', 'Accountability'],
    source_disclosure: "Ray Dalio's 'Principles' (2017), Bloomberg and WSJ reporting on Bridgewater's internal culture",
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "In 1982, Ray Dalio made a bold prediction that the US economy was heading into a depression. He was publicly confident, told clients, and bet the firm. He was spectacularly wrong. The economy recovered; Dalio lost nearly everything. Bridgewater Associates shrank to two people — himself and one assistant. Dalio later described this humiliation as the most important event in his career: it forced him to ask why he had been so confident in a prediction that was so wrong, and to build systems that would prevent him from making the same mistake again.",
        body_paragraphs: [
          "The core system Dalio built is what he calls \"radical transparency\": every meeting at Bridgewater is recorded. Every employee grades every other employee on a live app during interactions. Performance evaluations are shown to everyone. When Dalio is criticised in a meeting, the recording is available for anyone to review. The stated logic is precise: organisations make better decisions when they have access to all relevant information, and the most important information is often about the quality of the thinking and the character of the people doing it.",
          "The system produces what Dalio calls an \"idea meritocracy\" — where the quality of an argument matters more than the seniority of the person making it. A new analyst who has a better model than the CIO is expected to say so, and the CIO is expected to engage with the argument rather than dismiss it. Dalio developed a \"believability-weighted\" decision system: when deciding how much weight to give an opinion, you assess how often that person has been right on similar questions before. Experience earns weight, but only in proportion to demonstrated accuracy.",
          "The formula \"Pain + Reflection = Progress\" is central to Dalio's framework. He argues that most people try to avoid pain — uncomfortable feedback, public failure, challenging conversations — when pain is precisely the signal that learning is available. He designed Bridgewater to make pain unavoidable by making performance visible, so that avoiding it requires leaving the organisation. Roughly 25–30% of new hires leave in the first 18 months. Those who remain tend to perform at exceptional levels.",
          "The results are difficult to argue with: Bridgewater manages roughly $150 billion and has produced the best risk-adjusted returns of any hedge fund in history. The flagship Pure Alpha fund averaged 11.5% annual returns from 1991 to 2022. Dalio's own net worth exceeds $15 billion. But critics note the culture produces significant psychological stress, that the transparency is asymmetric — more visible for lower-level employees than executives — and that Dalio's departure from day-to-day management in 2017 raised questions about whether the system runs without its architect.",
        ],
        pull_quote: {
          text: 'Pain plus reflection equals progress.',
          attribution: 'Ray Dalio',
        },
        decisions: [
          {
            abbreviation: 'RT',
            title: 'Radical Transparency',
            description: 'Every meeting recorded. Every grade visible. No private corridors of information.',
          },
          {
            abbreviation: 'IM',
            title: 'Idea Meritocracy',
            description: 'Arguments evaluated on quality, not seniority. Junior analysts challenge CIOs with data.',
          },
          {
            abbreviation: 'BW',
            title: 'Believability Weighting',
            description: 'Decision weight assigned based on demonstrated track record on similar questions.',
          },
          {
            abbreviation: 'PR',
            title: 'Pain as Progress',
            description: 'Designed systems to make failure visible rather than avoidable. Pain signals learning opportunity.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '1982',
            title: 'Catastrophic Prediction Failure',
            description: 'Dalio predicts depression; loses everything. Shrinks to 2 people. Begins building decision systems to prevent recurrence.',
          },
          {
            step: 2,
            year: '1990s',
            title: 'Radical Transparency Codified',
            description: 'Recording of meetings, real-time performance grading, and public evaluations become standard practice.',
          },
          {
            step: 3,
            year: '2000s',
            title: 'Pure Alpha Returns',
            description: "Bridgewater's flagship fund averages 11.5% annual returns. Manages $150B+. Transparent culture credited.",
          },
          {
            step: 4,
            year: '2017',
            title: 'Dalio Steps Back',
            description: 'Dalio transitions from day-to-day management. Publishes Principles. System tested without its architect.',
          },
        ],
      },
      reflect: {
        prompts: [
          "Dalio's 1982 humiliation drove his entire system. What failure have you experienced that changed how you make decisions? Have you built a system from it — or just a memory?",
          'Every meeting at Bridgewater is recorded and accessible. What would change in your team\'s conversations if they were fully visible and permanently stored?',
          "Believability weighting assigns more decision influence to people with better track records. How does your organisation weight opinions — by seniority, by confidence, or by demonstrated accuracy?",
          "25–30% of new hires leave in 18 months. Is a high turnover rate a sign of a system that isn't working, or a sign of a selection process that is? How do you tell the difference?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Systems built from failure are more durable than those built from success.',
            body: 'Dalio built Bridgewater\'s decision architecture from a complete collapse. The humiliation of 1982 was more valuable than any success could have been — because it revealed the exact failure mode to design against.',
          },
          {
            headline: 'Information asymmetry degrades decision quality.',
            body: 'Most organisations have important information distributed unevenly — some people know things others don\'t. Dalio\'s radical transparency is a system to eliminate that asymmetry and improve collective judgement.',
          },
          {
            headline: 'Seniority is a proxy for accuracy — not a substitute for it.',
            body: 'Hierarchies weight opinions by rank because rank is correlated with experience. Believability weighting is more precise: it weights by demonstrated accuracy on comparable questions.',
          },
          {
            headline: 'Avoiding pain is the same as avoiding learning.',
            body: 'Organisations designed to protect people from uncomfortable feedback are organisations that compound errors quietly. Making pain visible — through recording, grading, and public post-mortems — accelerates learning at the cost of comfort.',
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L031',
    title: "Google's Project Aristotle",
    subtitle: 'The two-year study that found the secret to great teams — and it had nothing to do with talent',
    company: 'Google',
    company_abbreviation: 'GG',
    year_range: '2012–2016',
    module: 'culture_building',
    category: 'Culture Building',
    category_color_key: 'green',
    read_time_minutes: 8,
    difficulty: 'accessible',
    tags: ['Psychological Safety', 'Team Dynamics', 'Culture', 'Research'],
    source_disclosure: "Google's official Project Aristotle research publication (2016), Julia Rozovsky's public research papers, and NYT Magazine reporting",
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          'In 2012, Google launched a rigorous internal research initiative called Project Aristotle to answer a question every manager intuitively asks: what makes some teams great and others mediocre? Google had access to every possible variable — performance reviews, personality profiles, management assessments, demographic data, tenure, educational background, compensation, and social connections between team members. After two years and hundreds of thousands of data points, the findings surprised everyone, including the researchers.',
        body_paragraphs: [
          "Google's People Analytics team initially hypothesised that the best teams would share traits: the best individual performers, a mix of extroverts and introverts, strong managers, diverse educational backgrounds. None of these predicted team performance. The mix of people on a team had almost no relationship to whether the team performed well. This was a genuinely uncomfortable finding for a company built on the premise that hiring the smartest individuals produces the best outcomes.",
          "The variable that predicted team performance — more than any other, and across every type of team — was psychological safety: the shared belief that team members can speak up, make mistakes, ask questions, and take risks without fear of being embarrassed, punished, or humiliated. Teams with high psychological safety outperformed on every metric: revenue generated, manager ratings, executive evaluations, and self-assessments. Teams with low psychological safety consistently underperformed regardless of the individual talent level of their members.",
          "The research, led by organisational psychologist Julia Rozovsky, built on Amy Edmondson's original psychological safety research from Harvard. What Rozovsky added was scale: Google could test the model across hundreds of teams with the most rigorous data collection infrastructure in the world. The finding replicated perfectly. The researchers described it as 'norms, not people' — team performance is determined by the behavioural rules the team develops, not by who is on the team.",
          "The business response was immediate. Google restructured its leadership development programmes around psychological safety. Team health surveys began measuring it explicitly. Managers were trained to model the behaviours that create it: admitting their own errors, explicitly inviting dissent, rewarding the first person who named an uncomfortable truth. The research was published publicly in 2016 and changed how thousands of companies thought about team design — shifting emphasis from talent acquisition to norm construction.",
        ],
        pull_quote: {
          text: 'Psychological safety was far and away the most important of the five key dynamics we found — it\'s the foundation of a high-performing team.',
          attribution: 'Julia Rozovsky, Google People Analytics',
        },
        decisions: [
          {
            abbreviation: 'PS',
            title: 'Psychological Safety First',
            description: 'Identified as the single most predictive variable. All team development refocused on creating it.',
          },
          {
            abbreviation: 'NP',
            title: 'Norms Over People',
            description: 'Shifted emphasis from who is on the team to how the team behaves.',
          },
          {
            abbreviation: 'MP',
            title: 'Manager Modelling',
            description: 'Trained managers to visibly admit errors and invite dissent. Safety is top-down.',
          },
          {
            abbreviation: 'PR',
            title: 'Public Research',
            description: 'Published full methodology and findings publicly. Industry-wide shift in team design followed.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '2012',
            title: 'Project Aristotle Launched',
            description: "Google's People Analytics team begins two-year study of hundreds of internal teams.",
          },
          {
            step: 2,
            year: '2013–2014',
            title: 'No Simple Answer',
            description: 'Early hypotheses fail. Talent mix, personality type, and tenure show no consistent correlation with performance.',
          },
          {
            step: 3,
            year: '2015',
            title: 'Psychological Safety Identified',
            description: 'Consistent predictor found: teams where members feel safe to speak up consistently outperform. Finding replicates across all team types.',
          },
          {
            step: 4,
            year: '2016',
            title: 'Research Published',
            description: "Julia Rozovsky publishes findings publicly. NYT Magazine covers it. Industry-wide reassessment of team design begins.",
          },
        ],
      },
      reflect: {
        prompts: [
          'On your current team, do people freely admit mistakes, challenge each other\'s ideas, and ask "dumb" questions? If not, what specific behaviour — from you or others — suppresses it?',
          'Google found individual talent was less predictive than team norms. Where have you hired talented people who underperformed because the team norms didn\'t allow them to function well?',
          'Psychological safety is created top-down through manager modelling. When did you last publicly admit a mistake to your team? What signal did that send?',
          'The research found norms, not people, determine team performance. What norms does your team have — explicit or implicit — that you\'d want to change?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Individual talent is less predictive than collective norms.',
            body: "Google's finding overturned the dominant assumption of talent management: that better people produce better outcomes. Better norms produce better outcomes — sometimes dramatically so, even with average individual talent.",
          },
          {
            headline: 'Psychological safety is not comfort — it is the freedom to be honest.',
            body: 'A psychologically safe team is not one where everyone agrees or no one is challenged. It is one where members can surface disagreement, name failure, and ask questions without fearing social consequences.',
          },
          {
            headline: 'Safety is set by the leader\'s behaviour, not their intentions.',
            body: "A manager who says 'I want honest feedback' but visibly reacts badly to criticism has told the team what is actually safe. Psychological safety is built through consistent behavioural evidence, not stated policy.",
          },
          {
            headline: 'Publish what you learn, even if it challenges your assumptions.',
            body: "Google's willingness to publish findings that undermined their own talent-first philosophy — and share them publicly — produced more long-term credibility and industry influence than any marketing could.",
          },
        ],
      },
    },
  },

  // ─── L032–L036: NEW CASE STUDIES ────────────────────────────────────────────

  {
    lesson_id: 'L032',
    title: "Herb Kelleher's Southwest Revolution",
    subtitle: 'How a lawyer with no airline experience built the most consistently profitable carrier in history — by treating employees first',
    company: 'Southwest Airlines',
    company_abbreviation: 'SW',
    year_range: '1967–2001',
    module: 'servant_leadership',
    category: 'Servant Leadership',
    category_color_key: 'teal',
    read_time_minutes: 9,
    difficulty: 'accessible',
    tags: ['Servant Leadership', 'Culture', 'Employee First', 'Profitability'],
    source_disclosure: "Herb Kelleher's public interviews, James L. Heskett's Harvard case studies on Southwest Airlines, and Kelleher's own published essays",
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "In 1967, Herb Kelleher and Rollin King sketched a business plan for a Texas intrastate airline on a cocktail napkin. For three years, the established airlines used legal injunctions to prevent Southwest from flying — they understood the threat. When Southwest finally launched in 1971, it flew three planes between Dallas, Houston, and San Antonio. By the time of Kelleher's retirement in 2001, Southwest had not posted a single annual loss in 29 consecutive years — an unmatched record in one of the world's most volatile and capital-intensive industries.",
        body_paragraphs: [
          "Kelleher's central operating belief was a deliberate inversion of conventional management wisdom: put employees first, customers second, shareholders third. He argued — and Southwest's numbers repeatedly validated — that employees who feel genuinely valued treat customers well without being instructed to, and customers who are treated well return, which produces the shareholder returns that come last. The sequence mattered. Companies that put shareholders first and employees last, Kelleher observed, tended to produce mediocre results on all three metrics.",
          "The operational expression of this philosophy was a culture of ownership and informality. Kelleher famously knew thousands of Southwest employees by name. He worked the ramp, served drinks on flights, and showed up at maintenance hangars at 2am on Christmas Eve to help crew load bags — not as a PR exercise, but as a regular practice. Employees who felt seen and known by their CEO were empirically more likely to go beyond their job descriptions. Southwest's ground crew routinely achieved 20-minute gate turnarounds when the industry average was 45 minutes — not because of superior equipment, but because of discretionary effort from people who cared.",
          "Southwest was also the first major airline to implement profit sharing for all employees, making every worker a partial owner with a financial stake in turnaround times and fuel efficiency. This was not a motivational programme — it was a structural alignment of incentives. A Southwest ramp agent who gets the plane off the gate 15 minutes early earns more money. The system made every employee a de facto operations manager.",
          "The hiring philosophy was as distinctive as the culture. Southwest famously hired for attitude and trained for skill — the inverse of most corporations. Kelleher's reasoning: you can teach someone to load bags or process tickets, but you cannot teach someone to genuinely enjoy people. The interview process included observing how candidates treated the administrative staff who greeted them — rude to the receptionist meant immediate disqualification, regardless of technical credentials.",
        ],
        pull_quote: {
          text: "We've never had layoffs. We could have made more money if we'd furloughed people. But we don't do that. And we didn't, because it's not the right thing to do.",
          attribution: 'Herb Kelleher',
        },
        decisions: [
          {
            abbreviation: 'EF',
            title: 'Employees First',
            description: 'Deliberately inverted the conventional hierarchy: employees first, customers second, shareholders third.',
          },
          {
            abbreviation: 'PS',
            title: 'Profit Sharing',
            description: 'First major airline to share profits with all employees. Every worker a partial owner.',
          },
          {
            abbreviation: 'HA',
            title: 'Hire for Attitude',
            description: 'Hired attitude, trained skill. Disqualified candidates who were rude to reception staff.',
          },
          {
            abbreviation: 'NL',
            title: 'No Layoffs Policy',
            description: 'Never laid off employees in 29 years, including recessions. Voluntary unpaid leave instead.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '1967–1971',
            title: 'Three Years of Legal Battles',
            description: "Established airlines injunct Southwest to prevent launch. Kelleher fights to the Texas Supreme Court and wins.",
          },
          {
            step: 2,
            year: '1971',
            title: 'Southwest Launches',
            description: 'Three planes, three Texas cities. Low fares, 10-minute boarding, flight attendants in hot pants. Competitors laugh.',
          },
          {
            step: 3,
            year: '1973',
            title: 'First Annual Profit',
            description: 'Southwest becomes profitable. Profit sharing for all employees introduced. No layoffs ever follow.',
          },
          {
            step: 4,
            year: '2001',
            title: "Kelleher's Retirement",
            description: '29 consecutive profitable years. 33,000 employees. Post-9/11 Southwest is one of only two US airlines not to seek federal aid.',
          },
        ],
      },
      reflect: {
        prompts: [
          "Kelleher's sequencing was deliberate: employees first, customers second, shareholders third. What is the actual sequence in your organisation — and is it producing the results you want?",
          'Southwest hired for attitude and trained for skill. Which roles in your team require innate attitude that cannot be trained? Where are you hiring for credentials when you should be hiring for character?',
          'Kelleher showed up to help load bags at 2am on Christmas Eve — not once, but regularly. What symbolic acts of service do you perform for your team? What signals do those acts send?',
          'Southwest had a no-layoff policy across 29 years including recessions. What long-term psychological contract does your team have with you? What would it cost to break it?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Employee experience and shareholder returns are not in tension — the sequence is the strategy.',
            body: "Kelleher's consistent proof was that putting employees first did not sacrifice profitability — it was the cause of it. The companies that treat employees as a cost centre discover this the hard way.",
          },
          {
            headline: 'Structural incentive alignment is more durable than culture programmes.',
            body: 'Profit sharing made every Southwest employee a genuine co-owner of the outcome. No motivational poster achieves what a direct financial stake achieves.',
          },
          {
            headline: 'A no-layoff policy creates a psychological contract that unlocks discretionary effort.',
            body: "Employees who believe their job is secure will invest in the company's long-term success. Employees who expect to be let go at the first downturn rationally withhold commitment.",
          },
          {
            headline: 'The leader who does the work alongside the team sends a signal that no speech can replicate.',
            body: "Kelleher loading bags at 2am was not symbolic — it was information. It told every Southwest employee that the CEO understood their job and respected it. That knowledge changes how people behave.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L033',
    title: "Aaron Feuerstein's Malden Mills Decision",
    subtitle: "The factory owner who kept paying 3,000 employees after his mill burned down — and why he said he had no choice",
    company: 'Malden Mills',
    company_abbreviation: 'MM',
    year_range: '1995–1997',
    module: 'servant_leadership',
    category: 'Servant Leadership',
    category_color_key: 'teal',
    read_time_minutes: 8,
    difficulty: 'accessible',
    tags: ['Servant Leadership', 'Ethics', 'Community', 'Loyalty'],
    source_disclosure: "Aaron Feuerstein's public interviews, Congressional testimony (1996), and Boston Globe reporting on the Malden Mills fire and recovery",
    is_new: true,
    is_locked: true,
    unlock_after_count: 7,
    progress: 0,
    status: 'locked',
    tabs: {
      overview: {
        situation:
          "On December 11, 1995 — Aaron Feuerstein's 70th birthday — the Malden Mills factory in Lawrence, Massachusetts burned to the ground. Three buildings destroyed. Thirty-three workers injured. Malden Mills was the sole manufacturer of Polartec fleece, employed 3,000 people in one of New England's poorest cities, and had revenues of approximately $400 million per year. Every business adviser told Feuerstein the same thing: take the insurance money, close the factory, and retire or move production offshore where labour was cheaper. He was 70 years old. Nobody would have blamed him.",
        body_paragraphs: [
          'Within days, Feuerstein announced he would rebuild the factory on the same site, keep all 3,000 employees on full pay with full benefits during reconstruction, and have the first production lines running within 90 days. He kept all three promises. The decision cost him approximately $25 million in payroll and benefits for workers who were producing nothing — money that came out of the insurance settlement that was supposed to fund rebuilding.',
          "Feuerstein's explanation was not strategic — it was moral. He quoted the Talmud and described the obligation of an employer to the community that had worked for his family for three generations. He said the workers of Lawrence had given Malden Mills everything; abandoning them to collect insurance money was not an option he was willing to consider. He later told Congress: 'I could have taken the insurance money and walked away. Instead, I chose to rebuild. I owe it to the community of Lawrence. They have been loyal to me, and I will be loyal to them.'",
          "The business consequences were real and mixed. Productivity from the returning workforce was extraordinary — workers voluntarily increased output by 25% in the weeks after they returned, and quality defects dropped to near zero. Customers who heard the story placed orders specifically to support Malden Mills. The company received more goodwill coverage than any advertising campaign could have purchased. President Clinton invited Feuerstein to the 1996 State of the Union address as a symbol of ethical American capitalism.",
          "But the story does not end in triumph. The rebuild cost more than planned, and Malden Mills filed for bankruptcy in 2001 — partly due to construction costs, partly due to competition from cheaper synthetics. Feuerstein spent years fighting to retain control and keep the factory open. He eventually lost ownership. The factory continued to operate under new owners. The employees kept their jobs — for years longer than they would have had Feuerstein taken the insurance money and left. His decision was not strategically optimal in the narrow financial sense. But his employees, the city of Lawrence, and the business ethics community remember it as one of the most significant acts of industrial servant leadership in American history.",
        ],
        pull_quote: {
          text: 'I have a responsibility to the worker, both blue-collar and white-collar. I have an equal responsibility to the community.',
          attribution: 'Aaron Feuerstein',
        },
        decisions: [
          {
            abbreviation: 'RB',
            title: 'Rebuild on Site',
            description: 'Chose to rebuild in Lawrence rather than relocate offshore. Rejected the economically rational exit.',
          },
          {
            abbreviation: 'FP',
            title: 'Full Pay During Rebuild',
            description: "Kept all 3,000 workers on full salary and benefits for months while producing nothing.",
          },
          {
            abbreviation: 'CC',
            title: 'Community Commitment',
            description: 'Framed the decision in terms of obligation — three generations of reciprocal loyalty.',
          },
          {
            abbreviation: '90',
            title: '90-Day Promise',
            description: 'Publicly committed to having lines running in 90 days. Met the deadline.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: 'Dec 11, 1995',
            title: 'Fire Destroys the Factory',
            description: "Feuerstein's 70th birthday. Three buildings gone. Every adviser recommends taking the insurance and closing.",
          },
          {
            step: 2,
            year: 'Dec 1995',
            title: 'Feuerstein Announces Rebuild',
            description: 'Full pay, full benefits, same site, 90-day production target. Statement goes national within days.',
          },
          {
            step: 3,
            year: '1996',
            title: 'Factory Reopens; Clinton Invitation',
            description: 'Production lines restart. Workers return with 25% productivity increase. Clinton features Feuerstein at State of the Union.',
          },
          {
            step: 4,
            year: '2001–2007',
            title: 'Bankruptcy and Legacy',
            description: 'Rebuild costs and competition drive bankruptcy in 2001. Feuerstein loses ownership but factory continues operating under new owners.',
          },
        ],
      },
      reflect: {
        prompts: [
          "Feuerstein said 'I had no choice' — but he clearly did. When have you made a decision that felt morally compelled even when the economically rational option was clearly available?",
          'His workers returned and voluntarily increased productivity by 25% with near-zero defects. What is the relationship between how you treat people in a crisis and how they perform after it?',
          "The story doesn't end in triumph — Malden Mills filed for bankruptcy. Does the moral quality of a decision depend on whether it succeeds financially? How do you evaluate decisions that were right but didn't work out?",
          'Feuerstein drew on his obligation to three generations of workers and a community. What obligations do you have to people who have given your organisation years of their lives?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Servant leadership sometimes costs you.',
            body: "Feuerstein's decision was ethically clear and financially costly. The $25M in payroll during reconstruction contributed to the bankruptcy that followed. Servant leadership is not a strategy for maximising returns — it is a commitment that precedes calculation.",
          },
          {
            headline: "Loyalty is reciprocal — and employees know when it isn't.",
            body: "The 25% productivity increase when workers returned was not managed or incentivised — it was voluntary. People who believe their leader will stand by them in a crisis reciprocate with discretionary effort you could never buy.",
          },
          {
            headline: 'Moral framing is not a weakness in a crisis.',
            body: "Feuerstein didn't frame his decision as strategy or PR. He framed it as obligation. That clarity — knowing exactly why you are doing something — produces decisions you can stand behind regardless of outcome.",
          },
          {
            headline: 'The long-term memory of how a leader behaves in extremity outlasts financial results.',
            body: "Malden Mills filed for bankruptcy. Feuerstein lost control of the company he had run for decades. His decision is still taught in business schools and remembered in Lawrence thirty years later. The financial record fades; the ethical record endures.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L034',
    title: "OpenAI's 72-Hour Board Crisis",
    subtitle: 'How the most important AI company in the world fired and rehired its CEO in 72 hours — and what it revealed about governance',
    company: 'OpenAI',
    company_abbreviation: 'OA',
    year_range: '2023',
    module: 'crisis_leadership',
    category: 'Crisis Leadership',
    category_color_key: 'blue',
    read_time_minutes: 10,
    difficulty: 'complex',
    tags: ['Governance', 'Board Dynamics', 'Crisis', 'Stakeholder Management'],
    source_disclosure: "Public reporting from The Verge, The New York Times, Bloomberg, and OpenAI's official statements (November 2023)",
    is_new: true,
    is_locked: true,
    unlock_after_count: 9,
    progress: 0,
    status: 'locked',
    tabs: {
      overview: {
        situation:
          "On Friday November 17, 2023, OpenAI's board fired CEO Sam Altman with a four-sentence statement accusing him of not being 'consistently candid' with the board. No specific wrongdoing was named. Within 48 hours, over 500 of OpenAI's 700 employees had signed a letter threatening to quit and follow Altman to Microsoft unless the board resigned and reinstated him. Microsoft — which had invested $13 billion in OpenAI — offered Altman a new AI division to run. By Sunday evening, the board had capitulated. Altman returned as CEO. The entire board that fired him was replaced.",
        body_paragraphs: [
          "The crisis exposed a structural fault line at the heart of OpenAI's governance. The company was incorporated as a nonprofit with a 'capped profit' subsidiary — a structure designed to ensure the board's fiduciary duty ran to humanity rather than to shareholders. In practice, this meant a six-person board with majority nonprofit directors controlled a company valued at $90 billion, whose 700 employees had compensation tied to a continued relationship with a CEO the board had just fired. The tension between mission-first governance and commercial reality had been building for years. The firing detonated it.",
          "The board's tactical errors were significant. They notified Altman on a video call with no prior indication. They told no one — not Microsoft, not OpenAI's largest investors, not its president Greg Brockman (who resigned within hours). They issued a statement so vague it invited speculation about something far worse than what they actually alleged. And they had no plan for what happened next: who would run the company, how Microsoft would react, or how employees would respond.",
          "The employee letter was the decisive factor. When 500 of 700 employees threaten to walk out of a technology company, the company ceases to exist. Unlike a factory, the assets of an AI research firm are in the heads of its researchers — and those researchers had made their position clear. The board, which had fired Altman to protect the mission of OpenAI, was now the threat to OpenAI's continued existence.",
          "Altman's return was not a vindication of everything he had done — the board's original concerns about candour and governance may have had merit. What the crisis demonstrated was that in a talent-dense, mission-driven organisation, a CEO who holds the confidence of the team is nearly unfirable by a board that does not. The governance structure that was designed to keep AI development safe had become a single point of failure — a small group of people who could unilaterally destabilise one of the most consequential technology projects in history.",
        ],
        pull_quote: {
          text: "I love OpenAI, and everything I've done has been in service of its mission. I still believe that, with the right governance, OpenAI is the best path to safe AGI.",
          attribution: "Sam Altman, statement upon return as CEO",
        },
        decisions: [
          {
            abbreviation: 'FI',
            title: 'Board Fires Altman',
            description: 'Four-sentence statement, no named wrongdoing, no stakeholder communication. Board had no succession plan.',
          },
          {
            abbreviation: 'EL',
            title: 'Employee Letter',
            description: '500 of 700 employees threaten to quit. Human capital makes the board\'s decision unenforceable.',
          },
          {
            abbreviation: 'MS',
            title: 'Microsoft Offer',
            description: 'Nadella offers Altman a new AI division within hours. Competitive pressure forces board timelines.',
          },
          {
            abbreviation: 'RE',
            title: 'Reinstatement and Reset',
            description: 'Altman reinstated Sunday evening. Full board replaced. Governance structure subsequently overhauled.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: 'Fri Nov 17, 2023',
            title: 'Board Fires Altman',
            description: 'Friday afternoon video call. No prior warning. Four-sentence public statement. Greg Brockman resigns within hours.',
          },
          {
            step: 2,
            year: 'Sat Nov 18',
            title: 'Employee Revolt Begins',
            description: 'Investor pressure mounts. Reports of back-channel negotiations. Microsoft publicly welcomes Altman.',
          },
          {
            step: 3,
            year: 'Sun Nov 19',
            title: '500 Employees Sign Letter',
            description: 'Majority of staff threaten to quit unless board resigns and reinstates Altman. Letter goes public.',
          },
          {
            step: 4,
            year: 'Mon Nov 20, 2023',
            title: 'Altman Reinstated',
            description: 'Altman returns as CEO. Firing board members replaced. Governance structure review announced.',
          },
        ],
      },
      reflect: {
        prompts: [
          "The board had legitimate governance authority — and used it catastrophically. What is the difference between having the right to make a decision and having the wisdom to make it well?",
          "OpenAI's nonprofit governance structure was designed to protect against commercial capture. It nearly destroyed the company. Where in your organisation do governance structures designed to protect a mission create their own risks?",
          "500 employees made the board's decision unenforceable. Who in your organisation has the informal power to block or reverse formal decisions — and do you know who they are?",
          "The board had no plan for what happened after the firing. What major decisions have you made without a clear model of what happens next — and what would planning for Day 2 have changed?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Governance authority without stakeholder legitimacy is unenforceable.',
            body: "The board had legal authority to fire Altman. It did not have the human capital to make the decision stick. In talent-dense organisations, formal authority matters less than the confidence of the people doing the work.",
          },
          {
            headline: 'A communication plan is not optional for decisions of this magnitude.',
            body: "The board told no one — not Microsoft, not investors, not the president of the company. In a crisis, the information vacuum you create fills immediately with speculation. Stakeholder communication must precede or accompany the decision.",
          },
          {
            headline: 'Governance structures designed to prevent one failure mode can create another.',
            body: "OpenAI's nonprofit board was a safeguard against commercial capture. It became a single point of failure that could unilaterally destabilise the company without accountability to those most affected.",
          },
          {
            headline: 'Vague accusations invite the worst interpretations.',
            body: "'Not consistently candid' left 700 employees, $13B of Microsoft investment, and the global AI community to imagine what had actually happened. Specificity — even uncomfortable specificity — would have produced a different 48 hours.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L035',
    title: "Tobi Lütke's Remote-First Bet",
    subtitle: 'How Shopify declared itself a remote-first company in 2020 — and rebuilt its entire operating model around asynchronous work',
    company: 'Shopify',
    company_abbreviation: 'SH',
    year_range: '2020–Present',
    module: 'scaling_teams',
    category: 'Scaling Teams',
    category_color_key: 'orange',
    read_time_minutes: 9,
    difficulty: 'medium',
    tags: ['Remote Work', 'Scaling', 'Async Communication', 'Org Design'],
    source_disclosure: "Tobi Lütke's public tweets and interviews, Shopify's internal memos published publicly, and Wired/Bloomberg reporting on Shopify's remote transition",
    is_new: true,
    is_locked: true,
    unlock_after_count: 11,
    progress: 0,
    status: 'locked',
    tabs: {
      overview: {
        situation:
          "In May 2020, as most companies were framing remote work as a temporary pandemic measure, Shopify CEO Tobi Lütke announced that Shopify would be 'digital by default' permanently — not after the pandemic, not as a hybrid experiment, but as the core operating model of a company with 7,000 employees and $2.9 billion in annual revenue. Lütke's framing was deliberately ambitious: 'Office centricity is over.' He sold Shopify's headquarters building. Then he rebuilt the company's operating model from first principles.",
        body_paragraphs: [
          "Lütke's diagnosis was that most companies doing 'remote work' were actually doing 'office work from home' — replicating office rituals (synchronous meetings, real-time messaging, status updates) in a medium where those rituals were inefficient and exhausting. The transition Shopify undertook was more fundamental: redesign how decisions are made, how information flows, and how trust is established when people share neither a building nor a time zone.",
          "The first principle was writing. Shopify made written communication the default for anything consequential: decisions, proposals, project updates, and disagreements. The logic was not that writing is inherently better than talking, but that written communication is asynchronous (readable at any time), persistent (searchable forever), and inclusive (accessible to someone in Singapore as easily as someone in Ottawa). A meeting is information that disappears when it ends. A document is infrastructure.",
          "The second principle was explicit trust architecture. In an office, trust is built through presence — colleagues see each other working, share coffee, read each other's body language. Remote work removes all of these signals. Shopify replaced them with deliberate practices: public documentation of what each team was working on, structured check-ins that were outcome-focused rather than activity-focused, and a bias toward over-communication on decisions. The instinct to have a quick meeting to align was replaced with the discipline to write a short document that aligned without requiring synchronous presence.",
          "The third principle was calendar hygiene. Lütke publicly deleted all recurring meetings company-wide in 2023 — a reset that forced every team to evaluate whether each meeting was actually necessary. The move generated significant media coverage. The internal reasoning was simpler: recurring meetings accumulate like debt, each one plausible when created, collectively consuming the time that deep work requires. The reset forced intentionality about which synchronous interactions were worth the cost.",
        ],
        pull_quote: {
          text: "Office-centricity is over. The future is working from wherever you do your best work.",
          attribution: 'Tobi Lütke, Shopify CEO',
        },
        decisions: [
          {
            abbreviation: 'DD',
            title: 'Digital by Default',
            description: 'Permanent remote-first declaration in May 2020. Sold headquarters. Not hybrid — restructured.',
          },
          {
            abbreviation: 'WF',
            title: 'Writing First',
            description: 'Written communication default for all consequential work. Documents as infrastructure, not meeting minutes.',
          },
          {
            abbreviation: 'TA',
            title: 'Trust Architecture',
            description: 'Replaced presence-based trust with outcome documentation and structured async check-ins.',
          },
          {
            abbreviation: 'CM',
            title: 'Calendar Meeting Delete',
            description: 'Deleted all recurring meetings company-wide in 2023. Forced intentionality about synchronous time.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: 'May 2020',
            title: '"Digital by Default" Announced',
            description: "Lütke declares permanent remote-first. Sells headquarters. Industry watches to see if it's sustainable.",
          },
          {
            step: 2,
            year: '2020–2021',
            title: 'Operating Model Rebuilt',
            description: 'Writing-first practices, async decision protocols, and trust architecture codified. Hiring goes global.',
          },
          {
            step: 3,
            year: '2022',
            title: 'Shopify Layoffs',
            description: '1,000 employees let go after pandemic e-commerce boom normalises. Remote model separates from layoff narrative.',
          },
          {
            step: 4,
            year: '2023',
            title: 'Meeting Deletion Event',
            description: 'All recurring meetings deleted company-wide. Policy requires 3+ person justification for new recurring meetings.',
          },
        ],
      },
      reflect: {
        prompts: [
          "Lütke's insight was that most 'remote work' is just office work in a different room. What office rituals is your team replicating remotely that should be redesigned rather than migrated?",
          "Shopify made writing the default for consequential communication. What decisions in your team currently happen in conversations that leave no persistent record — and what is lost when those conversations end?",
          'Recurring meetings accumulate like debt. Audit the recurring meetings you attend: how many would you re-create if you had to justify each one from scratch today?',
          "Remote work removes presence-based trust signals. How do you build trust with people you rarely or never see in person? What practices are you using consciously versus accidentally?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Remote-first and remote-compatible are different operating models.',
            body: "Most companies did remote-compatible work during the pandemic — office processes migrated to video calls. Remote-first means redesigning information flow, decision-making, and trust-building for an async-first world.",
          },
          {
            headline: 'Written communication is infrastructure, not documentation.',
            body: "A document that captures a decision is reusable, searchable, accessible across time zones, and onboards new employees automatically. A meeting that makes the same decision leaves nothing behind.",
          },
          {
            headline: 'Presence-based trust must be deliberately replaced, not just removed.',
            body: "Remote work doesn't eliminate the need for trust — it removes the ambient signals that build it. Leaders who don't replace those signals explicitly end up with teams that don't trust each other and can't explain why.",
          },
          {
            headline: 'Recurring meetings are the compound interest of wasted time.',
            body: 'Each new recurring meeting seems reasonable. Collectively, they consume the uninterrupted time that makes deep work possible. The right cadence for a meeting is the one that would survive being deleted and deliberately recreated.',
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L036',
    title: "The Wright Brothers' Systematic Breakthrough",
    subtitle: 'How two bicycle mechanics solved a problem that ruined wealthy engineers — by inventing a scientific method before inventing a plane',
    company: 'Wright Brothers / Kitty Hawk',
    company_abbreviation: 'WB',
    year_range: '1899–1903',
    module: 'innovation',
    category: 'Innovation',
    category_color_key: 'purple',
    read_time_minutes: 9,
    difficulty: 'medium',
    tags: ['Innovation', 'Experimentation', 'First Principles', 'Iteration'],
    source_disclosure: "David McCullough's 'The Wright Brothers' (2015), Smithsonian Institution archives, and Orville Wright's published diaries",
    is_new: true,
    is_locked: true,
    unlock_after_count: 6,
    progress: 0,
    status: 'locked',
    tabs: {
      overview: {
        situation:
          "In 1899, the problem of powered human flight had attracted the best-resourced, most credentialed engineers in the world. Samuel Langley, the Secretary of the Smithsonian Institution, had a $50,000 US War Department grant and a team of professional engineers. Hiram Maxim, inventor of the machine gun, had invested £20,000 of his own money. Otto Lilienthal, the German aviation pioneer, had made over 2,000 glider flights before dying in a crash in 1896. Against this field, Wilbur and Orville Wright entered with no formal engineering qualifications, no university degrees, no outside funding, and a bicycle repair business in Dayton, Ohio.",
        body_paragraphs: [
          "The reason the Wright Brothers succeeded while better-resourced competitors failed is not mysterious in retrospect — it was methodological. Langley and the other well-funded teams were trying to build powered aircraft and test them at full scale. When a design failed, the failure was catastrophic, expensive, and months away from the next test. The Wright Brothers did the opposite: they separated the problem into components, tested each component systematically at small scale, and built knowledge before building aircraft.",
          "Their first insight was that the control problem was more important than the power problem. Every prior approach assumed that a stable aircraft with enough power would fly. The Wright Brothers observed that stability was the enemy of controllability — a stable aircraft that encountered a gust of wind would be pushed off course with no way to recover. They studied birds and concluded that control, not stability, was the design priority. This led to their invention of wing warping: a system for twisting the wing tips to create differential lift and maintain control across all three axes.",
          "Their second insight was that existing aeronautical data was wrong. When their 1900 and 1901 gliders underperformed according to Lilienthal's published lift tables, they didn't assume their execution was at fault. They assumed the data was wrong — and built a wind tunnel to generate their own. The wind tunnel experiments of 1901 produced the most accurate aeronautical measurements in existence and gave the Wright Brothers a data advantage over every competitor in the world. No grant had funded the wind tunnel. They built it from scratch in their bicycle shop for almost nothing.",
          "On December 17, 1903, Orville flew 120 feet in 12 seconds at Kitty Hawk. Langley's $50,000 government-funded Aerodrome had crashed into the Potomac River nine days earlier on its second failed launch attempt. The Wright Brothers had spent approximately $1,000 in total. The systematic testing approach, the willingness to question existing data, and the separation of the problem into testable components had produced the most consequential engineering breakthrough of the 20th century.",
        ],
        pull_quote: {
          text: "It is possible to fly without motors, but not without knowledge and skill.",
          attribution: 'Wilbur Wright',
        },
        decisions: [
          {
            abbreviation: 'CP',
            title: 'Control Before Power',
            description: 'Identified control as the primary unsolved problem. Competitors focused on power. Wright Brothers focused on control.',
          },
          {
            abbreviation: 'WW',
            title: 'Wing Warping',
            description: 'Invented 3-axis control system from bird observation. Became the basis of all subsequent aircraft design.',
          },
          {
            abbreviation: 'WT',
            title: 'Wind Tunnel',
            description: 'Distrusted published lift data. Built their own wind tunnel. Generated the most accurate aeronautical data in the world.',
          },
          {
            abbreviation: 'SM',
            title: 'Small-Scale Testing',
            description: 'Tested components at small scale before full builds. Hundreds of glider flights before powered attempt.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '1899–1900',
            title: 'Kite and Glider Tests',
            description: "First kite tests of wing-warping concept. Kitty Hawk chosen for reliable winds. Control problem prioritised over power.",
          },
          {
            step: 2,
            year: '1901',
            title: 'Wind Tunnel Built',
            description: "Gliders underperform Lilienthal's published tables. Wright Brothers build wind tunnel to generate own lift data. Data advantage established.",
          },
          {
            step: 3,
            year: '1902',
            title: 'Glider Control Solved',
            description: '1000+ glider flights. Three-axis control system working reliably. Ready to add power.',
          },
          {
            step: 4,
            year: 'Dec 17, 1903',
            title: 'Kitty Hawk: First Flight',
            description: '120 feet, 12 seconds. Four flights that day, longest 852 feet. Langley\'s $50,000 machine had crashed 9 days earlier.',
          },
        ],
      },
      reflect: {
        prompts: [
          "The Wright Brothers distrusted Lilienthal's data and built their own instruments to check it. When did you last question a foundational assumption in your field that everyone else accepts as given?",
          "Langley had 50x the budget and failed. The Wright Brothers had a systematic method and succeeded. Where in your work are you substituting resources for rigour?",
          "They separated the control problem from the power problem and solved them sequentially. What complex problem in your organisation are you treating as one thing that should actually be decomposed?",
          "They made over 1,000 glider flights before adding power. How much low-cost iteration do you do before making expensive commitments — and where do you move to the expensive test too soon?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Method beats resources when the method is right.',
            body: "Langley had 50 times the budget and failed. The Wright Brothers had a systematic decomposition of the problem and succeeded. In innovation, the quality of the approach matters more than the scale of the investment.",
          },
          {
            headline: 'Question existing data before trusting it.',
            body: "The Wright Brothers found that standard aeronautical tables were wrong and built their own instruments to generate accurate data. The willingness to verify rather than accept is a competitive advantage most people leave unused.",
          },
          {
            headline: 'Decompose hard problems before attempting to solve them whole.',
            body: "Control was a different problem from power. Solving control first made the power problem straightforward. Most hard problems that resist solution are actually clusters of simpler problems that need to be separated before they can be addressed.",
          },
          {
            headline: 'Cheap iterations are the prerequisite for expensive commitments.',
            body: "A thousand glider flights cost almost nothing. A failed powered aircraft attempt is expensive and slow. The discipline of maximising learning at minimum cost before scaling investment is the core discipline of systematic innovation.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L040',
    title: "Indra Nooyi's Letters to Parents",
    subtitle: "The PepsiCo CEO who wrote to the parents of her top executives — and what it revealed about gratitude as a leadership practice",
    company: 'PepsiCo',
    company_abbreviation: 'PC',
    year_range: '2006–2018',
    module: 'emotional_intelligence',
    category: 'Emotional Intelligence',
    category_color_key: 'grey',
    read_time_minutes: 8,
    difficulty: 'accessible',
    tags: ['Empathy', 'Gratitude', 'Purpose', 'Leadership Style'],
    source_disclosure: "Indra Nooyi's 'My Life in Full' (2021), her 2008 speech at Columbia Business School, and interviews with Fortune and Harvard Business Review",
    is_new: true,
    is_locked: true,
    unlock_after_count: 10,
    progress: 0,
    status: 'locked',
    tabs: {
      overview: {
        situation:
          "Indra Nooyi served as CEO of PepsiCo from 2006 to 2018, leading a company with $65 billion in revenue and 260,000 employees. During those twelve years, she delivered compound annual revenue growth of 80%, grew earnings per share by 162%, and transformed a company known for carbonated drinks into a diversified food and beverage portfolio. But the leadership practice that generated the most lasting discussion was not a strategic decision — it was a letter-writing campaign she ran personally, every year, to the parents of her senior leaders.",
        body_paragraphs: [
          "The practice began after a visit home to India, where Nooyi's mother told her that a neighbour had come to congratulate the family when Nooyi was named to PepsiCo's board of directors. Her mother's response crystallised something for Nooyi: the parent, not the executive, was the person who had made the career possible — through years of sacrifice, encouragement, and belief. The institution that benefited from that investment had never once acknowledged it.",
          "Nooyi began writing personal letters to the parents of her approximately 400 direct and indirect reports — not to their HR files, not to their performance records, but to their parents. The letters were substantive: she described the specific contributions their son or daughter was making to PepsiCo, the qualities of character she had observed, and her gratitude for how they had raised someone who brought those qualities to work. She received handwritten responses from parents in dozens of countries. Several told her it was the most meaningful letter they had ever received about their child.",
          "The executive response was equally striking. Leaders who received news of the letters from their parents described a shift in how they thought about their work. The letter made visible a connection that professional culture routinely severs: the link between the person at the boardroom table and the family that had formed them. It reminded executives that they were not interchangeable units of corporate productivity but people with histories, and that the company saw them that way.",
          "Nooyi's broader leadership framework — which she called 'Performance with Purpose' — extended the same logic to customers, communities, and the planet. She made significant investments in healthier product lines, reduced PepsiCo's environmental footprint, and built women's leadership programmes across developing markets. Critics noted that PepsiCo still sold enormous quantities of sugary drinks and processed food. But the framework reflected a consistent instinct: that the long-term interests of the business were inseparable from the long-term interests of the people and systems it depended on.",
        ],
        pull_quote: {
          text: "My biggest regret is not the decisions I made at PepsiCo. My biggest regret is that I didn't tell people enough how much I appreciated them.",
          attribution: 'Indra Nooyi',
        },
        decisions: [
          {
            abbreviation: 'LP',
            title: 'Letters to Parents',
            description: 'Personal annual letters to parents of 400 senior leaders. Acknowledged the family behind the executive.',
          },
          {
            abbreviation: 'PP',
            title: 'Performance with Purpose',
            description: 'Strategic framework linking business performance to human, environmental, and community outcomes.',
          },
          {
            abbreviation: 'PD',
            title: 'Portfolio Diversification',
            description: 'Shifted PepsiCo toward healthier products. Revenue from "good for you" lines grew substantially.',
          },
          {
            abbreviation: 'WL',
            title: "Women's Leadership",
            description: "Invested in women's leadership pipeline globally. Board and senior team gender balance improved.",
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '2006',
            title: 'Nooyi Becomes CEO',
            description: 'First woman CEO of PepsiCo. Announces Performance with Purpose as the strategic framework.',
          },
          {
            step: 2,
            year: '2008',
            title: 'Letter Campaign Begins',
            description: 'Begins writing annual personal letters to parents of senior leaders. Practice becomes widely discussed.',
          },
          {
            step: 3,
            year: '2006–2018',
            title: 'Revenue Grows 80%',
            description: 'Compound growth through portfolio diversification and international expansion. EPS up 162%.',
          },
          {
            step: 4,
            year: '2018',
            title: 'Nooyi Steps Down',
            description: "Retires after 12 years. Harvard Business Review names her one of the world's best-performing CEOs.",
          },
        ],
      },
      reflect: {
        prompts: [
          "Nooyi saw the family as a partner in the executive's career — PepsiCo had benefited from an investment the family had made. Who else has invested in the people on your team whose contribution your organisation has never acknowledged?",
          "The letters made executives feel seen as whole people, not just professionals. How much do you know about the people you lead beyond their work outputs — and does it matter to you?",
          "She described her biggest regret as not telling people enough that she appreciated them. What unspoken appreciation do you carry for people on your team that they have no way of knowing?",
          "'Performance with Purpose' linked business results to broader human outcomes. Where do the long-term interests of your business and the long-term interests of the people and communities it serves converge?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'Gratitude expressed to the right person is more powerful than gratitude expressed to the recipient.',
            body: "Nooyi's letters worked because they closed a loop the executives had never expected to be closed. Telling someone's parent what they contribute to the world activates something that a performance review never can.",
          },
          {
            headline: "People work better when the institution sees them as whole people, not just role occupants.",
            body: "The letter made visible the human being behind the title. Leaders who invest in understanding their team members as people — not just performers — unlock a form of loyalty and discretionary effort that compensation alone cannot buy.",
          },
          {
            headline: 'Gratitude is not soft — it is information.',
            body: "Telling a parent specifically what their child contributes, in detail, is not sentimentality. It is specific, honest acknowledgement of value. The specificity is what makes it credible and meaningful.",
          },
          {
            headline: 'Purpose frameworks are credible only when they survive commercial pressure.',
            body: "Performance with Purpose was tested every quarter by analysts asking whether the healthier portfolio investments were worth the margin trade-off. Nooyi held the framework consistently. That consistency is what made it a culture rather than a slogan.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L041',
    title: "Tony Hsieh's Zappos Culture Experiment",
    subtitle: 'The e-commerce CEO who paid new hires to quit, bet the company on culture, and then tried to abolish management entirely',
    company: 'Zappos',
    company_abbreviation: 'ZP',
    year_range: '1999–2020',
    module: 'culture_building',
    category: 'Culture Building',
    category_color_key: 'green',
    read_time_minutes: 10,
    difficulty: 'complex',
    tags: ['Culture', 'Holacracy', 'Employee Experience', 'Self-Management'],
    source_disclosure: "Tony Hsieh's 'Delivering Happiness' (2010), Zappos's published Culture Book, and reporting from Forbes, The Atlantic, and Bloomberg Businessweek on the holacracy experiment",
    is_new: true,
    is_locked: true,
    unlock_after_count: 8,
    progress: 0,
    status: 'locked',
    tabs: {
      overview: {
        situation:
          "In 1999, Tony Hsieh invested $500,000 in Zappos — an online shoe retailer nobody believed in, in a category everyone said would never work online (customers needed to try shoes before buying them). In 2009, Amazon acquired Zappos for $1.2 billion. The acquisition price was not for the shoe inventory or the technology — it was for the culture. Amazon, one of the most operationally excellent companies in the world, wanted what Zappos had built: a customer service culture so distinctive that customers called the company just to talk, and employees voluntarily stayed beyond their shifts because they didn't want to leave.",
        body_paragraphs: [
          "The foundational culture mechanism was the '$2,000 offer' — formally called 'The Offer.' After completing new hire training, every Zappos employee was offered $2,000 to quit immediately, no questions asked. The logic was precise: an employee who takes money to leave is someone who was going to leave anyway, or someone who doesn't genuinely want to be there. Paying them to leave early is cheaper than the hidden cost of a disengaged employee staying. The people who decline the offer have actively chosen to be at Zappos — and that choice, publicly made, changes how they relate to the work.",
          "The customer service culture was built on deliberate anti-efficiency choices. Zappos did not measure call handle time — the metric every other call centre optimised for. The longest call in Zappos history lasted over ten hours, and Hsieh publicised it as something to be proud of. Representatives were encouraged to go off-script, build genuine relationships with callers, and solve whatever problem the customer actually had — even if that meant sending them to a competitor. The bet was that customers who experienced genuine human service would return and tell others, at a cost far lower than any advertising campaign.",
          "In 2013, Hsieh made a more radical bet. He announced that Zappos would adopt holacracy — a management system that abolished traditional hierarchy entirely, replacing managers and job titles with self-organising 'circles' of autonomous workers. The stated goal was to create an organisation that could adapt as fluidly as a living organism rather than a military hierarchy. The transition was the most ambitious corporate organisational experiment of its decade.",
          "The holacracy experiment produced serious turbulence. In 2015, Hsieh gave all employees an ultimatum: fully commit to holacracy or take a severance package and leave. Approximately 18% of the company — 210 people — chose to leave. Productivity and morale declined during the transition. Long-serving employees struggled to function without role clarity. The experiment was never fully declared a success or a failure before Hsieh stepped back from day-to-day operations. He died in November 2020 at age 46. The company he sold to Amazon is still studied as one of the most deliberate culture experiments in corporate history — both the parts that worked and the parts that didn't.",
        ],
        pull_quote: {
          text: "Your culture is your brand.",
          attribution: 'Tony Hsieh',
        },
        decisions: [
          {
            abbreviation: 'TO',
            title: 'The Offer',
            description: "$2,000 to quit after training. Filtered out disengaged employees before they could contaminate culture.",
          },
          {
            abbreviation: 'NH',
            title: 'No Handle Time',
            description: 'Abolished call handle time metric. Longest call: 10+ hours. Service depth over throughput efficiency.',
          },
          {
            abbreviation: 'HL',
            title: 'Holacracy Adoption',
            description: 'Abolished management hierarchy. Self-organising circles. 18% of employees chose severance over adoption.',
          },
          {
            abbreviation: 'CB',
            title: 'Culture as Product',
            description: 'Published annual Culture Book written by employees. Culture became the marketing and the hiring filter.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '1999–2003',
            title: 'Zappos Founded and Pivots',
            description: 'Online shoe retail dismissed as unworkable. Hsieh invests. Company nearly bankrupt before pivoting to own inventory and overnight shipping.',
          },
          {
            step: 2,
            year: '2004–2008',
            title: 'Culture Codified',
            description: 'The Offer, no handle time, annual Culture Book all established. Zappos becomes famous for customer service before e-commerce.',
          },
          {
            step: 3,
            year: '2009',
            title: 'Amazon Acquires for $1.2B',
            description: "Amazon acquires Zappos. Hsieh negotiates autonomy as condition. Culture preserved post-acquisition.",
          },
          {
            step: 4,
            year: '2013–2015',
            title: 'Holacracy Experiment',
            description: 'Hierarchy abolished. 18% leave rather than adopt. Productivity disruption. Experiment inconclusive.',
          },
        ],
      },
      reflect: {
        prompts: [
          "Zappos paid people to leave rather than keep disengaged employees who would corrode culture. What is the equivalent of The Offer in your context — and what would it reveal about who genuinely wants to be there?",
          "They abolished call handle time and trusted representatives to serve customers without a clock. What efficiency metric in your organisation might be producing the opposite of the behaviour you want?",
          "Holacracy created serious turbulence and 18% voluntary departure. When you change how people work fundamentally, what obligation do you have to the people who can't adapt?",
          "The Amazon acquisition valued culture at $1.2B. How would you price the culture your team has built — and what would you do differently if you treated culture as a balance sheet asset?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: "Paying people to leave is cheaper than keeping people who don't want to be there.",
            body: "The $2,000 offer was not generosity — it was an investment in culture purity. The hidden cost of one disengaged employee who stays and poisons the culture of ten others is orders of magnitude higher than the cost of paying them to go.",
          },
          {
            headline: 'Efficiency metrics shape behaviour with more force than any culture statement.',
            body: "Abolishing call handle time did not just change how calls were measured — it changed what representatives believed they were there to do. Metrics are the most powerful culture tool available, and most companies ignore this.",
          },
          {
            headline: 'Radical organisational experiments require explicit exit provisions for people who cannot adapt.',
            body: "The holacracy transition failed to adequately support employees who had built careers around structures that were abolished. Transformation without transition support produces the opposite of buy-in.",
          },
          {
            headline: 'Culture is the product that makes every other product possible.',
            body: "Zappos sold shoes. Amazon bought culture. The $1.2B price for a shoe retailer was a market signal that the culture — its customer service reputation, its employee experience, its brand — was worth more than the business it housed.",
          },
        ],
      },
    },
  },

  {
    lesson_id: 'L042',
    title: "Amazon's Working Backwards",
    subtitle: 'How Jeff Bezos banned PowerPoint, mandated six-page memos, and built a decision-making culture that scales',
    company: 'Amazon',
    company_abbreviation: 'AZ',
    year_range: '2004–Present',
    module: 'decision_making',
    category: 'Decision Making',
    category_color_key: 'pink',
    read_time_minutes: 9,
    difficulty: 'medium',
    tags: ['Decision Making', 'Communication', 'Innovation Process', 'Org Design'],
    source_disclosure: "Jeff Bezos's shareholder letters (2004–2021), Colin Bryar and Bill Carr's 'Working Backwards' (2021), and Amazon's published leadership principles",
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "In 2004, Jeff Bezos banned PowerPoint from Amazon executive meetings. The announcement generated industry ridicule — PowerPoint was the universal medium of corporate communication, and a company telling its senior leaders they couldn't use it seemed eccentric at best. Bezos's reasoning was systematic: a PowerPoint presentation allows the presenter to hide behind bullet points, to elide the connections between ideas, and to perform confidence in a plan that has not been fully thought through. A six-page narrative memo cannot hide those things. If you cannot write the argument out in complete sentences, you do not fully understand it.",
        body_paragraphs: [
          "The six-page narrative memo became one of the most distinctive elements of Amazon's operating culture. Every major proposal — a new product, a significant investment, a strategic change — was written as a six-page document before any meeting could be scheduled to discuss it. Meetings began with 20–30 minutes of silent reading. No one presented. Everyone read. Discussion began only after everyone in the room had read the full document. The practice eliminated the information asymmetry of presentations, where the presenter controls what is emphasised and when — and forced every participant to engage with the full argument before responding.",
          "The Press Release/FAQ method — the operational expression of 'working backwards' — took this discipline further. Before building any new product or service, Amazon teams were required to write the press release that would announce it at launch, and the FAQ that would answer every customer objection. The press release had to be written for the customer, not for the company. It had to explain, in plain language, what the product did, why the customer would care, and why it was better than alternatives. If the team could not write a compelling press release for the product before building it, they were unlikely to be able to explain why a customer should care about it after building it.",
          "The Amazon Leadership Principles — 16 explicitly stated principles that governed hiring, promotion, and decision-making — were the complementary structure. 'Customer Obsession' was always first. 'Bias for Action' explicitly acknowledged that speed mattered: 'Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.' 'Are Right, A Lot' was a principle about how leaders should form opinions — not through authority, but through strong mental models and the willingness to change positions when new information arrived. The principles were not aspirational values — they were the basis on which people were hired and fired.",
          "The combined effect of these practices — six-page memos, silent reading meetings, PR/FAQ processes, and explicit leadership principles — was a decision-making culture that could scale across a company growing to over a million employees without losing consistency. New managers at Amazon in Singapore made decisions using the same frameworks as senior leaders in Seattle. The culture was encoded in practices that were learnable and repeatable, not dependent on proximity to the founders.",
        ],
        pull_quote: {
          text: "PowerPoint-style presentations somehow give permission to gloss over ideas, flatten out any sense of relative importance, and ignore the dependencies of ideas.",
          attribution: 'Jeff Bezos, 2004 shareholder letter',
        },
        decisions: [
          {
            abbreviation: 'NP',
            title: 'No PowerPoint',
            description: 'Banned from executive meetings in 2004. Replaced by six-page narrative memos. Writing forces thinking.',
          },
          {
            abbreviation: 'SR',
            title: 'Silent Reading',
            description: 'Meetings begin with 20–30 min of silent reading. No presentations. Full document before discussion.',
          },
          {
            abbreviation: 'PR',
            title: 'Press Release First',
            description: "Write the launch press release before building the product. If you can't explain it to customers, don't build it.",
          },
          {
            abbreviation: 'LP',
            title: 'Leadership Principles',
            description: '16 explicit principles used for hiring and firing. Encoded the culture in practices, not posters.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '2004',
            title: 'PowerPoint Banned',
            description: 'Bezos bans PowerPoint from senior leadership meetings. Industry mocks it. Six-page memo becomes the format.',
          },
          {
            step: 2,
            year: '2004–2006',
            title: 'PR/FAQ Process Codified',
            description: 'Working backwards from the customer press release becomes the product development entry point.',
          },
          {
            step: 3,
            year: '2015',
            title: 'Leadership Principles Published',
            description: 'Amazon publishes 14 (later 16) leadership principles. Used explicitly in hiring, reviews, and decisions.',
          },
          {
            step: 4,
            year: '2021',
            title: "'Working Backwards' Published",
            description: "Former Amazon VPs Colin Bryar and Bill Carr publish the full methodology. Practices adopted globally.",
          },
        ],
      },
      reflect: {
        prompts: [
          "Bezos said PowerPoint gives permission to hide behind bullets and avoid connecting ideas. What communication format in your organisation allows people to perform understanding rather than demonstrate it?",
          "The silent reading meeting removes the presenter's control over what is emphasised. What would change in your meetings if everyone came having read the full document rather than listened to a summary?",
          "Write a press release for your current most important initiative — as if it has launched and you are explaining it to a customer. What does this exercise reveal about how clear your thinking actually is?",
          "Amazon's principles are used to hire and fire — not as values on a wall. What are the actual principles your organisation uses to make people decisions, stated or unstated?",
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'The medium of communication shapes the quality of thinking it produces.',
            body: "Bullet points allow incomplete logic to hide between items. Narrative prose requires every idea to connect to the next. The format of your thinking documents is a design choice with real consequences for decision quality.",
          },
          {
            headline: 'Starting from the customer outcome reverses the failure mode of most product development.',
            body: "Most products are built and then described to customers. The PR/FAQ approach requires the description first — which surfaces the gaps between what you are building and what a customer would actually value, before the investment is made.",
          },
          {
            headline: 'Silent reading equalises the meeting before discussion begins.',
            body: "A presentation gives the presenter enormous control over what is attended to. Silent reading means every participant engages with the same document at the same time, with no filter. The discussion that follows is richer because it starts from a shared understanding.",
          },
          {
            headline: 'Culture scales through practices, not posters.',
            body: "Amazon's leadership principles work because they are used — in hiring, in performance reviews, in daily decisions. Principles that are not operationalised in this way become decoration. The test of a cultural value is whether it has ever caused a painful decision.",
          },
        ],
      },
    },
  },
];
