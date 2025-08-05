import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./components/Home";
import PoseList from "./components/PoseList";
import PosePage from "./components/PosePage";
import Guide from "./components/Guide";
import WhatIsYoga from "./components/WhatIsYoga";
import Path from "./components/Path";
import Resources from "./components/Resources";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PageNav from "./components/PageNav";
import Footer from "./components/Footer";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
  };

const App = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log("Footer visibility changed:", entry.isIntersecting);
      setIsFooterVisible(entry.isIntersecting);
    },
    { threshold: 0.1 } 
  );

  if (footerRef.current) {
    observer.observe(footerRef.current);
  }

  return () => {
    if (footerRef.current) {
      observer.unobserve(footerRef.current);
    }
  };
}, []);

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
          <Route path="/what-is-yoga/eight-limbed-path" element={<Path />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      {!isFooterVisible && <PageNav />}
      <Footer ref={footerRef}/>
    </>
  );
};

export default App;
