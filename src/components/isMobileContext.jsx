import React from "react";
import { useMediaQuery } from 'react-responsive';

const IsMobileComponent = React.createContext();

function IsMobileComponentProvider({ children }) {
  const isMobile = useMediaQuery({ query: '(max-width: 730px)' });

  return (
    <IsMobileComponent.Provider value={{ isMobile }}>
      { children }
    </IsMobileComponent.Provider>
  );
}

export { IsMobileComponentProvider, IsMobileComponent };
