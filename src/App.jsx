import { useState } from "react";
import { useEffect } from "react";
import { About } from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NavMenu from "./components/navMenu/NavMenu";
import Skills from "./components/skills/Skills";

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
    <div className="App bg-gradient-to-tr from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 transition-colors ease-in min-h-screen ">
      <Header theme={theme} handleToggleTheme={handleToggleTheme} />
      <NavMenu />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
