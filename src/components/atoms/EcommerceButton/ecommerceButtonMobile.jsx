import { Box, Button } from "@mui/material";

export default function EcommerceButtonMobile({ menu = [], isDesktop }) {
  return (
    <Box
      sx={{
        display: isDesktop ? "none" : "flex",
        padding: "8px 20px",
        backgroundColor: "#DDF1F3",
        gap: "24px",
        justifyContent: "space-between",
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
