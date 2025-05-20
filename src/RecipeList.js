import React from "react";

function RecipeList({ recipes }) {
  return (
    <div>
      <h2>상품 목록</h2>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <button>{recipe.name}</button> {/* ← 'name' 사용 */}
        </div>
      ))}
    </div>
  );
}


export default RecipeList;
