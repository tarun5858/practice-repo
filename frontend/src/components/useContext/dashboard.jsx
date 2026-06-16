import { AuthProvider } from "./loggedinUser";
import { ThemeProvider, useTheme } from "./themeProvider";
import { LanguageProvider, useLanguage } from "./languageContext";

function Dashboard(){
    const {theme, toggleTheme} = useTheme();
    const {text, setLang} = useLanguage();

    return(
        <div style={{ 
      background: theme === "dark" ? "#333" : "#fff", 
      color: theme === "dark" ? "#fff" : "#333",
      padding: '20px' 
    }}>
        <h1>{text.welcome}</h1>
        <button onClick={() => toggleTheme()}>Change Theme</button>
        <button onClick={() => setLang("en")}>English</button>
        <button onClick={() => setLang("hi")}>Hindi</button>
        </div>
    )
}


export default function ContextApp(){
    return(
        <AuthProvider>
            <ThemeProvider>
                <LanguageProvider>
                    <Dashboard/>
                </LanguageProvider>
            </ThemeProvider>
        </AuthProvider>
    )
}