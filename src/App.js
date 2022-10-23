import React from "react";
import Home from "./pages/home";

// COMPONENTS
import GlobalStyle from "./components/GlobalStyle";
import Search from "./components/Search";

//REACT ROUTER
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Search/>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/games/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
