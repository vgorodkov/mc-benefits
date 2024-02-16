export enum BenefitCategory {
  all_sales = 'Все скидки',
  food_drink = 'Еда и напитки',
  heath = 'Здоровье',
  learn_hobbies = 'Обучение и хобби',
  beauty = 'Красота',
  sport = 'Спорт',
  clothes = 'Одежда',
  services = 'Услуги',
}

export interface Benefit {
  id: number;
  label: string;
  labelColor?: string;
  offer: string;
}

export interface Category {
  id: number;
  title: string;
  benefitsIds: number[];
}
