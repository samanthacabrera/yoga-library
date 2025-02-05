import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
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
import Resources from "./components/Resources";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>  
      <header className="flex justify-between m-2">
        <Link to="/" className="heading">Learn Yoga Online</Link>
        <Search />
      </header>

      <div className="flex">

        <Drawer /> 
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/poses" element={<CategoryPage />} />
          <Route path="/poses/:categoryType/:categoryValue" element={<CategoryPage />} />
          <Route path="/poses/:name" element={<PosePage />} />
          <Route path="/what-is-yoga/overview" element={<WhatIsYoga />} />
          <Route path="/what-is-yoga/beginners-guide" element={<Guide />} />
          <Route path="/what-is-yoga/eight-limbed-path" element={<Path />} />
          <Route path="/what-is-yoga/three-gunas" element={<Gunas />} />
          <Route path="/what-is-yoga/seven-chakras" element={<Chakras/>} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
