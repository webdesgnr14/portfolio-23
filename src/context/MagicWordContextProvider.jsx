import * as React from "react";

export const MagicWordContext = React.createContext();

const MagicWordContextProvider = ({ children }) => {
  const [cycleComplete, setCycleComplete] = React.useState({
    isComplete: false,
  });

  return (
    <MagicWordContext.Provider value={[cycleComplete, setCycleComplete]}>
      {children}
    </MagicWordContext.Provider>
  );
};

export default MagicWordContextProvider;
