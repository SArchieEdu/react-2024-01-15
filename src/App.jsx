/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Headphone } from "./components/headphone/component";
import { Layout } from "./components/layout/component";
import { mocks } from "./constants/mock";
import { Button } from "./components/button/component";
import { ThemeContext } from "./contexts/theme";

export const App = () => {
  const [theme, setTheme] = useState("default");

  return (
    <ThemeContext.Provider value={theme}>
      <Layout>
        <Button
          onClick={() => setTheme(theme === "default" ? "dark" : "default")}
        >
          SwitchTheme
        </Button>
        <Headphone headphone={mocks[0]} />
      </Layout>
    </ThemeContext.Provider>
  );
};
