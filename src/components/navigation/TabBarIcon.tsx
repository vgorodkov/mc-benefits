import { StyleSheet, Image } from 'react-native';
import React from 'react';

const ICON_SIZE = 24;

export const TabBarIcon = ({ img }: { img: number }) => {
  return <Image source={img} style={styles.tabBarImg} />;
};

const styles = StyleSheet.create({
  tabBarImg: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});
