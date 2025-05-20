import React from "react";
import { Link } from "react-router-dom";

function CategoryList({ categories }) {
  return (
    <div>
      <h2>카테고리</h2>
      {categories.map((category) => (
        <div key={category}>
          <Link to={`/category/${encodeURIComponent(category)}`}>
            <button>{category}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;