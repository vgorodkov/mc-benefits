import { StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { sizes } from '@constants/layout';
import { colors } from '@constants/colors';

interface IconProps {
  source: number;
  onPress?: () => void;
}

export const Icon = ({ source, onPress }: IconProps) => {
  return (
    <Pressable style={styles.iconContainer} onPress={onPress}>
      <Image source={source} style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: sizes.iconContainer,
    height: sizes.iconContainer,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.neutralGray,
    borderRadius: 100,
  },
  icon: {
    width: sizes.icon,
    height: sizes.icon,
  },
});
