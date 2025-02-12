import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");
type Screen = "height" | "width";
export const screen: Record<Screen, number> = {
  height: screenHeight,
  width: screenWidth,
};

// 4/8 Rule
type Layout =
  | "x1"
  | "x2"
  | "x3"
  | "x5"
  | "x7"
  | "x10"
  | "x15"
  | "x20"
  | "x30"
  | "x40"
  | "x50"
  | "x60"
  | "x70"
  | "x80"
  | "x90"
  | "x100"
  | "x110"
  | "x120"
  | "x130"
  | "x140";
export const layout: Record<Layout, number> = {
  x1: 1,
  x2: 2,
  x3: 3,
  x5: 5,
  x7: 7,
  x10: 10,
  x15: 14,
  x20: 16,
  x30: 24,
  x40: 32,
  x50: 40,
  x60: 48,
  x70: 56,
  x80: 64,
  x90: 96,
  x100: 112,
  x110: 128,
  x120: 144,
  x130: 160,
  x140: 176,
};

export const x1 = layout.x1;
export const x2 = layout.x2;
export const x3 = layout.x3;
export const x5 = layout.x5;
export const x7 = layout.x7;
export const x10 = layout.x10;
export const x15 = layout.x15;
export const x20 = layout.x20;
export const x30 = layout.x30;
export const x40 = layout.x40;
export const x50 = layout.x50;
export const x60 = layout.x60;
export const x70 = layout.x70;
export const x80 = layout.x80;
export const x90 = layout.x90;
export const x100 = layout.x100;
export const x110 = layout.x110;
export const x120 = layout.x120;
export const x130 = layout.x130;
export const x140 = layout.x140;

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
