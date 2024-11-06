import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PoseList from "./components/PoseList";
import PosePage from "./components/PosePage";

const App = () => {
  return (
    <Router>

      <Header />

      <div className="flex">
        <Routes>
          <Route path="/" element={<><PoseList /><Hero /></>}/>
          <Route path="/categories/:category" element={<><PoseList /><Hero /></>} />
          <Route path="/pose/:id" element={<><PoseList /><PosePage /></>} />
        </Routes>
      </div>

    </Router>
  );
};

export default App;
