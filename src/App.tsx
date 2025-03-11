import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store";
import HomePage from "./Pages/Homepage";
import YourCertificates from "./Pages/YourCertificates";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/your-certificates" element={<YourCertificates />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
