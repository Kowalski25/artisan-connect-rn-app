import { StyleProp, TextInput, ViewStyle } from "react-native";

type TextInputProps = TextInput["props"];
export interface IThemeInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  type?: "password" | "email" | "text";
  variant?: "input" | "textarea";
  isShowWordCount?: boolean;
  errorMessage?: string;
  inputStyle?: StyleProp<ViewStyle>;
  hideViewPassword?: boolean;
  clearSearchInput?: boolean;
}
