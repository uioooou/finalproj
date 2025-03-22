import { createContext, Dispatch, SetStateAction, useState } from "react";

export const AppContext = createContext<{
  modalState: string;
  setModalState: Dispatch<SetStateAction<string>>;
}>({
  modalState: "",
  setModalState: () => {},
});

const AppProvider = ({ children }) => {
  const [modalState, setModalState] = useState();
  return (
    <AppContext.Provider value={{ modalState, setModalState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
