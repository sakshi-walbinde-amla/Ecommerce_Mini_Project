import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data.products));
  //   }, []);
  
  useEffect(() => {
    console.log("Fetching products...");

    fetch("https://dummyjson.com/products")
      .then((res) => {
        console.log("Raw response:", res);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        console.log("Products array:", data.products);
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer border rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full object-cover mb-3"
            />

            <h2 className="font-semibold text-sm mb-1">{product.title}</h2>

            <p className="text-gray-700 font-medium">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
