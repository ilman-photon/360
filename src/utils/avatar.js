export function stringToColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

export function stringAvatar(name = "EyeCare User") {
  const firstCharName = name.split(" ")[0] ? name.split(" ")[0][0] : "";
  const lastCharName = name.split(" ")[1] ? name.split(" ")[1][0] : "";
  return {
    sx: {
      bgcolor: stringToColor(),
    },
    children: `${firstCharName}${lastCharName}`,
  };
}
