import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./_ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        src={`http://localhost:3333/product_img/${product.image}`}
        alt={product.title}
      />
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
