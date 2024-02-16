import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '@components/common/Text';
import { colors } from '@constants/colors';

interface BottomTextProps {
  maxWidth: number;
  isDetailed: boolean;
  label: string;
}

export const BottomText = ({ maxWidth, isDetailed = false, label }: BottomTextProps) => {
  return (
    <View style={{ maxWidth: maxWidth }}>
      <Text variant="outline-sb">{label}</Text>
      {isDetailed && (
        <Text style={{ color: colors.gray }} variant="outline">
          Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
