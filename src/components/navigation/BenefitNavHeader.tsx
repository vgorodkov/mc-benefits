import { StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { icons } from '@assets/index';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { sizes, spacing } from '@constants/layout';
import { animation } from '@constants/animation';

export const BenefitHeader = ({ isFavourite }: { isFavourite: boolean }) => {
  const navigation = useNavigation();

  const onBackBtnPress = () => {
    navigation.goBack();
  };

  return (
    <Animated.View
      entering={FadeIn.delay(animation.default_duration)}
      style={styles.benefitHeaderContainer}
    >
      <Pressable onPress={onBackBtnPress} style={styles.benefitHeaderIconContainer}>
        <Image style={styles.benefitHeaderIcon} source={icons.arrow_left} />
      </Pressable>
      <Pressable style={styles.benefitHeaderIconContainer}>
        <Image
          style={styles.benefitHeaderIcon}
          source={isFavourite ? icons.active_heart : icons.heart}
        />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  benefitHeaderContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.default,
    zIndex: 1000,
  },
  benefitHeaderIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.iconContainer,
    height: sizes.iconContainer,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  benefitHeaderIcon: {
    width: sizes.icon,
    height: sizes.icon,
  },
});
