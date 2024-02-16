import { StyleSheet, View, Image, ScrollView } from 'react-native';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { imgs } from '@assets/index';
import { Text } from '@components/common/Text';
import benefitsMeta from 'data/benefitsMeta.json';
import { VerticalBenefitsList } from '@components/benefits/lists/VerticalBenefitsList';

import { useScrollToTop } from '@react-navigation/native';

const FavouritesPlaceholder = () => {
  return (
    <Animated.View
      exiting={FadeOut}
      entering={FadeIn.delay(300)}
      style={styles.favouritePlaceholderContainer}
    >
      <Image
        source={imgs.favourite_placeholder}
        resizeMode="contain"
        style={{ width: 220, height: 220 }}
      />
      <View style={styles.favouritePlaceholderText}>
        <Text variant="header_2" style={{ color: '#19224C' }}>
          Нет избранного
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Чтобы добавить любимые скидки, просто нажии на иконку 💙️ в карточке
        </Text>
      </View>
    </Animated.View>
  );
};

export const FavouritesScreen = () => {
  const favouritesIds = useSelector((state: RootState) => state.favourites.favouritesIds);
  const favourites = benefitsMeta.filter((benefit) => favouritesIds.includes(benefit.id));

  const scrollViewRef = useRef<ScrollView>(null);

  useScrollToTop(scrollViewRef);

  if (favouritesIds.length <= 0) {
    return <FavouritesPlaceholder />;
  }

  return <VerticalBenefitsList benefitsData={favourites} categoryLabel="Избранные" />;
};

const styles = StyleSheet.create({
  favouritePlaceholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  favouritePlaceholderText: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
});
