import { memo } from "react";
import { Text } from "react-native";
import { SafeAreaContainer } from "@app/components";
import { ISignInScreenProps } from "./SignInScreen.types";

const SignInScreen = memo<ISignInScreenProps>(() => {
  return (
    <SafeAreaContainer>
      <Text>Sign In Screen</Text>
    </SafeAreaContainer>
  );
});

SignInScreen.displayName = "SignInScreen";

export default SignInScreen;
