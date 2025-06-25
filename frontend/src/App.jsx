import React from "react"
import Button from "./components/ui/button"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App
