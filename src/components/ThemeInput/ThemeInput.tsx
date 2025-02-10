import { View, Text, TextInput } from "react-native";
import React, { memo } from "react";
import { IThemeInputProps } from "./ThemeInput.types";

const ThemeInput = memo<IThemeInputProps>(({ label, placeholder }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput placeholder={placeholder} />
    </View>
  );
});

ThemeInput.displayName = "ThemeInput";

export default ThemeInput;
