import { View } from 'react-native';
import React from 'react';
import { Text } from '@components/common/Text';
import { colors } from '@constants/colors';
import { spacing } from '@constants/layout';

interface BottomTextProps {
  maxWidth: number;
  isDetailed: boolean;
  label: string;
}

const MOCK_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum.';

export const BottomText = ({ maxWidth, isDetailed = false, label }: BottomTextProps) => {
  return (
    <View style={{ maxWidth: maxWidth, gap: spacing.extraSmall }}>
      <Text variant={isDetailed ? 'subtitle' : 'outline-sb'}>{label}</Text>
      {isDetailed && (
        <Text style={{ color: colors.gray }} variant="outline">
          {MOCK_DESCRIPTION}
        </Text>
      )}
    </View>
  );
};
