import './App.css'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>
      {/* Background image */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          width: "100vw",
          height: "100vh",
          background: "url('/image.png') center center / cover no-repeat",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Main app content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
