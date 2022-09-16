import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageFallback({
  src,
  fallbackSrc = "/transparent.png",
  ...props
}) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      alt={props.alt}
      src={imgSrc || "/transparent"}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        console.log("test");
        set_imgSrc(fallbackSrc);
      }}
    />
  );
}
