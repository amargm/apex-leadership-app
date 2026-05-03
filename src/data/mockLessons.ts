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
        situation: 'Placeholder — unlock after completing 3 lessons.',
        body_paragraphs: [],
        pull_quote: { text: '', attribution: '' },
        decisions: [],
      },
      timeline: { events: [] },
      reflect: { prompts: [] },
      takeaways: { items: [] },
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
        situation: 'Unlock after completing 5 case studies.',
        body_paragraphs: [],
        pull_quote: { text: '', attribution: '' },
        decisions: [],
      },
      timeline: { events: [] },
      reflect: { prompts: [] },
      takeaways: { items: [] },
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
        situation: 'Unlock after completing 8 case studies.',
        body_paragraphs: [],
        pull_quote: { text: '', attribution: '' },
        decisions: [],
      },
      timeline: { events: [] },
      reflect: { prompts: [] },
      takeaways: { items: [] },
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
    lesson_id: 'L023',
    title: "Andy Grove's Paranoid Survival",
    subtitle: "How Intel's CEO killed his own founding product — and saved the company from irrelevance",
    company: 'Intel',
    company_abbreviation: 'IN',
    year_range: '1985–1998',
    module: 'decision_making',
    category: 'Decision Making',
    category_color_key: 'pink',
    read_time_minutes: 11,
    difficulty: 'complex',
    tags: ['Strategy', 'Pivots', 'Mental Models', 'Decisive Action'],
    source_disclosure: 'Publicly disclosed via Andy Grove\'s "Only the Paranoid Survive," Intel annual reports, and HBS case studies',
    is_new: true,
    is_locked: false,
    unlock_after_count: 0,
    progress: 0,
    status: 'new',
    tabs: {
      overview: {
        situation:
          "In 1985, Intel was a memory chip company — it had invented DRAM, and memory was its identity. But Japanese manufacturers were undercutting prices by 10% with higher quality. Intel was losing $173 million per year. The board was paralysed. Everyone knew the memory business was dying, but no one could say it, because memory was Intel. Andy Grove posed the question that changed the company's history.",
        body_paragraphs: [
          'Grove walked into Gordon Moore\'s office. "If we got kicked out and the board brought in a new CEO, what do you think he would do?" Moore answered: "He would get us out of memories." Grove said: "Why shouldn\'t you and I walk out the door, come back in, and do it ourselves?" That "revolving door" mental model became Grove\'s signature decision-making tool: strip away emotional attachment and sunk costs, and ask what a rational outsider would do.',
          "The decision to exit memory and go all-in on microprocessors was not popular. Engineers who built careers in memory felt abandoned. Middle managers resisted. But Grove was ruthless: shut down plants, redirect R&D, lay off thousands. When questioned, he was direct: \"Memory is not our future. Microprocessors are. We need to mourn this and move on.\" Organisational clarity in crisis matters more than comfort.",
          'Grove\'s framework centred on "strategic inflection points" — moments where fundamentals change so profoundly that old rules stop working. He argued these are nearly invisible from inside because those closest to the old business have the strongest attachment. The signal comes from "Cassandras" — junior employees and field salespeople who see the shift first but are ignored by leadership.',
          'The microprocessor bet paid off spectacularly. The Pentium processor, launched in 1993, became the most recognised chip brand. "Intel Inside" turned a commodity component into a consumer brand. By 1998, revenue exceeded $25 billion. Grove was named TIME Person of the Year in 1997.',
        ],
        pull_quote: {
          text: 'There is at least one point in the history of any company when you have to change dramatically to rise to the next level of performance. Miss that moment, and you start to decline.',
          attribution: 'Andy Grove',
        },
        decisions: [
          {
            abbreviation: 'RD',
            title: 'Revolving Door Test',
            description: '"If a new CEO walked in, what would he do?" Stripped emotional attachment from strategy.',
          },
          {
            abbreviation: 'EM',
            title: 'Exit Memory',
            description: 'Shut down founding product line. Redirected all resources to microprocessors. Accepted organisational grief.',
          },
          {
            abbreviation: 'SI',
            title: 'Strategic Inflection Points',
            description: 'Codified framework for recognising fundamental shifts. Listened to "Cassandras" at the edges.',
          },
          {
            abbreviation: 'IB',
            title: 'Intel Inside',
            description: 'Turned commodity hardware into a consumer brand. Marketing at the component level — unprecedented.',
          },
        ],
      },
      timeline: {
        events: [
          {
            step: 1,
            year: '1985',
            title: 'The Revolving Door Conversation',
            description: "Grove and Moore agree to exit memory. Intel's founding product abandoned.",
          },
          {
            step: 2,
            year: '1986–1988',
            title: 'Painful Transition',
            description: 'Memory plants closed. Thousands laid off. R&D reallocated to 386 and 486 processors.',
          },
          {
            step: 3,
            year: '1993',
            title: 'Pentium Launch',
            description: "Intel's microprocessor becomes the most recognised chip brand. 'Intel Inside' campaign begins.",
          },
          {
            step: 4,
            year: '1998',
            title: 'Paranoid Survival',
            description: 'Revenue exceeds $25B. Grove publishes "Only the Paranoid Survive." Named TIME Person of the Year.',
          },
        ],
      },
      reflect: {
        prompts: [
          'Apply the revolving door test to your current situation: if a new leader walked in tomorrow, what would they obviously do that you\'re avoiding?',
          "Grove's \"Cassandras\" are junior people who see shifts first. Who in your organisation is raising uncomfortable signals that leadership is ignoring?",
          "Intel's identity was tied to memory chips. What is your team's identity tied to — and could that identity be preventing you from seeing a necessary pivot?",
          'Grove said organisational clarity matters more than comfort. Where are you prioritising comfort over clarity in a situation that demands directness?',
        ],
      },
      takeaways: {
        items: [
          {
            headline: 'The revolving door test strips emotional bias from strategy.',
            body: 'Asking "what would a new CEO do?" removes sunk costs, identity attachment, and political baggage. It reveals what everyone already knows but no one will say.',
          },
          {
            headline: 'Strategic inflection points are invisible from inside.',
            body: 'The people closest to the threatened business are the least likely to see the shift. Listen to edge signals — junior employees, field staff, and customers — before the data confirms what they already feel.',
          },
          {
            headline: 'Identity can be a strategic liability.',
            body: "\"We are a memory company\" nearly killed Intel. When your identity prevents you from seeing reality, that identity has become a constraint, not a strength.",
          },
          {
            headline: 'Clarity is kindness in a crisis.',
            body: "Grove's directness — \"memory is not our future\" — was painful but allowed people to mourn and move on. Ambiguity prolongs suffering.",
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
];
