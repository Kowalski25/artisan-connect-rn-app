import React, { FC, memo, ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleProp, ViewStyle } from "react-native";
import styles from "./SafeAreaContainer.styles";

interface Props {
  children: ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}

export const SafeAreaContainer: FC<Props> = memo(
  ({ children, customStyles }) => {
    return (
      <SafeAreaView style={[styles.container, customStyles]}>
        {children}
      </SafeAreaView>
    );
  },
);

SafeAreaContainer.displayName = "SafeAreaContainer";

export default SafeAreaContainer;
