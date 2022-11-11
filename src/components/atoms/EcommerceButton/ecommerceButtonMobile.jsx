import { Box, Button } from "@mui/material";
import Image from "next/image";

const iconLinkEcomm = "/icon-link-ecomm-mobile.png";

export default function EcommerceButtonMobile({
  menu = [
    {
      icon: <Image alt="" src={iconLinkEcomm} width={18} height={18} />,
      text: "Shop for Contacts",
      onClick: () => {
        window.open("https://www.clarksoneyecare.com/");
      },
    },
  ],
}) {
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          sm: "none",
        },
        padding: "8px 33px",
        backgroundColor: "#DDF1F3",
        gap: "24px",
      }}
    >
      {menu.map((item, index) => (
        <Button
          key={index}
          variant="text"
          startIcon={item.icon}
          onClick={item.onClick}
          data-testid={`ecommerce-mobile-button-${index}`}
          sx={{
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "18px",
            color: "#003B4A",
            textTransform: "unset",
            padding: 0,
          }}
        >
          {item.text}
        </Button>
      ))}
    </Box>
  );
}
