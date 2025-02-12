import { ComponentType, memo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CategoriesScreen,
  CartScreen,
  HomeScreen,
  MessagesScreen,
  SettingsScreen,
} from "@app/screens";
import { useTypedNavigation } from "@app/hooks";
import { RootBottomTabsParamList } from "@app/types";

const BottomTab = createBottomTabNavigator<RootBottomTabsParamList>();

interface ScreenConfig {
  name: keyof RootBottomTabsParamList;
  component: ComponentType<object>;
}

export const BottomTabNavigator = memo(() => {
  const navigation = useTypedNavigation();

  const screens: ScreenConfig[] = [
    { name: "Home", component: HomeScreen },
    { name: "Categories", component: CategoriesScreen },
    { name: "Cart", component: CartScreen },
    { name: "Messages", component: MessagesScreen },
    { name: "Settings", component: SettingsScreen },
  ];

  return (
    <BottomTab.Navigator>
      {screens.map(({ name, component }) => (
        <BottomTab.Screen key={name} name={name} component={component} />
      ))}
    </BottomTab.Navigator>
  );
});

BottomTabNavigator.displayName = "BottomTabNavigator";

export default BottomTabNavigator;
