import React, { useState, useEffect } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return loaded ? (
    <img src={src} alt={alt} className={className} />
  ) : (
    <div className="placeholder bg-secondary rounded" style={{ height: "200px", width: "100%" }}></div>
  );
};

export default LazyImage;
