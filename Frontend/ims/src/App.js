import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./product/ProductList";
import SupplierList from "./supplier/SupplierList";
import StockList from "./stock/StockList";
import OrderList from "./order/OrderList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/stock" element={<StockList />} />
          <Route path="/orders" element={<OrderList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
