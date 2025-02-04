import { NavigatorScreenParams } from "@react-navigation/native";

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/

 * Specifying undefined means that the route doesn't have params.
 * A union type with undefined (e.g. SomeType | undefined) means that params are optional.
 */

export type RootStackParamList = {
  HomeScreen: undefined;
  CartScreen: undefined;
  AboutScreen: undefined;
  SettingsScreen: undefined;
  FAQScreen: undefined;
  PoliciesScreen: undefined;
  VouchersScreen: undefined;
  CategoriesScreen: undefined;
  ProductSearchScreen: undefined;
  MyOrdersScreen: undefined;
};
