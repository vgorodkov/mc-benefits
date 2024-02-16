import { ActivityIndicator, BackHandler, InteractionManager, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { benefits } from 'data/benefits';
import benefitsMeta from 'data/benefitsMeta.json';

import { useFocusEffect } from '@react-navigation/native';
import { selectActiveCategory } from 'redux/slices/categorySlice';
import { useDispatch } from 'react-redux';

import { VerticalBenefitsList } from '@components/benefits/lists/VerticalBenefitsList';

export const CategoryScreen = ({ route }) => {
  const { categoryLabel, categoryId } = route.params;

  const benefitsByCategory = benefits.categories.find((category) => category.id === categoryId);

  const benefitsData = benefitsMeta.filter((benefit) =>
    benefitsByCategory?.benefitsIds.includes(benefit.id),
  );
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => setIsLoading(false));
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(selectActiveCategory(categoryId));
      const onBackPress = () => {
        dispatch(selectActiveCategory(0));
        return false;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, [categoryId]),
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return <VerticalBenefitsList benefitsData={benefitsData} categoryLabel={categoryLabel} />;
};
