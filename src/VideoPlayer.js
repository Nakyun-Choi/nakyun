import React from "react";

function VideoPlayer({ videoUrl, onBack }) {
  return (
    <div>
      <button onClick={onBack}>뒤로가기</button>
      <div style={{ marginTop: "20px" }}>
        <iframe
          width="100%"
          height="400"
          src={videoUrl}
          title="레시피 영상"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPlayer;
