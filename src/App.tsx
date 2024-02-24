import { ThemeProvider } from "@mui/material";
import "./App.css";
import { cacheRtl, theme } from "./theme/Theme";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import { CacheProvider } from "@emotion/react";

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
