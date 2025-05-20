import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryList from "./CategoryList";
import RecipeList from "./RecipeList";
import ProductPage from "./ProductPage";
import BackButton from "./BackButton";
import recipeData from "./data";

function App() {
  return (
    <>
      <BackButton />
      <Routes>
        <Route path="/" element={<CategoryList categories={Object.keys(recipeData)} />} />
        <Route path="/category/:category" element={<RecipeList data={recipeData} />} />
        <Route path="/product/:name" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;