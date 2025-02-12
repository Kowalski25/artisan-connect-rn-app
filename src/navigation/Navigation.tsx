import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import RootNavigator from "./RootNavigator";

export const Navigation = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
