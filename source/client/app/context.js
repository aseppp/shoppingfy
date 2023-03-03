'use client';

import { createContext, useState } from 'react';

export const FunctionBarContext = createContext();
export const FunctionBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FunctionBarContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </FunctionBarContext.Provider>
  );
};

export const DetailSidebarContext = createContext();
export const DetailSidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DetailSidebarContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </DetailSidebarContext.Provider>
  );
};
