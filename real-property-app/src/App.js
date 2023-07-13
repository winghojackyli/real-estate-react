import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/Footer";
import Listings from "./components/listings/Listings";

import Admin from "./components/admin/Admin";
import News from "./components/news/News";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
