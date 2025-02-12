import { memo } from "react";
import { View } from "react-native";
import styles from "./ScreenContainer.styles";
import { IScreenContainerProps } from "./ScreenContainer.types";

const ScreenContainer = memo<IScreenContainerProps>(
  ({ children, customStyle }) => {
    return <View style={[styles.container, customStyle]}>{children}</View>;
  },
);

ScreenContainer.displayName = "ScreenContainer";

export default ScreenContainer;
