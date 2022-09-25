import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/header/Header";
import NavMenu from "./components/navMenu/NavMenu";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (sessionStorage.getItem("theme")) {
      setTheme(sessionStorage.getItem("theme"));
    } else {
      sessionStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((t) => {
      if(t == 'light'){
        sessionStorage.setItem("theme", "dark");
        return 'dark'
      }else {
        sessionStorage.setItem("theme", "light");
        return 'light'
      }
    });
  };

  return (
    <div className="App bg-gradient-to-tr from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 transition-colors ease-in h-screen ">
      <Header theme={theme} handleToggleTheme={handleToggleTheme} />
      <NavMenu />
    </div>
  );
}

export default App;
