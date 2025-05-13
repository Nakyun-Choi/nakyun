import React from "react";

function RecipeList({ recipes, onSelect }) {
  return (
    <div>
      <h2>레시피 목록</h2>
      {recipes.map((recipe) => (
        <div key={recipe.title}>
          <button onClick={() => onSelect(recipe.videoUrl)}>{recipe.title}</button>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
