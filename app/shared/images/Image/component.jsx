import React from 'react';

const ImageComponent = ({ className = '', path, alt }) => (
  <img className={className} src={`https://image.tmdb.org/t/p/original/${path}`} alt={alt} />
);

export default ImageComponent;
