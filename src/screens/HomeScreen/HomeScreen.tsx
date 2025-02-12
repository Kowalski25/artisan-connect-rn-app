import { View, Text } from "react-native";
import React, { memo } from "react";
import { ScreenContainer, ThemeInput } from "@app/components";

const HomeScreen = memo(() => {
  return (
    <ScreenContainer>
      <View>
        <ThemeInput label="Your email address" />
      </View>
    </ScreenContainer>
  );
});

HomeScreen.displayName = "HomeScreen";

export default HomeScreen;
