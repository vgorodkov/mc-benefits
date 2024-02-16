import { FlatList, StyleSheet } from 'react-native';
import React, { memo, useCallback, useMemo, useRef } from 'react';
import { spacing } from '@constants/layout';
import { colors } from '@constants/colors';
import { benefits } from 'data/benefits';
import { NavHeaderItem } from '@components/navigation/NavHeaderItem';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated';

interface Category {
  id: number;
  label: string;
}

const ListHeader = memo(({ isActive }: { isActive: boolean }) => {
  return <NavHeaderItem id={0} label="Все скидки" isActive={isActive} />;
});

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
  const isAllSalesCategory = activeCategoryId === 0;

  const scrollToItem = useCallback(() => {
    if (!isAllSalesCategory) {
      flatListRef.current?.scrollToIndex({ animated: true, index: activeCategoryId - 1 });
    } else {
      flatListRef.current?.scrollToOffset({
        animated: true,
        offset: -spacing.default,
      });
    }
  }, [activeCategoryId]);

  const renderItem = useCallback(
    ({ item }: { item: Category }) => {
      return (
        <NavHeaderItem id={item.id} label={item.label} isActive={activeCategoryId === item.id} />
      );
    },
    [activeCategoryId],
  );

  const renderListHeader = useCallback(() => {
    return <ListHeader isActive={isAllSalesCategory} />;
  }, [isAllSalesCategory]);

  scrollToItem();

  return (
    <Animated.View style={styles.navHeaderContainer} exiting={SlideOutUp} entering={SlideInUp}>
      <FlatList
        ref={flatListRef}
        data={categories}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.navHeaderListContent}
        ListHeaderComponent={renderListHeader}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  navHeaderContainer: {
    paddingVertical: spacing.semidefault,
    borderBottomWidth: 1,
    borderBlockColor: colors.neutralGray,
  },
  navHeaderListContent: {
    alignItems: 'center',
    paddingRight: spacing.default,
  },
});
