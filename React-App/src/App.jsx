import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';

function App() {

  const [view , setView] = useState("bar");

  return (
    <>
      <h1>Students Marks Visualization</h1>

      <NavBar setView={setView}/>
      {view === "bar" && <BarChart/>}
      {view === "pie" && <PieChart/>}
      {view === "line" && <LineChart/>}
    </>
  )
}

export default App
