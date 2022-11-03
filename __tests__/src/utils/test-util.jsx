import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MatcherFunction } from '@testing-library/react'

import store from '../../../src/store/store'

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    testStore = store,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store: testStore, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}


export const withMarkup = (query) => (text) =>
query((content, node) => {
  const hasText = (node) => node.textContent === text
  const childrenDontHaveText = Array.from(node.children).every(
    child => !hasText(child)
  )
  return hasText(node) && childrenDontHaveText
})