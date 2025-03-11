import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./components/Home";
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

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
  };

const App = () => {
  const isHomePage = location.pathname === "/";
  return (
    <Router> 
      <ScrollToTop /> 
      {!isHomePage && <Header />}
      <div className="flex">
        <Drawer /> 
        <Routes>
          <Route path="/" element={<Home />} />
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
