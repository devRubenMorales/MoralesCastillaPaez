import { Route, Routes } from "react-router-dom"
import Agents from "./Pages/Agents/Agents"
import Maps from "./Pages/Maps/Maps"
import Login from "./Pages/Login/Login"

function App() {

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Agents/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/mapas" element={<Maps/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App