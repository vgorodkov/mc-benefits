import { Pressable, StyleSheet, View, useWindowDimensions, Image } from 'react-native';
import React, { memo } from 'react';
import { Benefit } from '@customTypes/benefits';
import { sizes, spacing } from '@constants/layout';
import { BenefitFavouriteBtn } from '@components/benefits/item/BenefitFavouriteBtn';
import { BenefitOffer } from '@components/benefits/item/BenefitOffer';
import { imgs } from '@assets/index';

import { BottomText } from '@components/benefits/item/BenefitBottomText';
import { PivotText } from '@components/benefits/item/BenefitPivotText';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList, Route } from '@customTypes/navigation';

interface BenefitItemProps {
  benefit: Benefit;
  variant: 'new' | 'default' | 'detailed';
}

const IMG_SIZE_COEF = sizes.benefitItemCoef;

export const BenefitItem = memo(({ benefit, variant }: BenefitItemProps) => {
  const isNewBenefits = variant === 'new';
  const isDetailed = variant === 'detailed';
  const img = imgs.benefits[benefit.id];

  const { width, height } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const itemSize = {
    width: width * IMG_SIZE_COEF[variant].width - (isDetailed ? spacing.default * 2 : 0),
    height: height * IMG_SIZE_COEF[variant].height,
  };

  const onBenefitItemPress = () => {
    navigation.navigate(Route.Benefit, {
      benefit,
    });
  };

  return (
    <Pressable
      style={{ gap: isDetailed ? spacing.default : spacing.small }}
      onPress={onBenefitItemPress}
    >
      <View>
        {!isNewBenefits && <BenefitFavouriteBtn isDisabled={!isDetailed} id={benefit.id} />}
        {isNewBenefits && <PivotText label={benefit.label} labelColor={benefit.labelColor} />}
        <Image
          style={[styles.benefitItemImg, { width: itemSize.width, height: itemSize.height }]}
          source={img}
        />
        <View style={styles.pivotBenefitOffer}>
          <BenefitOffer offer={benefit.offer} />
        </View>
      </View>
      {!isNewBenefits && (
        <BottomText isDetailed={isDetailed} label={benefit.label} maxWidth={itemSize.width} />
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  benefitItemImg: {
    borderRadius: 16,
  },
  pivotBenefitOffer: {
    position: 'absolute',
    bottom: spacing.semidefault,
    left: spacing.semidefault,
  },
});
