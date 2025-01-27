import { useEffect, useState } from "react";
import { AppState } from "react-native";

export const useAppIsActive = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      setIsActive(nextAppState === "active");
    };

    AppState.addEventListener("change", handleAppStateChange);
  }, []);

  return isActive;
};

export default useAppIsActive;
