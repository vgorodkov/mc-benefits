import { FlatList } from 'react-native';
import React, { useRef } from 'react';

import { benefits } from 'data/benefits';
import { Category } from '@customTypes/benefits';

import { BenefitsByCategoryList } from '@components/benefits/lists/BenefitsByCategoryList';
import { NewBenefitsList } from '@components/benefits/lists/NewBenefitsList';
import { useFocusEffect, useScrollToTop } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { selectActiveCategory } from 'redux/slices/categorySlice';

export const MainScreen = () => {
  const benefitsByCategory = benefits.categories;

  const dispatch = useDispatch();

  const flatListRef = useRef<FlatList>(null);

  useScrollToTop(flatListRef);

  useFocusEffect(() => {
    dispatch(selectActiveCategory(0));
  });

  const renderItem = ({ item }: { item: Category }) => {
    return <BenefitsByCategoryList category={item} />;
  };

  return (
    <FlatList
      ref={flatListRef}
      data={benefitsByCategory}
      renderItem={renderItem}
      contentContainerStyle={{ gap: 32, paddingVertical: 24 }}
      ListHeaderComponent={() => <NewBenefitsList />}
    />
  );
};
