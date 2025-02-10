import { View, Text } from "react-native";
import React, { memo } from "react";

const HomeScreen = memo(() => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
});

HomeScreen.displayName = "HomeScreen";

export default HomeScreen;
