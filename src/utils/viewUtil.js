export function getLinkAria(title) {
  return {
    "aria-label": `${title} link`,
    tabIndex: 0,
  };
}
