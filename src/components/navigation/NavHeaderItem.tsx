import React, { memo } from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import { Text } from '@components/common/Text';
import { colors } from '@constants/colors';
import { spacing } from '@constants/layout';

import { icons } from '@assets/index';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList, Route } from '@customTypes/navigation';

const CATEGORY_IMG_SIZE = 20;

interface NavHeaderCategoryProps {
  label: string;
  isActive: boolean;
  id: number;
}

export const NavHeaderItem = memo(({ isActive = false, label, id }: NavHeaderCategoryProps) => {
  const backgroundColor = isActive ? colors.primary : colors.neutralGray;
  const pressedBackgroudColor = isActive ? colors.onPrimary : colors.onNeutralGray;
  const textColor = isActive ? 'white' : colors.onNeutralGrayText;

  const isAllSales = id === 0;

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const onNavHeaderItemPress = () => {
    if (isAllSales) {
      navigation.navigate(Route.Main);
    } else {
      navigation.navigate(Route.Category, { categoryId: id, categoryLabel: label });
    }
  };

  return (
    <Pressable
      onPress={onNavHeaderItemPress}
      style={({ pressed }) => [
        styles.navHeaderitem,
        { backgroundColor: pressed ? pressedBackgroudColor : backgroundColor },
      ]}
    >
      {isAllSales && (
        <Image
          style={styles.navHeaderitemImg}
          source={isActive ? icons.active_fire_solid : icons.fire_solid}
        />
      )}
      <Text variant="outline-sb" style={{ color: textColor }}>
        {label}
      </Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  navHeaderitem: {
    marginLeft: spacing.default,
    gap: spacing.extraSmall,
    padding: spacing.semidefault,
    flexDirection: 'row',
    borderRadius: 12,
  },
  navHeaderitemImg: {
    width: CATEGORY_IMG_SIZE,
    height: CATEGORY_IMG_SIZE,
  },
});
