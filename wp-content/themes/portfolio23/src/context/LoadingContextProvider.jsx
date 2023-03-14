import * as React from "react";
import { scrollToTop } from "../lib/helpers";
import { useLocation } from "react-router-dom";

export const LoadingContext = React.createContext();

const LoadingContextProvider = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = React.useState({ isLoading: true });

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(() => {
        return { isLoading: false }
      });

      if (!location.hash) {
        scrollToTop();
      }
    }, 2600);
  }, []);

  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
