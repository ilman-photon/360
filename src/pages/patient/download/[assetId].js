import { CircularProgress, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DigitalAssetsHandler from "../../../utils/digitalAssetsHandler";

export default function DownloadPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isAvailable, setIsAvailable] = useState(true);

  const downloadFile = async (id) => {
    const source = {
      _id: id,
    };
    const digitalAsset = new DigitalAssetsHandler();
    digitalAsset.setSource(source);
    const response = await digitalAsset.fetchSourceURL();
    if (response) {
      window.location.replace(response.presignedUrl);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (router.query.assetId) {
      downloadFile(router.query.assetId);
    } else {
      setIsAvailable(false);
    }
  }, [router.query]);

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        !isAvailable && (
          <Typography>File is not available or URL is wrong.</Typography>
        )
      )}
    </Stack>
  );
}
