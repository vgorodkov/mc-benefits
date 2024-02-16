import { StyleSheet } from 'react-native';
import React from 'react';
import { Text } from '@components/common/Text';
import { spacing } from '@constants/layout';
import { colors } from '@constants/colors';

export const BenefitOffer = ({ offer }: { offer: string }) => {
  return (
    <Text variant="description_sb" style={styles.benefitOffer}>
      {offer}
    </Text>
  );
};

const styles = StyleSheet.create({
  benefitOffer: {
    position: 'absolute',
    bottom: spacing.semidefault,
    left: spacing.semidefault,
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.extraSmall,
    backgroundColor: colors.secondary,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    color: 'white',
  },
});
