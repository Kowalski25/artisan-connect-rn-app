import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface IScreenContainerProps {
  children: ReactNode;
  customStyle?: ViewStyle;
}
