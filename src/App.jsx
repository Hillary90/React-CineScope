import React from "react"
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router";



function App() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
       <NavBar />
       
       <Routes >
          <Route path="/" element={<Homepage />}/>
          <Route path="/movie/:id" element={<p>this is movie pasge</p>}/>
       </Routes>
    </div>
  )
}

export default App
