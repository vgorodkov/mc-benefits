import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';
import { Benefit } from '@customTypes/benefits';
import { BenefitItem } from '@components/benefits/BenefitItem';
import { Text } from '@components/common/Text';

interface VerticalBenefitsList {
  benefitsData: Benefit[];
  categoryLabel: string;
}

export const VerticalBenefitsList = ({ benefitsData, categoryLabel }: VerticalBenefitsList) => {
  const renderItem = ({ item, index }: { item: Benefit; index: number }) => {
    return (
      <Animated.View
        entering={FadeIn.delay(Math.min(index * 300, 900))}
        exiting={FadeOut}
        layout={LinearTransition.delay(300)}
      >
        <BenefitItem benefit={item} variant="detailed" />
      </Animated.View>
    );
  };
  return (
    <View style={{ paddingVertical: 24, gap: 24, flexGrow: 1 }}>
      <Text style={styles.verticalBenefitsListTitle} variant="header_1">
        {categoryLabel}
      </Text>
      <Animated.FlatList
        data={benefitsData}
        itemLayoutAnimation={LinearTransition.delay(300)}
        renderItem={renderItem}
        contentContainerStyle={styles.verticalBenefitsListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  verticalBenefitsListContent: {
    gap: 32,
    paddingHorizontal: 16,
    paddingBottom: 48,
    flexGrow: 1,
  },
  verticalBenefitsListTitle: {
    paddingLeft: 16,
  },
});
