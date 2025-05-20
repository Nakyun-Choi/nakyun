import React, { useState } from "react";
import recipeData from './data';
import CategoryList from "./CategoryList";
import RecipeList from "./RecipeList";
import VideoPlayer from "./VideoPlayer";
import BackButton from "./BackButton"; // ✅ 뒤로가기 버튼 추가

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  let content;

  if (selectedVideo) {
    content = <VideoPlayer videoUrl={selectedVideo} onBack={() => setSelectedVideo(null)} />;
  } else if (selectedCategory) {
    content = (
      <RecipeList
        recipes={recipeData[selectedCategory]}
        onSelect={(videoUrl) => setSelectedVideo(videoUrl)}
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
