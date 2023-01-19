import StyledInput from "../Input/input";

export const StyledTextArea = (props) => {
  return (
    <StyledInput
      hiddenLabel
      type="textarea"
      multiline
      InputLabelProps={{
        "aria-hidden": true,
      }}
      {...props}
      inputProps={{
        readOnly: !props.isEdit,
        isTransparent: true,
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
