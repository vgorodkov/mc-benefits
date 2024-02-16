import { FavouritesStackParamList, Route } from '@customTypes/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BenefitScreen } from '@screens/BenefitScreen';

import { FavouritesScreen } from '@screens/FavouritesScreen';

const Stack = createNativeStackNavigator<FavouritesStackParamList>();

export const FavouritesStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Route.Favourites} component={FavouritesScreen} />
      <Stack.Screen name={Route.Benefit} component={BenefitScreen} />
    </Stack.Navigator>
  );
};
