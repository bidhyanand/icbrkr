import Image from "next/image";
import React from "react";

const CustomImage = ({ src, alt, width, height, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default CustomImage;
