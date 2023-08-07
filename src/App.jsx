import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserComponent from './component/basicForm/usre'
import UserInfoComponent from './component/usehookform/UserInfo'

function App() {

  return (
     <>
      <h1>React hook form Validation</h1>
      {/* <UserComponent /> */}
      <UserInfoComponent />
     </>
  )
}

export default App
