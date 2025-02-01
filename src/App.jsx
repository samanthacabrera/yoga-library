import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Cursor from "./components/Cursor";
import Search from "./components/Search";
import Drawer from "./components/Drawer";
import Hero from "./components/Hero";
import CategoryPage from "./components/CategoryPage";
import PosePage from "./components/PosePage";
import Guide from "./components/Guide";
import WhatIsYoga from "./components/WhatIsYoga";
import Path from "./components/Path";
import Gunas from "./components/Gunas";
import Chakras from "./components/Chakras";
import Newsletter from "./components/Newsletter";
import Article from "./components/Article";
import Resources from "./components/Resources";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>  
      <Cursor />
      
      <header className="flex justify-between m-2">
        <Link to="/">Learn Yoga Online</Link>
        <Search />
      </header>

      <div className="flex">

        <Drawer /> 
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/categories/all" element={<CategoryPage />} />
          <Route path="/categories/:categoryType/:categoryValue" element={<CategoryPage />} />
          <Route path="/pose/:id" element={<PosePage />} />
          <Route path="/what-is-yoga" element={<WhatIsYoga />} />
          <Route path="/beginners-guide" element={<Guide />} />
          <Route path="/path-of-yoga" element={<Path />} />
          <Route path="/three-gunas" element={<Gunas />} />
          <Route path="/seven-chakras" element={<Chakras/>} />
          <Route path="/articles" element={<Newsletter />} />
          <Route path="/articles/:slug" element={<Article />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
