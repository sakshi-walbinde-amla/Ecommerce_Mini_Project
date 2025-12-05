import React, { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router";
import ProductDetails from "./Pages/ProductDetails";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
// import Menu from "./Pages/Menu";
import ProductList from "./Pages/ProductList";

function App() {
  const [cartCount, setCartCount] = useState<number>(0);
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header cartCount={cartCount} />
      <main style={{ padding: 20, flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Product/:id" element={<ProductDetails />} />
          <Route path="/ProductList" element={<ProductList />} />
          {/* <Route path="/ProductList" element={<Menu />} /> */}
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
