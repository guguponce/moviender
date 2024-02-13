"use client";
import React from "react";

interface ResponsiveImageProps {
  srcSet: string;
  fallbackSrc: string;
  alt: string;
  containerClassname?: string;
  imageClassname?: string;
  sizes?: string;
  blurBackground?: string;
  containerID?: string;
}
export default function ResponsiveImage({
  containerClassname,
  imageClassname,
  srcSet,
  fallbackSrc,
  sizes,
  containerID,
  blurBackground,
  alt,
}: ResponsiveImageProps) {
  const [onError, setOnError] = React.useState(false);
  const imgRef = React.useRef<HTMLSourceElement>(null);
  const handleError = () => {
    if (imgRef.current && !onError) {
      imgRef.current.srcset = fallbackSrc;
      setOnError(true);
    }
  };
  return (
    <div
      style={{
        backgroundImage: blurBackground ? `url("${blurBackground}")` : "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id={containerID}
      className={`${containerClassname}  relative h-full w-full overflow-hidden`}
    >
      <div className="h-full w-full backdrop-blur-sm">
        {srcSet ? (
          <picture
            className={`${imageClassname} absolute inset-0 h-full w-full object-cover`}
          >
            <source
              sizes={sizes}
              srcSet={srcSet}
              type="image/webp"
              ref={imgRef}
            />
            <img
              src={fallbackSrc}
              alt={alt}
              className={`${imageClassname} h-full w-full object-cover`}
              onError={handleError}
            />
          </picture>
        ) : (
          <img
            src={fallbackSrc}
            alt={alt}
            className={`${imageClassname} h-full w-full object-cover`}
          />
        )}
      </div>
    </div>
  );
}
