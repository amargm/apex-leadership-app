// ─── APEX Mock Data ───────────────────────────────────────────────────────────
// Drives all screens during UI/UX testing. Replace with backend calls in Phase 3.

import type { Lesson, UserStats, ModuleKey } from '../types/lesson';

export const MOCK_USER_STATS: UserStats = {
  day_streak: 7,
  cases_completed: 4,
  time_this_week_minutes: 83,
};

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
            description: 'Netflix lays off 130 of 120 staff — a third of the company — after losing DVD orders.',
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
    category_color_key: 'blue',
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
    category_color_key: 'grey',
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
    category_color_key: 'green',
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
    category_color_key: 'green',
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
    category_color_key: 'orange',
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
    category_color_key: 'orange',
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
    category_color_key: 'green',
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
    category_color_key: 'orange',
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
    category_color_key: 'blue',
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
    category_color_key: 'green',
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
];

export const MOCK_NOTIFICATION = {
  notification_id: 'N001',
  type: 'new_lesson' as const,
  title: 'New case study available',
  body: 'The Netflix Culture Bet is ready. 9 min read.',
  lesson_id: 'L001',
  sent_at: new Date().toISOString(),
};
