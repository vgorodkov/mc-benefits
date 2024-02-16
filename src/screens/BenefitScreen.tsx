import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { icons, imgs } from '@assets/index';
import { Text } from '@components/common/Text';
import { StatusBar } from 'expo-status-bar';
import Animated, {
  BounceIn,
  BounceInUp,
  FadeIn,
  FlipInXUp,
  LightSpeedInLeft,
  LightSpeedOutRight,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';
import { colors } from '@constants/colors';

export const BenefitScreen = ({ route }) => {
  const { benefit } = route.params;
  const img = imgs.benefits[benefit.id];

  const { width, height } = useWindowDimensions();

  const bottomSheetTranslateY = useSharedValue(height);

  useFocusEffect(() => {
    bottomSheetTranslateY.value = withSpring(-42, { damping: 15, stiffness: 60 });
  });

  const bottomSheetAStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: bottomSheetTranslateY.value }],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Animated.Image
        entering={SlideInUp.duration(600)}
        source={img}
        style={styles.benefitImg}
        sharedTransitionTag="tag"
      />
      <Animated.View style={[styles.bottomSheet, bottomSheetAStyle, { height: height - 240 }]}>
        <View>
          <Text variant="header_1">{benefit.label}</Text>
          <View style={styles.offerContainer}>
            <View>
              <Text style={styles.offer} variant="outline-sb">
                {benefit.offer}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Image source={icons.info} style={styles.icon} />
            </View>
          </View>
          <View style={styles.offerDescription}>
            <Text variant="header_2">Условия скидки</Text>
            <Text>Покажите экраны и получите скидку {benefit.offer}</Text>
          </View>
        </View>
        <View style={styles.activateBtn}>
          <Text style={{ color: 'white' }} variant="outline-sb">
            Активировать
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  benefitImg: {
    width: '100%',
    height: 240,
  },
  bottomSheet: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  offerContainer: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  offer: {
    color: 'white',
    padding: 12,
    borderRadius: 12,
    backgroundColor: colors.secondary,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.neutralGray,
    borderRadius: 100,
  },
  icon: {
    width: 24,
    height: 24,
  },
  offerDescription: {
    gap: 16,
    paddingTop: 24,
  },
  activateBtn: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
  },
});
