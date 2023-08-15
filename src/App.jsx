import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserComponent from './component/basicForm/usre'
import UserInfoComponent from './component/usehookform/UserInfo'

function App() {

  const userData = {
    name:'Vishal',
    email:'vishal@gmail.com',
    phone:8381895574
  }

  return (
     <>
      <h1>React hook form Validation</h1>
      {/* <UserComponent /> */}
      <UserInfoComponent userData={userData} />
     </>
  )
}

export default App
