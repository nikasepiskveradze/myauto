'use client';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface GlobalStateType {
  isUsd: boolean;
  toggleCurrency?: () => void;
}

const GlobalStateContext = createContext<GlobalStateType>({ isUsd: false });

export const GlobalStateProvider = ({ children }: PropsWithChildren) => {
  const [isUsd, setIsUsd] = useState(false);

  const toggleCurrency = () => {
    setIsUsd((isUsd) => !isUsd);
  };

  return <GlobalStateContext.Provider value={{ isUsd, toggleCurrency }}>{children}</GlobalStateContext.Provider>;
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
