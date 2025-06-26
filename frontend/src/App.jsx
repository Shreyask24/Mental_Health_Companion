import React from "react"
import Button from "./components/ui/button"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Peers from "./pages/Peers"
import Mood from "./pages/Mood"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peers" element={<Peers />} />
          <Route path="/mood" element={<Mood />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
