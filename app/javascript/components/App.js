import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Home from "../pages/Home";
import Greet from "../pages/Greet";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greetings" element={<Greet />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App
