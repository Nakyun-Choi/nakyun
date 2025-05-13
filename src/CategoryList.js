import React from "react";

function CategoryList({ categories, onSelect }) {
  return (
    <div>
      <h2>카테고리를 선택하세요</h2>
      {categories.map((category) => (
        <button key={category} onClick={() => onSelect(category)} style={{ margin: "10px" }}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
