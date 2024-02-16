import { Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from 'redux/slices/favouritesSlice';
import { RootState } from 'redux/store';
import { icons } from '@assets/index';
import { spacing } from '@constants/layout';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';

const BTN_SIZE = 40;
const ICON_SIZE = 20;

export const BenefitFavouriteBtn = ({ id, isDisabled }: { id: number; isDisabled: boolean }) => {
  const dispatch = useDispatch();

  const isActive = useSelector((state: RootState) => state.favourites.favouritesIds.includes(id));

  const buttonScale = useSharedValue(1);

  const aStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  const onPress = () => {
    //disable favourite btn in the main screen and prevent from going to benefits screen if heart is pressed
    if (isDisabled) {
      return;
    }
    buttonScale.value = withSequence(withSpring(1.3), withSpring(1));
    if (isActive) {
      dispatch(removeFromFavourites(id));
    } else {
      dispatch(addToFavourites(id));
    }
  };

  return (
    <Pressable style={styles.benefitFavouriteBtn} onPress={onPress}>
      <Animated.View style={aStyle}>
        <Image
          source={isActive ? icons.active_heart : icons.heart}
          style={styles.benefitFavouriteIcon}
        />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  benefitFavouriteBtn: {
    zIndex: 100,
    width: BTN_SIZE,
    height: BTN_SIZE,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: 'white',
    top: spacing.semidefault,
    right: spacing.semidefault,
    justifyContent: 'center',
    alignItems: 'center',
  },
  benefitFavouriteIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});
