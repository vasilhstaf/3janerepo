import './App.css'
import { ModeToggle } from './components/mode-toggle'
import Login from './Pages/Login'
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className='grid justify-items-end'>
      <ModeToggle/>
    </div>
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Login />
    </div>
    </ThemeProvider>
  )
}

export default App
