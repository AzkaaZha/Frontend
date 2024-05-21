import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client"; // Perhatikan bahwa sejak React 18, Anda harus mengimpor dari 'react-dom/client'

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
