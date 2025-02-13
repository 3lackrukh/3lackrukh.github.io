// src/components/MediaDisplay.tsx
import React from 'react';

interface MediaProps {
  type: 'image' | 'embed';
  source: string;
  title: string;
}

const MediaDisplay: React.FC<MediaProps> = ({ type, url, title }) => {
  if (type === 'embed') {
    return (
      <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio container */}
        <iframe
          src={url}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="fullscreen"
          allowFullScreen
          title={title}
        />
      </div>
    );
  }
  
  return (
    <img 
      src={url} 
      alt={title} 
      className="w-full h-64 object-cover"
    />
  );
};

export default MediaDisplay;