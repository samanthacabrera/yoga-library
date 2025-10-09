import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./components/Home";
import ArticleWrapper from "./components/ArticleWrapper";
import PoseList from "./components/PoseList";
import PosePage from "./components/PosePage";
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
          <Route path="/articles/:slug" element={<ArticleWrapper />} />
          <Route path="/poses" element={<PoseList />} />
          <Route path="/poses/:name" element={<PosePage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
