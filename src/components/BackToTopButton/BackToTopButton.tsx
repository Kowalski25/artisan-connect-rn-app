import React from "react";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./BackToTopButton.styles";

const BackToTopButton = () => {
  return (
    <Pressable style={styles.button}>
      <AntDesign name="arrowup" size={24} color="black" />
    </Pressable>
  );
};

export default BackToTopButton;
