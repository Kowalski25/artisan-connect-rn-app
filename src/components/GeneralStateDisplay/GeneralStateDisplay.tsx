import React, { memo } from "react";
import { View, Text } from "react-native";

const GeneralStateDisplay = memo(() => {
  return (
    <View>
      <Text>GeneralStateDisplay</Text>
    </View>
  );
});

GeneralStateDisplay.displayName = "GeneralStateDisplay";

export default GeneralStateDisplay;
