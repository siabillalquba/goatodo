import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";

import "./index.css";
import { HomeRoute } from "./routes/home";
import { AboutRoute } from "./routes/about";
import { TaskDetailsRoute } from "./routes/task-details";

createRoot(document.getElementById("root")!).render(<App />);

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-white p-4 text-sm">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/tasks/:taskId" element={<TaskDetailsRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
