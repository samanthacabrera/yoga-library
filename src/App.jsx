import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PoseList from "./components/PoseList";
import Hero from "./components/Hero";
import CategoryPage from "./components/CategoryPage";
import PosePage from "./components/PosePage";
import Guide from "./components/Guide";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

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
            <Route path="/articles" element={<><PoseList /> <ArticleList /></>} /> 
            <Route path="/articles/:slug" element={<><PoseList /> <Article /></>} />
            <Route path="/resources" element={<><PoseList /> <Resources /></>} />
          </Routes>
   
      </div>

      <Footer />
    </Router>
  );
};

export default App;
