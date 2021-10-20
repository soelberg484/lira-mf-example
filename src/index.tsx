import { render, unmountComponentAtNode } from 'react-dom'

import App from './App'
import React from 'react'

declare global {
  interface Window {
    renderMedia: any
    unmountMedia: any
  }
}

window.renderMedia = (element: Element, rest: any) => {
  render(
    <React.StrictMode>
      <App {...rest} />
    </React.StrictMode>,
    element
  )
}

window.unmountMedia = (element: Element) => unmountComponentAtNode(element)
