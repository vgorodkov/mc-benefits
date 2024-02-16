import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import benefitsMeta from 'data/benefitsMeta.json';
import { VerticalBenefitsList } from '@components/benefits/lists/VerticalBenefitsList';

import { FavouritesDummy } from '@components/benefits/FavouritesDummy';

export const FavouritesScreen = () => {
  const favouritesIds = useSelector((state: RootState) => state.favourites.favouritesIds);
  const favourites = benefitsMeta.filter((benefit) => favouritesIds.includes(benefit.id));

  if (favouritesIds.length <= 0) {
    return <FavouritesDummy />;
  }

  return <VerticalBenefitsList benefitsData={favourites} categoryLabel="Избранные" />;
};
