import { TextStyle } from "react-native";

// Maps each weight variant of Figtree to its Expo Google Font name for easy access.
type PrimaryFontFamily =
  | "figtree_light"
  | "figtree_regular"
  | "figtree_medium"
  | "figtree_semiBold"
  | "figtree_bold"
  | "figtree_extraBold"
  | "figtree_black";
export const fontFamily: Record<PrimaryFontFamily, TextStyle> = {
  figtree_light: {
    fontFamily: "Figtree_300Light",
  },
  figtree_regular: {
    fontFamily: "Figtree_400Regular",
  },
  figtree_medium: {
    fontFamily: "Figtree_500Medium",
  },
  figtree_semiBold: {
    fontFamily: "Figtree_600SemiBold",
  },
  figtree_bold: {
    fontFamily: "Figtree_700Bold",
  },
  figtree_extraBold: {
    fontFamily: "Figtree_800ExtraBold",
  },
  figtree_black: {
    fontFamily: "Figtree_900Black",
  },
};

type FontSize = "x10" | "x20" | "x30" | "x40" | "x50" | "x60" | "x70";
export const fontSize: Record<FontSize, TextStyle> = {
  x10: {
    fontSize: 13,
  },
  x20: {
    fontSize: 14,
  },
  x30: {
    fontSize: 16,
  },
  x40: {
    fontSize: 19,
  },
  x50: {
    fontSize: 24,
  },
  x60: {
    fontSize: 32,
  },
  x70: {
    fontSize: 38,
  },
};

type LetterSpacing = "x30" | "x40";
export const letterSpacing: Record<LetterSpacing, number> = {
  x30: 2,
  x40: 3,
};

type LineHeight = "x10" | "x20" | "x30" | "x40" | "x50" | "x60" | "x70";
export const lineHeight: Record<LineHeight, TextStyle> = {
  x10: {
    lineHeight: 20,
  },
  x20: {
    lineHeight: 22,
  },
  x30: {
    lineHeight: 24,
  },
  x40: {
    lineHeight: 26,
  },
  x50: {
    lineHeight: 32,
  },
  x60: {
    lineHeight: 38,
  },
  x70: {
    lineHeight: 44,
  },
};

type Header = "x10" | "x20" | "x30" | "x40" | "x50" | "x60" | "x70";
export const header: Record<Header, TextStyle> = {
  x10: {
    ...fontFamily.figtree_bold,
    ...fontSize.x10,
    ...lineHeight.x10,
  },
  x20: {
    ...fontFamily.figtree_bold,
    ...fontSize.x20,
    ...lineHeight.x20,
  },
  x30: {
    ...fontFamily.figtree_bold,
    ...fontSize.x30,
    ...lineHeight.x30,
  },
  x40: {
    ...fontFamily.figtree_bold,
    ...fontSize.x40,
    ...lineHeight.x40,
  },
  x50: {
    ...fontFamily.figtree_bold,
    ...fontSize.x50,
    ...lineHeight.x50,
  },
  x60: {
    ...fontFamily.figtree_bold,
    ...fontSize.x60,
    ...lineHeight.x60,
  },
  x70: {
    ...fontFamily.figtree_bold,
    ...fontSize.x70,
    ...lineHeight.x70,
  },
};

type Subheader = "x10" | "x20" | "x30" | "x40" | "x50";
export const subheader: Record<Subheader, TextStyle> = {
  x10: {
    ...fontFamily.figtree_semiBold,
    ...fontSize.x10,
    ...lineHeight.x10,
  },
  x20: {
    ...fontFamily.figtree_semiBold,
    ...fontSize.x20,
    ...lineHeight.x20,
  },
  x30: {
    ...fontFamily.figtree_semiBold,
    ...fontSize.x30,
    ...lineHeight.x30,
  },
  x40: {
    ...fontFamily.figtree_semiBold,
    ...fontSize.x40,
    ...lineHeight.x40,
  },
  x50: {
    ...fontFamily.figtree_semiBold,
    ...fontSize.x50,
    ...lineHeight.x50,
  },
};

type Body = "x10" | "x20" | "x30" | "x40" | "x50";
export const body: Record<Body, TextStyle> = {
  x10: {
    // color: Colors.neutral.s800,
    ...fontFamily.figtree_regular,
    ...fontSize.x10,
    ...lineHeight.x10,
  },
  x20: {
    // color: Colors.neutral.s800,
    ...fontFamily.figtree_regular,
    ...fontSize.x20,
    ...lineHeight.x20,
  },
  x30: {
    // color: Colors.neutral.s800,
    ...fontFamily.figtree_regular,
    ...fontSize.x30,
    ...lineHeight.x30,
  },
  x40: {
    // color: Colors.neutral.s800,
    ...fontFamily.figtree_regular,
    ...fontSize.x40,
    ...lineHeight.x40,
  },
  x50: {
    // color: Colors.neutral.s800,
    ...fontFamily.figtree_regular,
    ...fontSize.x50,
    ...lineHeight.x50,
  },
};
