import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageFallback({
  src = "/transparent.png",
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
      src={imgSrc || "/transparent.png"}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
}
