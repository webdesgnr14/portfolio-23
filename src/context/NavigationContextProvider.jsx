import * as React from "react";

export const MenuClickContext = React.createContext();

const MenuClickContextProvider = ({ children }) => {
  const [menuClickState, setMenuClickState] = React.useState({
    isClicked: false,
  });

  return (
    <MenuClickContext.Provider value={[menuClickState, setMenuClickState]}>
      {children}
    </MenuClickContext.Provider>
  );
};

export default MenuClickContextProvider;
