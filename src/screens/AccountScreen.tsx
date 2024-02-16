import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '@components/common/Text';

export const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="subtitle">Account Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
