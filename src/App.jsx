import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PoseList from "./components/PoseList";
import Hero from "./components/Hero";
import CategoryPage from "./components/CategoryPage";
import PosePage from "./components/PosePage";
import Guide from "./components/Guide";
import Articles from "./components/Articles";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";

const App = () => {
  return (
    <Router>
      
      <Header />

      <div className="flex">
       
          <Routes>
            <Route path="/" element={<> <PoseList /> <Hero /></>} />
            <Route path="/categories/all" element={<> <PoseList /> <CategoryPage /></>} />
            <Route path="/categories/:categoryType/:categoryValue" element={<> <PoseList /> <CategoryPage /></>} />
            <Route path="/pose/:id" element={<> <PoseList /> <PosePage /></>} />
            <Route path="/beginners-guide" element={<> <PoseList /> <Guide /></>} />
            <Route path="/articles" element={<><PoseList /> <Articles /></>} /> 
            <Route path="/resources" element={<><PoseList /> <Resources /></>} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
   
      </div>

      <Footer />
    </Router>
  );
};

export default App;
