import { Dispatch, SetStateAction } from "react";

export type AuthContextType = {
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
};
