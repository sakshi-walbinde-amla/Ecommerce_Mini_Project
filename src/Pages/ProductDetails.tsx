import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Product {
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full md:w-1/2 rounded-lg"
      />

      <div>
        <Link to="/ProductList" className="text-2xl font-bold mb-4">
          {product.title}
        </Link>

        <p className="text-gray-700 mb-4">{product.description}</p>

        <p className="text-xl font-semibold">₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
