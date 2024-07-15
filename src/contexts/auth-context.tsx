import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AuthService } from '../services';
import { PhoneNumber, AccessToken } from '../types';
import { Nullable } from '../types/common-types';
import { useLocalStorage } from '../utils';

const ACCESS_TOKEN_KEY = 'access-token';

interface AuthContextInterface {
  getAccessTokenFromStorage: () => Nullable<AccessToken>;
  isSendOTPLoading: boolean;
  isUserAuthenticated: boolean;
  isVerifyOTPLoading: boolean;
  logout: () => void;
  sendOTP: (phoneNumber: PhoneNumber) => Promise<void>;
  verifyOTP: (otp: string, phoneNumber: PhoneNumber) => Promise<void>;
}

export const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const useAuthContext = (): AuthContextInterface =>
  useContext(AuthContext as Context<AuthContextInterface>);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const authService = useMemo(() => new AuthService(), []);

  const [isSendOTPLoading, setIsSendOTPLoading] = useState(false);
  const [isVerifyOTPLoading, setIsVerifyOTPLoading] = useState(false);

  const { getFromStorage, removeFromStorage, setToStorage } = useLocalStorage();

  const getAccessTokenFromStorage = (): Nullable<AccessToken> => {
    const token = getFromStorage(ACCESS_TOKEN_KEY);
    if (token) {
      return JSON.parse(token) as AccessToken;
    }
    return null;
  };

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(!!getAccessTokenFromStorage());

  const setAccessTokenToStorage = (token: AccessToken) => {
    setToStorage(ACCESS_TOKEN_KEY, JSON.stringify(token));
  };

  const clearAccessTokenFromStorage = (): void => {
    removeFromStorage(ACCESS_TOKEN_KEY);
  };

  const logout = () => {
    clearAccessTokenFromStorage();
    setIsUserAuthenticated(false);
  };

  const sendOTP = async (phoneNumber: PhoneNumber) => {
    setIsSendOTPLoading(true);
    const { error } = await authService.sendOTP(phoneNumber);
    if (error) {
      setIsSendOTPLoading(false);
      throw error;
    }
    setIsSendOTPLoading(false);
  };

  const verifyOTP = async (otp: string, phoneNumber: PhoneNumber) => {
    setIsVerifyOTPLoading(true);
    const { data, error } = await authService.verifyOTP(otp, phoneNumber);

    if (data) {
      setAccessTokenToStorage(data);
      setIsUserAuthenticated(true);
      setIsVerifyOTPLoading(false);
    } else {
      setIsVerifyOTPLoading(false);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        getAccessTokenFromStorage,
        isSendOTPLoading,
        isUserAuthenticated,
        isVerifyOTPLoading,
        logout,
        sendOTP,
        verifyOTP,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
