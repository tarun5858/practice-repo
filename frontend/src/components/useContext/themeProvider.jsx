import {createContext,useContext,useState} from 'react'

// context banaya
const ThemeContext = createContext();

// provider function banaya
export function ThemeProvider({children}){
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>{
    setTheme((prev) => prev === "dark" ? "light" : "dark")
  }

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}


// custom hook bnaya short-cut ke liye
export const useTheme = () => useContext(ThemeContext)
