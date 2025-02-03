import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Text } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContextType } from "@app/types";
import { auth } from "@app/firebase";

const defaultContextValue: AuthContextType = {
  isSignedIn: false,
  setIsSignedIn: () => {},
  isLoading: true,
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

export const AuthorizationDetailsContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribeFromAuth();
  });

  const providerValue = useMemo(
    () => ({
      isSignedIn,
      setIsSignedIn,
      isLoading,
    }),
    [isSignedIn, isLoading],
  );

  return (
    <AuthContext.Provider value={providerValue}>
      // TODO - Create app loading screen
      {isLoading ? <Text>Loading...</Text> : children}
    </AuthContext.Provider>
  );
};

export const useAuthDetails = () => useContext(AuthContext);
