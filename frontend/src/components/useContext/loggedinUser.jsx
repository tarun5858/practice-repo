import { createContext, useState, useContext } from "react";

// 1. Context banaya
const AuthContext = createContext();

// 2. Provider Component banaya
export function AuthProvider({children}){
   const [user, setUser] = useState({name:"Tarun",role:"Developer"});

   const logout = () => setUser(null) // global function

   return(
   <AuthContext.Provider value={{user,logout}}>
    {children} {/* Iske andar saare child components aayenge */}
   </AuthContext.Provider>
   )
}

// 3. custom hook bnaya short-cut ke liye
export const useAuth = () => useContext(AuthContext)