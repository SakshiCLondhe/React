import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PdfPage from "./pages/PdfPage";
import QuizPage from "./pages/QuizPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf" element={<PdfPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <h1 className="text-3xl font-bold text-center mt-10">
        Tailwind is working 🚀
      </h1>
    </div>
  );
}

export default App;
