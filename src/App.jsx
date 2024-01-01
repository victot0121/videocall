import { Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Home from "./components/Home"
import Room from "./components/Room"

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roonID" element={<Room />} />
      </Routes>
    </>
  )
}

export default App
