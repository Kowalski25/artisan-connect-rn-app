import { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@app/types";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = memo(() => {
  const isSignedIn = false;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
});

RootNavigator.displayName = "RootNavigator";

export default RootNavigator;
