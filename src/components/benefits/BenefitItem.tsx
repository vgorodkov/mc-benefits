import { Pressable, StyleSheet, Image, View, useWindowDimensions, Dimensions } from 'react-native';
import React, { memo } from 'react';
import { Benefit } from '@customTypes/benefits';
import { spacing } from '@constants/layout';
import { BenefitFavouriteBtn } from '@components/benefits/BenefitFavouriteBtn';
import { BenefitOffer } from '@components/benefits/BenefitOffer';
import { imgs } from '@assets/index';

import { BottomText } from '@components/benefits/BenefitBottomText';
import { PivotText } from '@components/benefits/BenefitPivotText';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList, Route } from '@customTypes/navigation';
import Animated from 'react-native-reanimated';

interface BenefitItemProps {
  benefit: Benefit;
  variant: 'new' | 'default' | 'detailed';
}

const IMG_SIZE_COEF = {
  default: {
    width: 0.7,
    height: 0.2,
  },
  new: {
    width: 0.85,
    height: 0.25,
  },
  detailed: {
    width: 1,
    height: 0.25,
  },
};

export const BenefitItem = memo(({ benefit, variant }: BenefitItemProps) => {
  const isNewBenefits = variant === 'new';
  const isDetailed = variant === 'detailed';
  const img = imgs.benefits[benefit.id];
  console.log(benefit.id);
  const { width, height } = useWindowDimensions();
  const itemSize = {
    width: width * IMG_SIZE_COEF[variant].width - (isDetailed ? spacing.default * 2 : 0),
    height: height * IMG_SIZE_COEF[variant].height,
  };
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const onBenefitItemPress = () => {
    navigation.navigate(Route.Benefit, {
      benefit,
    });
  };

  return (
    <Pressable style={[styles.benefitItem]} onPress={onBenefitItemPress}>
      <View>
        {!isNewBenefits && <BenefitFavouriteBtn isDisabled={!isDetailed} id={benefit.id} />}
        {isNewBenefits && <PivotText label={benefit.label} labelColor={benefit.labelColor} />}
        <Animated.Image
          style={[styles.benefitItemImg, { width: itemSize.width, height: itemSize.height }]}
          source={img}
        />
        <BenefitOffer offer={benefit.offer} />
      </View>
      {!isNewBenefits && (
        <BottomText isDetailed={isDetailed} label={benefit.label} maxWidth={itemSize.width} />
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  benefitItem: {
    gap: spacing.small,
  },
  benefitItemImg: {
    borderRadius: 16,
  },
});
