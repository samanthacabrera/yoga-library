import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./components/Home";
import PoseList from "./components/PoseList";
import PosePage from "./components/PosePage";
import Guide from "./components/Guide";
import WhatIsYoga from "./components/WhatIsYoga";
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

  return (
    <>
      <ScrollToTop /> 
      <Header />
      <div className="flex">
        <Drawer /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poses" element={<PoseList />} />
          <Route path="/poses/:name" element={<PosePage />} />
          <Route path="/what-is-yoga/overview" element={<WhatIsYoga />} />
          <Route path="/what-is-yoga/beginners-guide" element={<Guide />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
