import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Text } from '@components/common/Text';
import { imgs } from '@assets/index';
import { animation } from '@constants/animation';
import { colors } from '@constants/colors';
import { spacing } from '@constants/layout';

const DUMMY_IMG_SIZE = 220;

const DUMMY_TEXT = 'Нет избранного';
const DUMMY_TEXT_TIP = 'Чтобы добавить любимые скидки, просто нажии на иконку 💙️ в карточке';

export const FavouritesDummy = () => {
  return (
    <Animated.View
      exiting={FadeOut}
      entering={FadeIn.delay(animation.default_duration / 2)}
      style={styles.favouritesDummyContainer}
    >
      <Image
        source={imgs.favourite_placeholder}
        resizeMode="contain"
        style={{ width: DUMMY_IMG_SIZE, height: DUMMY_IMG_SIZE }}
      />
      <View style={styles.favouritesDummyText}>
        <Text variant="header_2" style={{ color: colors.onNeutralGrayText }}>
          {DUMMY_TEXT}
        </Text>
        <Text style={styles.favouritesDummyTip}>{DUMMY_TEXT_TIP}</Text>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  favouritesDummyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.default,
  },
  favouritesDummyText: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.semidefault,
  },
  favouritesDummyTip: {
    textAlign: 'center',
    color: colors.gray,
  },
});
