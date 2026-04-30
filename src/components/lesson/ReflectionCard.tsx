// ─── Reflection Card — Instrumental ───────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Edit3 } from 'lucide-react-native';
import { Colors, FontFamily } from '../../theme';

interface Props {
  number: number;
  prompt: string;
  onAddNote?: (prompt: string) => void;
}

export default function ReflectionCard({ number, prompt, onAddNote }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.accentRail} />
      <View style={styles.header}>
        <Text style={styles.number}>0{number}</Text>
        {onAddNote && (
          <TouchableOpacity
            style={styles.noteBtn}
            onPress={() => onAddNote(prompt)}
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Edit3 size={12} color={Colors.accent} strokeWidth={1.5} />
            <Text style={styles.noteBtnText}>NOTE</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.headerDivider} />
      <View style={styles.body}>
        <Text style={styles.prompt}>{prompt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: Colors.borderDefault,
    marginBottom: 14,
    position: 'relative',
    overflow: 'hidden',
  },
  accentRail: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: Colors.accent,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
  },
  headerDivider: {
    height: 1,
    backgroundColor: Colors.borderDefault,
  },
  number: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 9,
    color: '#666666',
    letterSpacing: 0.06 * 9,
  },
  body: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  prompt: {
    fontFamily: FontFamily.dmSerifDisplayRegular,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: Colors.textPrimary,
  },
  noteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.borderDefault,
  },
  noteBtnText: {
    fontFamily: FontFamily.dmMonoLight,
    fontSize: 8,
    color: Colors.accent,
    letterSpacing: 0.8,
  },
});
