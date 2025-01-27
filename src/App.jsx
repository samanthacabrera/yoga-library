import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Cursor from "./components/Cursor";
import Search from "./components/Search";
import Drawer from "./components/Drawer";
import Hero from "./components/Hero";
import CategoryPage from "./components/CategoryPage";
import PosePage from "./components/PosePage";
import Guide from "./components/Guide";
import Path from "./components/Path";
import Limb from "./components/Limb";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import Resources from "./components/Resources";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";





const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <Router>  
      <Cursor />
      <div className="flex justify-between m-2">
        <Link to="/" className="hover:scale-105 transition">Learn Yoga Online</Link>
        <Search />
      </div>

      <button
        onClick={toggleDrawer}
        className={`absolute top-18 ${
          isDrawerOpen ? "left-[16rem]" : "left-0"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col text-4xl opacity-50 p-2 bg-gray-200 rounded-tr-lg rounded-br-lg transition-transform duration-500 ease-in-out">
          {isDrawerOpen ? (
            <>
              <span>&laquo;</span>
            </>
          ) : (
            <>
              <span>&raquo;</span>
            </>
          )}
        </div>
      </button>

      <div
        className="flex z-10"
      >
        {isDrawerOpen && <Drawer isDrawer={true} />}

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/categories/all" element={<CategoryPage />} />
          <Route path="/categories/:categoryType/:categoryValue" element={<CategoryPage />} />
          <Route path="/pose/:id" element={<PosePage />} />
          <Route path="/beginners-guide" element={<Guide />} />
          <Route path="/pathofyoga" element={<Path />} />
          <Route path="/pathofyoga/:limb" element={<Limb />} />
          <Route path="/articles" element={<ArticleList />} />
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
