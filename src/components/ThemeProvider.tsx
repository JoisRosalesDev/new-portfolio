import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { Theme } from "../context/ThemeContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    const applyTheme = (t: Theme) => {
      root.classList.remove("dark");
      
      if (t === "dark") {
        root.classList.add("dark");
      } else if (t === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (systemTheme) root.classList.add("dark");
      }
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);

    // Listen for system theme changes if in system mode
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
