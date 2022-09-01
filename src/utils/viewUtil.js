export function getLinkAria(title) {
  return {
    "aria-label": `${title}`,
    role: "link",
    tabIndex: 0,
  };
}
