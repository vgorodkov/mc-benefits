import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';
import { Benefit } from '@customTypes/benefits';
import { BenefitItem } from '@components/benefits/item/BenefitItem';
import { Text } from '@components/common/Text';
import { spacing } from '@constants/layout';
import { animation } from '@constants/animation';

interface VerticalBenefitsList {
  benefitsData: Benefit[];
  categoryLabel: string;
}

export const VerticalBenefitsList = ({ benefitsData, categoryLabel }: VerticalBenefitsList) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verticalBenefitsListTitle} variant="header_1">
        {categoryLabel}
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalBenefitsListContent}
      >
        {benefitsData.map((item, index) => {
          return (
            <Animated.View
              key={item.id}
              entering={FadeIn.delay(
                Math.min(index * animation.default_duration, animation.default_duration * 3),
              )}
              exiting={FadeOut}
              layout={LinearTransition.delay(animation.default_duration)}
            >
              <BenefitItem benefit={item} variant="detailed" />
            </Animated.View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: spacing.medium, gap: spacing.medium, flexGrow: 1 },

  verticalBenefitsListContent: {
    gap: spacing.large,
    paddingHorizontal: spacing.default,
    paddingBottom: spacing.medium * 2,
    flexGrow: 1,
  },
  verticalBenefitsListTitle: {
    paddingLeft: spacing.default,
  },
});
