import { useState } from "react";
import { useEffect } from "react";

import { About } from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NavMenu from "./components/navMenu/NavMenu";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Asignamos un tema segun las preferencias del usuario
    if (sessionStorage.getItem("theme")) {
      setTheme(sessionStorage.getItem("theme"));
    } else {
      sessionStorage.setItem(
        "theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
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
      if (t == "light") {
        sessionStorage.setItem("theme", "dark");
        return "dark";
      } else {
        sessionStorage.setItem("theme", "light");
        return "light";
      }
    });
  };

  return (
    <div className="App bg-gradient-to-tr from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 transition-colors ease-in min-h-screen ">
      <ToastContainer position="bottom-right" theme={theme} autoClose={3000} />
      <Header theme={theme} handleToggleTheme={handleToggleTheme} />
      <NavMenu />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
