import React , { ReactNode, createContext } from "react";

interface Test{
    TestStr : string ;
}
interface ContextTypeManger extends 
Test
{}

interface ContextTypeMangerProps {
    childern : ReactNode;
}
const GlobalContext = createContext<ContextTypeManger | undefined>(undefined);

const GlobalContextProvider:React.FC<ContextTypeMangerProps> = ({childern}) =>{

    const TestStr = "Hello";

    return (
        <GlobalContext.Provider 
            value={{
                TestStr
            }}
        >
            {childern}
        </GlobalContext.Provider>
    )
}

export {GlobalContext , GlobalContextProvider} ;