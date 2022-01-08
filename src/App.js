import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./screens/Shop";
import Pages from "./screens/Pages";
import { Blog } from "./screens/Blog";
import Contact from "./screens/Contact";


function App() {
  
  return (
    <>
      <Header />
      <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Pages" element={<Pages/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
