import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import { HomeRoute } from "./routes/home";
import { AboutRoute } from "./routes/about";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/about" element={<AboutRoute />} />
    </Routes>
  </BrowserRouter>,
);
