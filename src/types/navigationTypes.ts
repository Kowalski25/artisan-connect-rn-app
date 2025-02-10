import { NavigatorScreenParams } from "@react-navigation/native";

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/

 * Specifying undefined means that the route doesn't have params.
 * A union type with undefined (e.g. SomeType | undefined) means that params are optional.
 */

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabsParamList> | undefined;
  // Auth
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ResetPasswordScreen: undefined;
  EmailVerificationScreen: undefined;

  About: undefined;
  FAQ: undefined;
  Feedback: undefined;
  Policies: undefined;
  Vouchers: undefined;
  ProductSearch: undefined;
  MyOrders: undefined;
  RecentlyViewed: undefined;
  ShareProduct: undefined;
  TermsOfUse: undefined;
};

export type RootBottomTabsParamList = {
  Home: undefined;
  Categories: undefined;
  Cart: undefined;
  Messages: undefined;
  Settings: undefined;
};
