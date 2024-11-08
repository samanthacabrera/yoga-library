import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PoseList from "./components/PoseList";
import PosePage from "./components/PosePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />

      <div className="flex">
       
          <Routes>
            <Route path="/" element={<> <PoseList /> <Hero /></>}/>
            <Route path="/categories/:categoryType/:categoryValue" element={<> <PoseList /> <Hero /></>} />
            <Route path="/pose/:id" element={<> <PoseList /> <PosePage /></>} />
          </Routes>
   
      </div>

      <Footer />
    </Router>
  );
};

export default App;
