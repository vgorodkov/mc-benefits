import { StyleSheet, Image, View, Pressable } from 'react-native';
import React from 'react';
import { icons } from '@assets/index';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useNavigation, useRoute } from '@react-navigation/native';

export const BenefitHeader = () => {
  const navigation = useNavigation();

  const onBackBtnPress = () => {
    navigation.goBack();
  };

  return (
    <Animated.View entering={FadeIn.delay(300)} style={styles.benefitHeaderContainer}>
      <Pressable onPress={onBackBtnPress} style={styles.benefitHeaderIconContainer}>
        <Image style={styles.benefitHeaderIcon} source={icons.arrow_left} />
      </Pressable>
      <Pressable style={styles.benefitHeaderIconContainer}>
        <Image style={styles.benefitHeaderIcon} source={icons.heart} />
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
    padding: 16,
  },
  benefitHeaderIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  benefitHeaderIcon: {
    width: 24,
    height: 24,
  },
});
