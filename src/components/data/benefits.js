import { imgs } from '@assets/index';
import { BenefitCategory } from '@customTypes/benefits';

export const benefits = {
  [BenefitCategory.food_drink]: {
    id: 1,
    data: [
      {
        id: 1,
        label: 'SpiritВar (СпиритБар)',
        labelColor: 'white',
        offer: 'Сет бесплатно',
        imgPath: imgs.benefits.spiritbar,
        isNew: true,
      },
      {
        id: 2,
        label: 'EMBARGO Coctail Bar',
        offer: '-10%',
        imgPath: imgs.benefits.embargo,
      },
      {
        id: 3,
        label: 'Мята-центр кальянная',
        offer: '−20% на кальяны',
        imgPath: imgs.benefits.myata,
      },
      {
        id: 4,
        label: 'Доминос Пицца',
        offer: '-25%',
        imgPath: imgs.benefits.dominos,
      },
    ],
  },
  [BenefitCategory.heath]: {
    id: 2,
    data: [
      {
        id: 5,
        label: 'EVO wellness club',
        offer: '−20%',
        imgPath: imgs.benefits.evo,
      },
      {
        id: 6,
        label: 'VOKA центр микрохирургии глаза',
        offer: '-10%',
        imgPath: imgs.benefits.voka,
      },
    ],
  },
  [BenefitCategory.learn_hobbies]: {
    id: 3,
    data: [
      {
        id: 7,
        label: 'Курсы иностранных языков SKYENG английский, немецкий...',
        offer: 'до −45%',
        imgPath: imgs.benefits.skyeng,
      },
      {
        id: 8,
        label: 'ROBOLAB Школа робототехники',
        offer: '-10%',
        imgPath: imgs.benefits.robolab,
      },
      {
        id: 9,
        label: 'FASOL музыкальная качалка',
        offer: '-30%',
        imgPath: imgs.benefits.fasol,
      },
      {
        id: 10,
        label: 'Online Class',
        offer: '-7%',
        imgPath: imgs.benefits.online,
      },
    ],
  },
  [BenefitCategory.beauty]: {
    id: 4,
    data: [
      {
        id: 11,
        label: 'Golden Apple',
        offer: '-7%',
        imgPath: imgs.benefits.goldenapple,
      },
      {
        id: 12,
        label: 'Korean Beauty',
        offer: 'Получи подарок',
        imgPath: imgs.benefits.korean,
      },
      {
        id: 13,
        label: 'Beat',
        offer: '-14% по промокоду',
        imgPath: imgs.benefits.beat,
      },
    ],
  },
  [BenefitCategory.sport]: {
    id: 5,
    data: [
      {
        id: 14,
        label: 'Adidas',
        offer: '-5%',
        imgPath: imgs.benefits.adidas,
      },
      {
        id: 15,
        label: 'Best Gym',
        offer: 'Первый раз бесплатно',
        imgPath: imgs.benefits.gym,
      },
      {
        id: 16,
        label: 'SwimWithUs',
        offer: '-25%',
        imgPath: imgs.benefits.swimming,
      },
      {
        id: 17,
        label: 'AtleticShop',
        offer: '-5%',
        imgPath: imgs.benefits.atleticshop,
      },
    ],
  },
  [BenefitCategory.clothes]: {
    id: 6,
    data: [
      {
        id: 18,
        label: 'H&M',
        offer: '-19%',
        imgPath: imgs.benefits.hm,
      },
      {
        id: 19,
        label: 'Zara',
        offer: '-13%',
        imgPath: imgs.benefits.zara,
      },
      {
        id: 20,
        label: 'M00n',
        offer: '-35%',
        imgPath: imgs.benefits.moon,
      },
    ],
  },
  [BenefitCategory.services]: {
    id: 7,
    data: [
      {
        id: 21,
        label: 'Electrostuff',
        offer: '-15%',
        imgPath: imgs.benefits.electric,
      },
    ],
  },
};
