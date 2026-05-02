'use no memo';
// ─── APEX Daily Thought Widget ────────────────────────────────────────────────
// Matches the app's brutalist design. Rotates daily based on day-of-year.

import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';

// ─── Inline quote logic (widgets can't use hooks or async) ────────────────────
interface DailyQuote {
  text: string;
  attribution: string;
}

const QUOTES: DailyQuote[] = [
  { text: 'The task of leadership is not to put greatness into people, but to elicit it, for the greatness is there already.', attribution: 'John Buchan' },
  { text: 'A leader is best when people barely know he exists. When his work is done, they will say: we did it ourselves.', attribution: 'Lao Tzu' },
  { text: 'The greatest leader is not the one who does the greatest things, but the one who gets people to do the greatest things.', attribution: 'Ronald Reagan' },
  { text: 'Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.', attribution: 'Jack Welch' },
  { text: 'Leadership is the capacity to translate vision into reality.', attribution: 'Warren Bennis' },
  { text: 'You manage things; you lead people.', attribution: 'Grace Hopper' },
  { text: 'The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.', attribution: 'John Maxwell' },
  { text: 'Innovation distinguishes between a leader and a follower.', attribution: 'Steve Jobs' },
  { text: 'It is better to lead from behind and to put others in front, especially when you celebrate victory.', attribution: 'Nelson Mandela' },
  { text: 'Management is doing things right; leadership is doing the right things.', attribution: 'Peter Drucker' },
  { text: 'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.', attribution: 'John Quincy Adams' },
  { text: 'The growth and development of people is the highest calling of leadership.', attribution: 'Harvey Firestone' },
  { text: 'Courage is what it takes to stand up and speak. Courage is also what it takes to sit down and listen.', attribution: 'Winston Churchill' },
  { text: 'People buy into the leader before they buy into the vision.', attribution: 'John Maxwell' },
  { text: 'A genuine leader is not a searcher for consensus but a molder of consensus.', attribution: 'Martin Luther King Jr.' },
  { text: 'Leadership is not about being in charge. It is about taking care of those in your charge.', attribution: 'Simon Sinek' },
  { text: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.", attribution: 'Abraham Lincoln' },
  { text: 'Do not follow where the path may lead. Go instead where there is no path and leave a trail.', attribution: 'Ralph Waldo Emerson' },
  { text: 'The function of leadership is to produce more leaders, not more followers.', attribution: 'Ralph Nader' },
  { text: 'What you do has far greater impact than what you say.', attribution: 'Stephen Covey' },
  { text: 'Average leaders raise the bar on themselves; good leaders raise the bar for others; great leaders inspire others to raise their own bar.', attribution: 'Orrin Woodward' },
  { text: 'Effective leadership is not about making speeches or being liked; leadership is defined by results not attributes.', attribution: 'Peter Drucker' },
  { text: 'Become the kind of leader that people would follow voluntarily, even if you had no title or position.', attribution: 'Brian Tracy' },
  { text: 'No man will make a great leader who wants to do it all himself or get all the credit for doing it.', attribution: 'Andrew Carnegie' },
  { text: 'The leader has to be practical and a realist yet must talk the language of the visionary and the idealist.', attribution: 'Eric Hoffer' },
  { text: 'Leaders must be close enough to relate to others, but far enough ahead to motivate them.', attribution: 'John Maxwell' },
  { text: 'Great leaders are almost always great simplifiers.', attribution: 'Colin Powell' },
  { text: "A leader takes people where they want to go. A great leader takes people where they don't necessarily want to go, but ought to be.", attribution: 'Rosalynn Carter' },
  { text: 'One of the tests of leadership is the ability to recognise a problem before it becomes an emergency.', attribution: 'Arnold Glasow' },
  { text: "The very essence of leadership is that you have to have vision. You can't blow an uncertain trumpet.", attribution: 'Theodore Hesburgh' },
  { text: 'He who has never learned to obey cannot be a good commander.', attribution: 'Aristotle' },
];

function getDailyQuote(): DailyQuote {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return QUOTES[dayOfYear % QUOTES.length];
}

// ─── Widget Component ─────────────────────────────────────────────────────────
export function DailyThoughtWidget() {
  const quote = getDailyQuote();

  return (
    <FlexWidget
      style={{
        height: 'match_parent',
        width: 'match_parent',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#050505',
        borderRadius: 0,
      }}
      clickAction="OPEN_APP"
      clickActionData={{ screen: 'Learn' }}
    >
      {/* Accent line */}
      <FlexWidget
        style={{
          width: 24,
          height: 2,
          backgroundColor: '#C8F04D',
          marginBottom: 12,
        }}
      />

      {/* Label */}
      <TextWidget
        text="DAILY THOUGHT"
        style={{
          fontSize: 9,
          fontFamily: 'DMMono_500Medium',
          color: '#707070',
          marginBottom: 10,
        }}
      />

      {/* Quote */}
      <TextWidget
        text={`"${quote.text}"`}
        style={{
          fontSize: 13,
          fontFamily: 'Lora_400Regular',
          color: '#EDEAE5',
          marginBottom: 10,
        }}
        maxLines={4}
      />

      {/* Attribution */}
      <TextWidget
        text={`— ${quote.attribution}`}
        style={{
          fontSize: 9,
          fontFamily: 'DMMono_300Light',
          color: '#999999',
        }}
      />

      {/* APEX branding — bottom right */}
      <FlexWidget
        style={{
          width: 'match_parent',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 8,
        }}
      >
        <TextWidget
          text="APEX"
          style={{
            fontSize: 8,
            fontFamily: 'DMMono_300Light',
            color: '#333333',
          }}
        />
      </FlexWidget>
    </FlexWidget>
  );
}
