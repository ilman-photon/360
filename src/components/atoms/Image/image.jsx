import Image from "next/image";
import { useEffect, useState } from "react";
import DigitalAssetsHandler from "../../../utils/digitalAssetsHandler";

export default function ImageFallback({
  source,
  fallbackSrc = "/transparent.png",
  ...props
}) {
  const [imageSource, setImageSource] = useState("/transparent.png");
  const digitalAsset = new DigitalAssetsHandler();

  const fetchImageURL = async () => {
    digitalAsset.setSource(source);
    const src = await digitalAsset.fetchSourceURL();
    if (src) setImageSource(src.presignedUrl);
  };

  useEffect(() => {
    setImageSource(fallbackSrc);
    if (source) fetchImageURL();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  return (
    <Image
      {...props}
      alt={props.alt}
      src={imageSource}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImageSource(fallbackSrc);
        }
      }}
      onError={() => {
        setImageSource(fallbackSrc);
      }}
    />
  );
}
