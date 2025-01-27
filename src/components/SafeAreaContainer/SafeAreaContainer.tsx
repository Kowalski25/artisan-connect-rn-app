import React, { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./SafeAreaContainer.styles";
import { ISafeAreaContainerProps } from "./SafeAreaContainer.types";

export const SafeAreaContainer = memo<ISafeAreaContainerProps>(
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
