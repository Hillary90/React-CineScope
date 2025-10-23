import React from "react"
import NavBar from "./components/NavBar";
import Homepage from "./utility/pages/Homepage";


function App() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
       <NavBar />
       <Homepage />
    </div>
  )
}

export default App
