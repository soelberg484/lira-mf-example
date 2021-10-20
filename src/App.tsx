import MediaComponent from './components/media/media-component'
import React from 'react'

// type InitState {
//   token: string
//   type: "cover" | "logo" | "product"
//   bffPath: string
// }

const App: React.FC = () => {

  return (
    <div style={{height: '100%'}} data-e2e="media-mf">
      <MediaComponent type="logo" token="123" />
    </div>
  )
}

export default App