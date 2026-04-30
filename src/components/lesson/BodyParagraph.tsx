// ─── Body Paragraph ───────────────────────────────────────────────────────────
// Lora body text block. Spec: Section 9.

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors, FontFamily } from '../../theme';

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
    lineHeight: 15 * 1.75,
    color: Colors.textSecondary,
    marginBottom: 14,
    textAlign: 'left',
  },
});
