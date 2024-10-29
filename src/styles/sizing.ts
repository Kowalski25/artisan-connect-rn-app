import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");
type Screen = "height" | "width";
export const screen: Record<Screen, number> = {
  height: screenHeight,
  width: screenWidth,
};

// TODO - Layout sizes

type Icons = "x10" | "x15" | "x20" | "x25" | "x30" | "x40";
export const icons: Record<Icons, number> = {
  x10: 14,
  x15: 17,
  x20: 20,
  x25: 25,
  x30: 30,
  x40: 40,
};

type IconStroke = "x1" | "x2";
export const iconStroke: Record<IconStroke, number> = {
  x1: 1,
  x2: 2,
};
