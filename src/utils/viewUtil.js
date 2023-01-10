export function getLinkAria(title) {
  return {
    "aria-label": `${title}`,
    role: "link",
    tabIndex: 0,
  };
}

export function showOrReturnEmpty(data, noDash) {
  return data || (noDash ? "" : "-");
}
