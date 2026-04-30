// ─── APEX Mock Data ───────────────────────────────────────────────────────────
// Drives all screens during UI/UX testing. Replace with backend calls in Phase 3.

import type { Lesson, UserStats } from '../types/lesson';

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
];

export const MOCK_NOTIFICATION = {
  notification_id: 'N001',
  type: 'new_lesson' as const,
  title: 'New case study available',
  body: 'The Netflix Culture Bet is ready. 9 min read.',
  lesson_id: 'L001',
  sent_at: new Date().toISOString(),
};
