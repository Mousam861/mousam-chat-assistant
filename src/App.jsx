import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import Hero from './Components/Hero/Hero'
import { ContextProvider } from './Components/context/Context'

const App = () => {
  return (
    <ContextProvider>
      <div className="flex">
        <SideBar />
        <Hero />
      </div>
    </ContextProvider>
  )
}

export default App