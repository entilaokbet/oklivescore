import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/index';
import SportsNews from './pages/sports-news';
import Bookmarks from './pages/bookmarks';
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/sports-news" element={<SportsNews />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);