// Initial colors for now until the UI design of this app is finalized.

// Neutral colors
type Neutral =
  | "white"
  | "s100"
  | "s150"
  | "s200"
  | "s250"
  | "s300"
  | "s400"
  | "s500"
  | "s600"
  | "s700"
  | "s800"
  | "s900"
  | "black";
export const neutral: Record<Neutral, string> = {
  white: "#ffffff",
  s100: "#efeff6",
  s150: "#dfdfe6",
  s200: "#c7c7ce",
  s250: "#bbbbc2",
  s300: "#9f9ea4",
  s400: "#7c7c82",
  s500: "#515154",
  s600: "#38383a",
  s700: "#2d2c2e",
  s800: "#212123",
  s900: "#161617",
  black: "#000000",
};

// Brand colors
type Primary = "brand" | "s200" | "s600";
export const primary: Record<Primary, string> = {
  s200: "#459de6",
  brand: "#0d548f",
  s600: "#0c3659",
};

type Secondary = "brand" | "s200" | "s600";
export const seconday: Record<Secondary, string> = {
  s200: "#b968e8",
  brand: "#591282",
  s600: "#3f0d5c",
};

// Semantics colors
type Success = "s400";
export const success: Record<Success, string> = {
  s400: "#008a09",
};

type Error = "s400";
export const error: Record<Error, string> = {
  s400: "#cf1717",
};

type Warning = "s400";
export const warning: Record<Warning, string> = {
  s400: "#cf9700",
};

type Information = "s400";
export const information: Record<Information, string> = {
  s400: "#2d8eff",
};

// TODO - Utils for opacity, tints and shades and for converting hex values.
