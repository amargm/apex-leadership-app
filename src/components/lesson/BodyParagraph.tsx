// ─── Body Paragraph — Instrumental ────────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FontFamily } from '../../theme';

interface Props {
  text: string;
}

export default function BodyParagraph({ text }: Props) {
  return <Text style={styles.body}>{text}</Text>;
}

const styles = StyleSheet.create({
  body: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 15,
    lineHeight: 15 * 1.85,
    color: '#777777',
    marginBottom: 14,
    textAlign: 'left',
  },
});
