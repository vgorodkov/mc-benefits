import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '@components/common/Text';
import { spacing } from '@constants/layout';
import { colors } from '@constants/colors';

export const BenefitOffer = ({
  offer,
  variant = 'default',
}: {
  offer: string;
  variant?: 'default' | 'large';
}) => {
  const paddingHorizontal = variant === 'default' ? spacing.small : spacing.semidefault;
  const paddingVertical = variant === 'default' ? spacing.extraSmall : spacing.semidefault;

  return (
    <View style={[styles.benefitOffer, { paddingHorizontal, paddingVertical }]}>
      <Text variant="description_sb" style={styles.benefitOfferText}>
        {offer}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  benefitOffer: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  benefitOfferText: {
    color: 'white',
  },
});
