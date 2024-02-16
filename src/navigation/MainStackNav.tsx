import { Route } from '@customTypes/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BenefitScreen } from '@screens/BenefitScreen';
import { CategoryScreen } from '@screens/CategoryScreen';
import { MainScreen } from '@screens/MainScreen';

const Stack = createNativeStackNavigator();

export const MainStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Route.Main} component={MainScreen} />
      <Stack.Screen name={Route.Category} component={CategoryScreen} />
      <Stack.Screen
        name={Route.Benefit}
        component={BenefitScreen}
        options={{ presentation: 'modal', animation: 'fade_from_bottom' }}
      />
    </Stack.Navigator>
  );
};
