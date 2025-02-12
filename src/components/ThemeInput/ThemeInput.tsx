import { View, Text, TextInput } from "react-native";
import React, { memo } from "react";
import { IThemeInputProps } from "./ThemeInput.types";
import styles from "./ThemeInput.styles";

const ThemeInput = memo<IThemeInputProps>(({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput placeholder={placeholder} />
    </View>
  );
});

ThemeInput.displayName = "ThemeInput";

export default ThemeInput;
