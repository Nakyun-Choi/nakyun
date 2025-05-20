import React from "react";
import { useParams, Link } from "react-router-dom";

function RecipeList({ data }) {
  const { category } = useParams();
  const recipes = data[category] || [];

  return (
    <div>
      <h2>{category} 상품 목록</h2>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <Link to={`/product/${encodeURIComponent(recipe.name)}`}>
            <button>{recipe.name}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;