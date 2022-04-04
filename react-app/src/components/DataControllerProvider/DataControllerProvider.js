import React, { useContext, useState } from "react";

const initialData = {
  products: [],
  checkout: [],
};

const initialContext = {
  data: initialData,
  setData: () => {},
};

const DataControllerContext = React.createContext(initialContext);

export const useDataController = () => useContext(DataControllerContext);

export const DataControllerProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <DataControllerContext.Provider value={{ data, setData }}>
      {children}
    </DataControllerContext.Provider>
  );
};
