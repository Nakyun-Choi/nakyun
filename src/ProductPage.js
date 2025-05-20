import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { name } = useParams();
  const imagePath = `/images/${encodeURIComponent(name)}.png`;

  return (
    <div>
      <h2>{name}</h2>
      <img src={imagePath} alt={name} style={{ maxWidth: "300px" }} />
    </div>
  );
}

export default ProductPage;