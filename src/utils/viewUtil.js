export function getLinkAria(title) {
  return {
    "aria-label": `${title}`,
    role: "link",
    tabindex: 0,
  };
}
