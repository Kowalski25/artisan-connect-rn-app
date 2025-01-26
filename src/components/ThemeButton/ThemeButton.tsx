import React, { memo } from "react";
import { View, Text } from "react-native";

const ThemeButton = memo(() => {
  return (
    <View>
      <Text>ThemeButton</Text>
    </View>
  );
});

ThemeButton.displayName = "ThemeButton";

export default ThemeButton;
