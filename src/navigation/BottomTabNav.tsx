import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Route } from '@customTypes/navigation';
import { TabBarIcon } from '@components/navigation/TabBarIcon';
import { icons } from '@assets/index';
import { AccountScreen } from '@screens/AccountScreen';
import { FavouritesScreen } from '@screens/FavouritesScreen';
import { sizes, spacing } from 'constants/layout';
import { MainStackNav } from './MainStackNav';
import { NavHeader } from '@components/navigation/NavHeader';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { BenefitHeader } from '@components/navigation/BenefitNavHeader';
import { FavouritesStackNav } from './FavouriteStackNav';

const ROUTE_LABELS: { [key: string]: string } = {
  [Route.MainStackNav]: 'Скидки',
  [Route.Account]: 'Аккаунт',
  [Route.FavouritesStackNav]: 'Избранное',
};

const renderIcon = (route: string, focused: boolean) => {
  switch (route) {
    case Route.Account:
      return focused ? icons.active_user : icons.user;
    case Route.FavouritesStackNav:
      return focused ? icons.actitve_heart_route : icons.heart_route;
    case Route.MainStackNav:
      return focused ? icons.active_sale_bar : icons.sale_bar;
    default:
      return icons.heart;
  }
};

const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerStyle: { height: sizes.navHeader },
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarLabel: ROUTE_LABELS[route.name],
          headerTitle: ROUTE_LABELS[route.name],
          tabBarIcon: ({ focused }) => <TabBarIcon img={renderIcon(route.name, focused)} />,
        };
      }}
    >
      <Tab.Screen
        name={Route.MainStackNav}
        component={MainStackNav}
        options={{
          header: ({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route);
            return routeName === Route.Benefit ? <BenefitHeader /> : <NavHeader />;
          },
        }}
      />
      <Tab.Screen
        name={Route.FavouritesStackNav}
        component={FavouritesStackNav}
        options={{
          header: ({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route);
            return routeName === Route.Benefit ? <BenefitHeader /> : null;
          },
        }}
      />
      <Tab.Screen name={Route.Account} component={AccountScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: sizes.bottomTab,
    paddingTop: spacing.bottomTab,
    paddingBottom: spacing.bottomTab,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});
