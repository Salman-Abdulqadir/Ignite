import React, { useEffect } from "react";
import { create } from "zustand";

const storageKey = "vite-ui-theme";
const defaultTheme = "system";

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = create((set) => ({
  theme: localStorage.getItem(storageKey) || defaultTheme,
  storageKey,
  setTheme: (theme) => {
    localStorage.setItem(storageKey, theme);
    set(() => ({ theme }));
  },
}));

export function ThemeProvider({ children }) {
  const theme = useTheme((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (themeValue) => {
      root.classList.remove("light", "dark");

      const finalTheme =
        themeValue === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : themeValue;

      root.classList.add(finalTheme);
    };

    // Initial apply
    applyTheme(theme);

    // Listen for system changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const systemThemeChangeHandler = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", systemThemeChangeHandler);

    return () => {
      mediaQuery.removeEventListener("change", systemThemeChangeHandler);
    };
  }, [theme]);

  return <>{children}</>;
}
