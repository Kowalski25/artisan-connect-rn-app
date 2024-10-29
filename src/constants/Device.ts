import { Platform, Dimensions } from "react-native";

interface IDevice {
  isJB?: boolean; // Currently, jail-monkey package is not supported with Expo managed projects.
  isIOS: boolean;
  isAndroid: boolean;
  isWeb: boolean;
  isWindows: boolean;
  isMacOS: boolean;
  OS: string;
  isSupportTouchId: boolean;
  isSupportFaceId: boolean;
  isSupportAR?: boolean; // Undefined is not detected.
  screen: {
    height: number;
    width: number;
  };
}

export const Device: IDevice = {
  isIOS: Platform.OS === "ios",
  isAndroid: Platform.OS === "ios",
  isWeb: Platform.OS === "web",
  isWindows: Platform.OS === "windows",
  isMacOS: Platform.OS === "macos",
  OS: Platform.OS,
  isSupportTouchId: false,
  isSupportFaceId: false,
  isSupportAR: undefined,
  screen: Dimensions.get("window"),
};

export default Device;
