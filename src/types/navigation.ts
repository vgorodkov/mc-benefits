export enum Route {
  MainStackNav = 'MainStackNav',
  Account = 'Account',
  Favourites = 'Favourites',
  Main = 'Main',
  Category = 'Category',
  Benefit = 'Benefit',
}

export interface MainStackParamList {
  [Route.Category]: { categoryId: number; categoryLabel: string };
  [Route.Main]: undefined;
}
