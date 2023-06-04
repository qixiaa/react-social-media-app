import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeContextProvier } from "./context/darkModeContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvier>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvier>
  </React.StrictMode>
);
