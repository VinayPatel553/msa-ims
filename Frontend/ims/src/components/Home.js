import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="text-center py-5">
      <h1>Welcome to Inventory Management System</h1>
      <p className="lead">
        Manage products, suppliers, stock and orders easily
      </p>
      <div className="d-flex justify-content-center gap-3">
        <a className="btn btn-lg btn-primary" href="/products">
          Products
        </a>
        <a className="btn btn-lg btn-outline-dark" href="/suppliers">
          Suppliers
        </a>
        <a className="btn btn-lg btn-success" href="/stock">
          Stock
        </a>
        <a className="btn btn-lg btn-warning" href="/orders">
          Orders
        </a>
      </div>
    </div>
  );
}
