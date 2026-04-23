"use client";

import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: (value: boolean) => {},
});

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);