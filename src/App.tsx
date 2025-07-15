import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SimpleDashboard from './Pages/SimpleDashboard'
import SimpleInfo from './Pages/SimpleInfo'
import SimpleLogin from './Pages/SimpleLogin'
import Lend from './Pages/Lend'

function App() {
  return (
        <Router>
          <Routes>
        <Route path="/" element={<SimpleLogin />} />
        <Route path="/dashboard" element={<SimpleDashboard />} />
        <Route path="/lend" element={<Lend />} />
        <Route path="/info" element={<SimpleInfo />} />
          </Routes>
        </Router>
  )
}

export default App
