import { StyleSheet, View } from 'react-native';
import React from 'react';
import { imgs } from '@assets/index';

import Animated, { SlideInUp } from 'react-native-reanimated';

import { BenefitHeader } from '@components/navigation/BenefitNavHeader';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { animation } from '@constants/animation';
import { BenefitBottomSheet } from '@components/benefits/item/BenefitBottomSheet';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FavouritesStackParamList, Route } from '@customTypes/navigation';

const BENEFIT_IMG = 240;

type Props = NativeStackScreenProps<FavouritesStackParamList, Route.Benefit>;

export const BenefitScreen = ({ route }: Props) => {
  const { benefit } = route.params;
  const img = imgs.benefits[benefit.id];

  const isFavourite = useSelector((state: RootState) => state.favourites.favouritesIds).includes(
    benefit.id,
  );

  return (
    <View style={{ flex: 1 }}>
      <BenefitHeader isFavourite={isFavourite} />
      <Animated.Image
        entering={SlideInUp.duration(animation.default_duration * 2)}
        source={img}
        style={styles.benefitImg}
      />
      <BenefitBottomSheet label={benefit.label} offer={benefit.offer} />
    </View>
  );
};

const styles = StyleSheet.create({
  benefitImg: {
    width: '100%',
    height: BENEFIT_IMG,
  },
});
