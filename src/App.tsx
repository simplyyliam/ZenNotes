import { HashRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./Pages/MainPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<MainPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
