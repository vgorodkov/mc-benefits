import { StyleSheet } from 'react-native';
import React from 'react';
import { Text } from '@components/common/Text';
import { spacing } from '@constants/layout';

export const PivotText = ({
  label,
  labelColor = 'black',
}: {
  label: string;
  labelColor?: string;
}) => {
  return (
    <Text variant="outline-sb" style={[styles.benefitPivotText, { color: labelColor }]}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  benefitPivotText: {
    position: 'absolute',
    top: spacing.semidefault,
    left: spacing.semidefault,
    zIndex: 100,
  },
});
