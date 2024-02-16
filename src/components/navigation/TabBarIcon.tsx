import { StyleSheet, Image } from 'react-native';
import React, { memo } from 'react';
import { sizes } from '@constants/layout';

export const TabBarIcon = memo(({ img }: { img: number }) => {
  return <Image source={img} style={styles.tabBarImg} />;
});

const styles = StyleSheet.create({
  tabBarImg: {
    width: sizes.icon,
    height: sizes.icon,
  },
});
