import React, { useEffect } from 'react'

import { H1Bold } from './components/shared/typography';
import { IUser } from './components/shared/shared.interface';
import MediaComponent from './components/media/media-component'

type InitState = {
  token: string
  mediaCategory: "cover" | "logo" | "product"
  path: string
  mfReady: () => void
  text?: string
  user: IUser
}

const App: React.FC<InitState> = ({ mfReady, path, text, mediaCategory, user }: InitState) => {
  useEffect(() => {
    console.log(window.location.origin);
    
    if(window.location.origin !== "http://localhost:3005") {
      mfReady()
    }    
  }, [mfReady])
  return (
    <div style={{height: '100%'}} data-e2e="media-mf">
      <H1Bold>{user && user.name ? `Hello ${user.name}` : 'Hello'}</H1Bold>
      <MediaComponent type={mediaCategory} user={user} />
    </div>
  )
}

export default App