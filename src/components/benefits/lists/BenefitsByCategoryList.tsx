import React from 'react';
import { HorizontalBenefitsList } from '@components/benefits/lists/HorizontalBenefitsList';
import { Benefit, Category } from '@customTypes/benefits';

import benefitsMeta from 'data/benefitsMeta.json';

export const BenefitsByCategoryList = ({ category }: { category: Category }) => {
  const benefitsData: Benefit[] = category.benefitsIds.map((id: number) => {
    const item = benefitsMeta.find((item) => item.id === id);
    return item as Benefit;
  });

  return (
    <HorizontalBenefitsList
      benefitsData={benefitsData}
      benefitVariant="default"
      listTitle={category.title}
      category={category}
    />
  );
};
