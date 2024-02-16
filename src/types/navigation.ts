import { Benefit } from './benefits';

export enum Route {
  MainStackNav = 'MainStackNav',
  FavouritesStackNav = 'FavouritesStackNav',
  Account = 'Account',
  Favourites = 'Favourites',
  Main = 'Main',
  Category = 'Category',
  Benefit = 'Benefit',
}

export type MainStackParamList = {
  [Route.Category]: { categoryId: number; categoryLabel: string };
  [Route.Main]: undefined;
  [Route.Benefit]: { benefit: Benefit };
};

export type FavouritesStackParamList = {
  [Route.Favourites]: undefined;
  [Route.Benefit]: { benefit: Benefit };
};
