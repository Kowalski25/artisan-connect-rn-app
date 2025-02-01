import React, { memo } from "react";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors, Sizing } from "@app/styles";
import { IBackToTopButtonProps } from "./BackToTopButton.types";
import styles from "./BackToTopButton.styles";

const BackToTopButton = memo<IBackToTopButtonProps>(({ scrollViewRef }) => {
  const handlePress = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <Pressable style={styles.button} onPress={handlePress}>
      <AntDesign
        name="arrowup"
        size={Sizing.icons.x20}
        color={Colors.neutral.s600}
      />
    </Pressable>
  );
});

BackToTopButton.displayName = "BackToTopButton";

export default BackToTopButton;
