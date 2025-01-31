import React, { memo } from "react";
import { View, Text } from "react-native";
import * as Sharing from "expo-sharing";

const ShareButton = memo(() => {
  return (
    <View>
      <Text>Share Button</Text>
    </View>
  );
});

ShareButton.displayName = "ShareButton";

export default ShareButton;
