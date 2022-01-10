import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./screens/Pages";
import { Blog } from "./screens/Blog";
import Contact from "./screens/Contact";
import Shop from "./screens/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Home />
      <Footer />
    </>
  );
}

export default App;
