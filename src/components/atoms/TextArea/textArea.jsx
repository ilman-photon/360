import StyledInput from "../Input/input";

export const StyledTextArea = (props) => {
  return (
    <StyledInput
      hiddenLabel
      type="textarea"
      multiline
      {...props}
      inputProps={{
        readOnly: !props.isEdit,
        isTransparent: true,
        "aria-label": "",
      }}
      sx={{
        width: "100%",
        "MuiInputBase-root": {
          height: "300px",
          fontSize: "18px",
        },
        ...props.sx,
      }}
    />
  );
};
