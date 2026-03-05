import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="min-h-screen min-w-screen bg-gray-200 text-black">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App;
