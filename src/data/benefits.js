import { BenefitCategory } from '@customTypes/benefits';

export const benefits = {
  newBenefitsIds: [1, 2],
  categories: [
    { id: 1, title: BenefitCategory.food_drink, benefitsIds: [2, 3, 4, 5, 20] },
    { id: 2, title: BenefitCategory.heath, benefitsIds: [6, 7] },
    { id: 3, title: BenefitCategory.learn_hobbies, benefitsIds: [8, 9, 10, 11] },
    { id: 4, title: BenefitCategory.beauty, benefitsIds: [12, 13, 14] },
    { id: 5, title: BenefitCategory.sport, benefitsIds: [15, 16, 23] },
    { id: 6, title: BenefitCategory.clothes, benefitsIds: [17, 1, 18, 19] },
    { id: 7, title: BenefitCategory.services, benefitsIds: [22, 21] },
  ],
};
