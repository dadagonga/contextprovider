import {createContext, useState} from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) =>{
   // const [signedIn, SetSignedIn] = useState()
    
    return (
        <AuthContext.Provider value={"Algebra"} >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider