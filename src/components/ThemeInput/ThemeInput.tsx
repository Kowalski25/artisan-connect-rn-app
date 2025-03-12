import { View, Text, TextInput } from "react-native";
import React, { ForwardedRef, memo, useState } from "react";
import { IThemeInputProps } from "./ThemeInput.types";
import styles from "./ThemeInput.styles";

const ThemeInput = memo<IThemeInputProps>(
  (
    { label, placeholder, secureTextEntry, maxLength = undefined, value },
    ref: ForwardedRef<TextInput>,
  ) => {
    const [showPassword, setShowPassword] = useState<boolean | undefined>(
      secureTextEntry,
    );

    return (
      <View style={styles.container}>
        <Text>{label}</Text>
        <TextInput placeholder={placeholder} />
      </View>
    );
  },
);

ThemeInput.displayName = "ThemeInput";

export default ThemeInput;
