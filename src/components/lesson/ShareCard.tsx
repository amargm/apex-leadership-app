// ─── Share Card — Case Study Summary Image ────────────────────────────────────
// Renders a beautifully formatted card view that gets captured as PNG for sharing.

import React, { forwardRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { Lesson } from '../../types/lesson';

interface Props {
  lesson: Lesson;
}

const ShareCard = forwardRef<View, Props>(({ lesson }, ref) => {
  const topTakeaways = lesson.tabs.takeaways.items.slice(0, 3);
  const topDecisions = lesson.tabs.overview.decisions.slice(0, 4);
  const timelineEvents = lesson.tabs.timeline.events.slice(0, 4);

  return (
    <View ref={ref} style={styles.card} collapsable={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerAccent} />
        <View style={styles.headerContent}>
          <Text style={styles.company}>{lesson.company.toUpperCase()}</Text>
          <Text style={styles.title}>{lesson.title}</Text>
          <Text style={styles.subtitle}>{lesson.subtitle}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.metaText}>{lesson.year_range}</Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.metaText}>{lesson.read_time_minutes} min read</Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.metaText}>{lesson.difficulty}</Text>
          </View>
        </View>
      </View>

      {/* Situation */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>THE SITUATION</Text>
        <Text style={styles.situationText} numberOfLines={4}>
          {lesson.tabs.overview.situation}
        </Text>
      </View>

      {/* Key Decisions */}
      {topDecisions.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>KEY DECISIONS</Text>
          <View style={styles.decisionsGrid}>
            {topDecisions.map((d, i) => (
              <View key={i} style={styles.decisionItem}>
                <Text style={styles.decisionAbbr}>{d.abbreviation}</Text>
                <Text style={styles.decisionTitle}>{d.title}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Timeline */}
      {timelineEvents.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>TIMELINE</Text>
          {timelineEvents.map((e, i) => (
            <View key={i} style={styles.timelineItem}>
              <Text style={styles.timelineYear}>{e.year}</Text>
              <Text style={styles.timelineTitle}>{e.title}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Takeaways */}
      {topTakeaways.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>KEY TAKEAWAYS</Text>
          {topTakeaways.map((t, i) => (
            <View key={i} style={styles.takeawayItem}>
              <Text style={styles.takeawayIndex}>{String(i + 1).padStart(2, '0')}</Text>
              <Text style={styles.takeawayText}>{t.headline}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Pull Quote */}
      {lesson.tabs.overview.pull_quote.text ? (
        <View style={styles.quoteSection}>
          <View style={styles.quoteBar} />
          <View style={styles.quoteContent}>
            <Text style={styles.quoteText}>"{lesson.tabs.overview.pull_quote.text}"</Text>
            <Text style={styles.quoteAttrib}>— {lesson.tabs.overview.pull_quote.attribution}</Text>
          </View>
        </View>
      ) : null}

      {/* Watermark Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLine} />
        <View style={styles.footerContent}>
          <Text style={styles.footerBrand}>
            APE<Text style={styles.footerBrandAccent}>X</Text>
          </Text>
          <Text style={styles.footerTagline}>Learn to lead from those who did.</Text>
        </View>
      </View>
    </View>
  );
});

ShareCard.displayName = 'ShareCard';
export default ShareCard;

const styles = StyleSheet.create({
  card: {
    width: 1080,
    backgroundColor: '#050505',
    padding: 60,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 40,
    position: 'relative',
  },
  headerAccent: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: '#C8F04D',
  },
  headerContent: {
    paddingLeft: 24,
  },
  company: {
    fontFamily: 'DMMono_300Light',
    fontSize: 18,
    color: '#666666',
    letterSpacing: 3,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 42,
    color: '#EDEAE5',
    lineHeight: 50,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Lora_400Regular',
    fontSize: 20,
    color: '#999999',
    lineHeight: 28,
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontFamily: 'DMMono_300Light',
    fontSize: 16,
    color: '#666666',
    letterSpacing: 1,
  },
  metaDot: {
    fontFamily: 'DMMono_300Light',
    fontSize: 16,
    color: '#333333',
    marginHorizontal: 10,
  },

  // Sections
  section: {
    marginBottom: 36,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    paddingTop: 20,
  },
  sectionLabel: {
    fontFamily: 'DMMono_400Regular',
    fontSize: 14,
    color: '#C8F04D',
    letterSpacing: 2.5,
    marginBottom: 16,
  },
  situationText: {
    fontFamily: 'Lora_400Regular',
    fontSize: 18,
    color: '#A0A0A0',
    lineHeight: 28,
  },

  // Decisions
  decisionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  decisionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  decisionAbbr: {
    fontFamily: 'DMMono_500Medium',
    fontSize: 14,
    color: '#C8F04D',
    letterSpacing: 1,
  },
  decisionTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: '#EDEAE5',
  },

  // Timeline
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 16,
    marginBottom: 10,
  },
  timelineYear: {
    fontFamily: 'DMMono_300Light',
    fontSize: 14,
    color: '#666666',
    letterSpacing: 1,
    width: 90,
  },
  timelineTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 17,
    color: '#EDEAE5',
    flex: 1,
  },

  // Takeaways
  takeawayItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
    marginBottom: 14,
  },
  takeawayIndex: {
    fontFamily: 'DMMono_300Light',
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  takeawayText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 18,
    color: '#EDEAE5',
    lineHeight: 26,
    flex: 1,
  },

  // Quote
  quoteSection: {
    flexDirection: 'row',
    marginBottom: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  quoteBar: {
    width: 3,
    backgroundColor: 'rgba(200, 240, 77, 0.3)',
    marginRight: 20,
  },
  quoteContent: {
    flex: 1,
  },
  quoteText: {
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 20,
    color: '#A0A0A0',
    lineHeight: 30,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  quoteAttrib: {
    fontFamily: 'DMMono_300Light',
    fontSize: 14,
    color: '#666666',
  },

  // Footer
  footer: {
    marginTop: 20,
  },
  footerLine: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginBottom: 20,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerBrand: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 32,
    color: '#EDEAE5',
    letterSpacing: 5,
  },
  footerBrandAccent: {
    color: '#C8F04D',
  },
  footerTagline: {
    fontFamily: 'DMMono_300Light',
    fontSize: 14,
    color: '#666666',
  },
});
