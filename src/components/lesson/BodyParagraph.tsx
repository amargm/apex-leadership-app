// ─── Body Paragraph — Instrumental ────────────────────────────────────────────

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FontFamily } from '../../theme';
import { useReadingScale } from '../../hooks/useReadingScale';

interface Props {
  text: string;
}

export default function BodyParagraph({ text }: Props) {
  const { fontSize, lineHeight } = useReadingScale();
  return (
    <Text style={[styles.body, { fontSize: fontSize(15), lineHeight: lineHeight(15, 1.85) }]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: FontFamily.loraRegular,
    fontSize: 15,
    lineHeight: 15 * 1.85,
    color: '#999999',
    marginBottom: 14,
    textAlign: 'left',
  },
});
