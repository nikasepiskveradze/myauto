'use client';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface GlobalStateType {
  currency: boolean;
  toggleCurrency?: () => void;
}

const GlobalStateContext = createContext<GlobalStateType>({ currency: false });

export const GlobalStateProvider = ({ children }: PropsWithChildren) => {
  const [currency, setCurrency] = useState(false);

  const toggleCurrency = () => {
    setCurrency((currency) => !currency);
  };

  return <GlobalStateContext.Provider value={{ currency, toggleCurrency }}>{children}</GlobalStateContext.Provider>;
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
