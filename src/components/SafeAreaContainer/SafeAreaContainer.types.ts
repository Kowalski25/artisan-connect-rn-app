import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ISafeAreaContainerProps {
  children: ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}
