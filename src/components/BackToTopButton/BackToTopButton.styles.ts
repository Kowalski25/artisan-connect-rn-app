import { StyleSheet } from "react-native";
import { Sizing, Outlines, Colors } from "@app/styles";

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.neutral.white,
    borderRadius: Outlines.borderRadius.max,
    ...Outlines.shadow.base,
    height: Sizing.layout.x50,
    width: Sizing.layout.x50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 32,
    right: 24,
    zIndex: 99,
  },
});

export default styles;
