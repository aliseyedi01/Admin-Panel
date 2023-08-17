// react
import React, { useState, useRef, useEffect } from "react";
import blog from "@assets/placeholder/blog.jpg";
import product from "@assets/placeholder/product.png";
// types
type Props = {
  src: string;
  className: string;
  alt: string;
  type: "product" | "blog";
};

const LazyImage: React.FC<Props> = ({ src, className, alt, type }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const [hasError, setHasError] = useState(false);

  let placeHolder;

  switch (type) {
    case "blog":
      placeHolder = blog;
      break;
    case "product":
      placeHolder = product;
      break;
    default:
      placeHolder = "";
      break;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      },
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <>
      <img
        ref={imageRef}
        className={isVisible ? className : "-mb-2 w-full animate-pulse rounded-t-md  bg-red-500 "}
        src={hasError ? placeHolder : isVisible ? src : placeHolder}
        alt={alt}
        onError={handleError}
      />
    </>
  );
};

export default LazyImage;
