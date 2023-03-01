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
