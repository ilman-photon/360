import { render } from "@testing-library/react";

export function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}
