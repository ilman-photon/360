export function stringToColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

export function stringAvatar(name = "EyeCare User") {
  return {
    sx: {
      bgcolor: stringToColor(),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
