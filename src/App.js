import React, { useState } from "react";
import { recipeData } from "./data";
import CategoryList from "./CategoryList";
import RecipeList from "./RecipeList";
import VideoPlayer from "./VideoPlayer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  if (selectedVideo) {
    return <VideoPlayer videoUrl={selectedVideo} onBack={() => setSelectedVideo(null)} />;
  }

  if (selectedCategory) {
    return (
      <RecipeList
        recipes={recipeData[selectedCategory]}
        onSelect={(videoUrl) => setSelectedVideo(videoUrl)}
      />
    );
  }

  return (
    <CategoryList
      categories={Object.keys(recipeData)}
      onSelect={(category) => setSelectedCategory(category)}
    />
  );
}

export default App;
