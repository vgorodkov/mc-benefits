import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useRef } from 'react';
import { sizes, spacing } from '@constants/layout';
import { colors } from '@constants/colors';
import { benefits } from 'data/benefits';
import { NavHeaderItem } from '@components/navigation/NavHeaderItem';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

interface Category {
  id: number;
  label: string;
}

export const NavHeader = () => {
  const categories = useMemo(
    () =>
      benefits.categories.map((category) => {
        return {
          id: category.id,
          label: category.title,
        };
      }),
    [],
  );

  const activeCategoryId = useSelector((state: RootState) => state.category.activeCategoryId);
  const flatListRef = useRef<FlatList>(null);

  const scrollToItem = () => {
    if (activeCategoryId > 0) {
      flatListRef.current?.scrollToIndex({ animated: true, index: activeCategoryId - 1 });
    } else {
      flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  const renderItem = ({ item }: { item: Category }) => {
    return (
      <NavHeaderItem id={item.id} label={item.label} isActive={activeCategoryId === item.id} />
    );
  };

  scrollToItem();

  return (
    <Animated.View style={styles.navHeaderContainer} exiting={FadeOut} entering={FadeIn}>
      <FlatList
        ref={flatListRef}
        data={categories}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.navHeaderListContent}
        ListHeaderComponent={() => (
          <NavHeaderItem id={0} label="Все скидки" isActive={activeCategoryId === 0} />
        )}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  navHeaderContainer: {
    height: sizes.navHeader,
    borderBottomWidth: 1,
    borderBlockColor: colors.neutralGray,
  },
  navHeaderListContent: {
    alignItems: 'center',
    paddingRight: spacing.default,
  },
});
