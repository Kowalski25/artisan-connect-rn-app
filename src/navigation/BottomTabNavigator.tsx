import { memo } from "react";
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

const screenOptions = {
  tabHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
};

export const BottomTabNavigator = memo(() => {
  const navigation = useTypedNavigation();

  const screens = {
    HomeScreen: (
      <BottomTab.Screen key="Home" name="Home" component={HomeScreen} />
    ),
    CategoriesScreen: (
      <BottomTab.Screen
        key="Categories"
        name="Categories"
        component={CategoriesScreen}
      />
    ),
    CartScreen: (
      <BottomTab.Screen key="Cart" name="Cart" component={CartScreen} />
    ),
    MessagesScreen: (
      <BottomTab.Screen
        key="Messages"
        name="Messages"
        component={MessagesScreen}
      />
    ),
    SettingsScreen: (
      <BottomTab.Screen
        key="Settings"
        name="Settings"
        component={SettingsScreen}
      />
    ),
  };

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen key="Home" name="Home" component={HomeScreen} />
    </BottomTab.Navigator>
  );
});

BottomTabNavigator.displayName = "BottomTabNavigator";

export default BottomTabNavigator;
