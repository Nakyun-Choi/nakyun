import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { name } = useParams();
  const imagePath = `/images/${encodeURIComponent(name)}.png`;

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <img
        src={imagePath}
        alt={name}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default ProductPage;