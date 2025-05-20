import React, { useState } from "react";

function RecipeList({ recipes }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (name) => {
    const fileName = encodeURIComponent(name) + ".png"; // 정확한 이름 사용
    setSelectedImage("/images/" + fileName);
  };

  return (
    <div>
      <h2>상품 목록</h2>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <button onClick={() => handleClick(recipe.name)}>
            {recipe.name}
          </button>
        </div>
      ))}
      {selectedImage && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={selectedImage}
            alt="선택된 이미지"
            style={{ maxWidth: "300px", border: "1px solid #ccc", padding: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

export default RecipeList;