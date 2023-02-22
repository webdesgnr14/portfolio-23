import * as React from "react";

export const CursorContext = React.createContext();

const CursorContextProvider = ({ children }) => {
  const [cursor, setCursor] = React.useState({ active: false, text: "" });

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
