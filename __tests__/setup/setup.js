import { render } from "@testing-library/react";


jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
      useTranslation: () => {
          return {
          t: (str) => str,
          i18n: {
              changeLanguage: () => new Promise(() => {}),
          },
          };
      },
  }));

export function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}
