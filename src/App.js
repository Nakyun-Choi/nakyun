import React, { useState } from "react";
import recipeData from './data';
import CategoryList from "./CategoryList";
import RecipeList from "./RecipeList";
import BackButton from "./BackButton";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  let content;

  if (selectedCategory) {
    content = (
      <RecipeList
        recipes={recipeData[selectedCategory]}
      />
    );
  } else {
    content = (
      <CategoryList
        categories={Object.keys(recipeData)}
        onSelect={(category) => setSelectedCategory(category)}
      />
    );
  }

  return (
    <>
      <BackButton />
      {content}
    </>
  );
}

export default App;