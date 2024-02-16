import { Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { icons } from '@assets/index';
import { useFocusEffect } from '@react-navigation/native';
import { Text } from '@components/common/Text';
import { colors } from '@constants/colors';
import { Icon } from '@components/common/Icon';
import { BenefitOffer } from './BenefitOffer';
import { spacing } from '@constants/layout';

const SALE_TEXT = 'Условия скидки';
const SALE_CONDITIONS_TEXT = 'Покажите экран и получите';
const BTN_TEXT = 'Активировать';

export const BenefitBottomSheet = ({ offer, label }: { offer: string; label: string }) => {
  const { height } = useWindowDimensions();
  const bottomSheetTranslateY = useSharedValue(height);

  const bottomSheetAStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: bottomSheetTranslateY.value }],
    };
  });

  useFocusEffect(() => {
    bottomSheetTranslateY.value = withSpring(-spacing.large, { damping: 15, stiffness: 60 });
  });

  return (
    <Animated.View style={[styles.bottomSheet, bottomSheetAStyle, { flex: 1 }]}>
      <View>
        <Text variant="header_1">{label}</Text>
        <View style={styles.offerContainer}>
          <BenefitOffer offer={offer} variant="large" />
          <Icon source={icons.info} />
        </View>
        <View style={styles.offerDescription}>
          <Text variant="header_2">{SALE_TEXT}</Text>
          <Text>
            {SALE_CONDITIONS_TEXT} {offer}
          </Text>
        </View>
      </View>
      <Pressable style={styles.activateBtn}>
        <Text style={{ color: 'white' }} variant="outline-sb">
          {BTN_TEXT}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingTop: spacing.large,
    paddingHorizontal: spacing.medium,
  },
  offerContainer: {
    paddingTop: spacing.default,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  offerDescription: {
    gap: spacing.default,
    paddingTop: spacing.medium,
  },
  activateBtn: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.semidefault,
    borderRadius: 12,
  },
});
