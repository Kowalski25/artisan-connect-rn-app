import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@app/types";

export const useTypedNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};

export default useTypedNavigation;
