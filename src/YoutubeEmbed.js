import React from "react";
import getYoutubeId from 'get-youtube-id';
import "./components/styles.css";

const YoutubeEmbed = ({ link }) => {
  var youtubeId = getYoutubeId(link);
  var youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}`;
  return (
    <div className="video-responsive">
      <iframe
        width="750"
        height="422"
        src={youtubeEmbedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
