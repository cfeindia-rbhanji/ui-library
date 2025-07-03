import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import DeveloperScreen from "./societylab-components/HomePage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DeveloperScreen />
    </BrowserRouter>
  </React.StrictMode>
);
