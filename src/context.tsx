import * as React from "react";
type SetValue = (value: any) => void;
interface AppContextInterface {
  projectData: any;
  setProjectData: SetValue;
}

  
export const Context = React.createContext<AppContextInterface | null>(null);
const ContextProvider: React.FC = props => {
  const [projectData, setProjectData] = React.useState(null);
  return (
    <Context.Provider
      value={{
        projectData,
        setProjectData
      }}
    >
      {/* {props.children} */}
    </Context.Provider>
  );
};

export default ContextProvider;