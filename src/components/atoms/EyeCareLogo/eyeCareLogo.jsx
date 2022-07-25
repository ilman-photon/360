import EyeCare from "../../../assets/icons/eyeCareLogo.svg";

export const EyeCareLogo = ({ ...props }) => {
  const handleClick = (e) => {
    if (typeof props.onClick === "function") {
      // do something
      props.onClick();
    }
  };

  return (
    <EyeCare role="button" sx={{ cursor: "pointer" }} onClick={handleClick} />
  );
};

export default EyeCareLogo;
