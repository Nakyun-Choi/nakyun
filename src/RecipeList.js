import React from "react";

function RecipeList({ recipes, onSelect }) {
  return (
    <div>
      <h2>상품 목록</h2>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <button>{recipe.name}</button>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
