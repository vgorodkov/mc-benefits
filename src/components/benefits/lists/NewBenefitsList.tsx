import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import benefitsMeta from 'data/benefitsMeta.json';
import { Benefit } from '@customTypes/benefits';
import { benefits } from 'data/benefits';
import { HorizontalBenefitsList } from '@components/benefits/lists/HorizontalBenefitsList';

export const NewBenefitsList = () => {
  const newBenefitsById = benefits.newBenefitsIds;
  const benefitsData: Benefit[] = newBenefitsById.map((id: number) => {
    const item = benefitsMeta.find((item) => item.id === id);
    return item as Benefit;
  });

  return (
    <HorizontalBenefitsList benefitsData={benefitsData} benefitVariant="new" listTitle="Новинки" />
  );
};

const styles = StyleSheet.create({});
