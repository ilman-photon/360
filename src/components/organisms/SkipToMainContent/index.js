import { StyledButton } from "../../atoms/Button/button";

const ButtonSkipToContent = () => {
  const handleOnClickFunction = () => {
    if (document.getElementsByName("main-content")[0]) {
      document.getElementsByName("main-content")[0].focus();
    }
    document.getElementById("skip-main-content").blur();
  };

  return (
    <StyledButton
      id="skip-main-content"
      variant="contained"
      data-testid="skip-main-content"
      sx={{
        background: "#007e8f",
        position: "absolute",
        top: "10px",
        left: "-999999px",
        "z-index": "999",
        opacity: "0",
        ":focus": {
          left: "10%",
          transform: "translateX(-50%)",
          opacity: "1",
        },
      }}
      onClick={handleOnClickFunction}
    >
      Skip To Main Content
    </StyledButton>
  );
};

export default ButtonSkipToContent;
