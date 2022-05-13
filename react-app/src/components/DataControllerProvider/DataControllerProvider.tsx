import React, { useContext, useMemo, useState } from "react";
import { DataType } from "../../types/common";

interface DataControllerContextProps {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

interface DataControllerProviderProps {
  children: React.ReactNode;
}

const initialData: DataType = {
  products: [],
  checkout: [],
};

const initialContext = {
  data: initialData,
  setData: () => undefined,
};

const DataControllerContext =
  React.createContext<DataControllerContextProps>(initialContext);

export const useDataController = () => useContext(DataControllerContext);

export const DataControllerProvider: React.FC<DataControllerProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState(initialData);

  const contextValue = useMemo(() => ({ data, setData }), [data]);

  return (
    <DataControllerContext.Provider value={contextValue}>
      {children}
    </DataControllerContext.Provider>
  );
};
