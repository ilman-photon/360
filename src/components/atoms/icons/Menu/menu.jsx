import MenuIcon from "@mui/icons-material/Menu";

export const MenuComponent = ({ ...props }) => {
  const handleClick = () => {
    if (typeof props.onClick === "function") {
      // do something
      props.onClick();
    }
  };

  return (
    <MenuIcon role="button" sx={{ cursor: "pointer" }} onClick={handleClick} />
  );
};

export default MenuComponent;
