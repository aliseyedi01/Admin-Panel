import { useState, useEffect } from "react";

const useDarkMode = (): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const isDarkMode = localStorage.getItem("darkModeUser");
    return isDarkMode === "true";
  });

  // change mode with changes theme
  useEffect(() => {
    localStorage.setItem("darkModeUser", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // handle dark mode button
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, handleThemeChange];
};

export default useDarkMode;
