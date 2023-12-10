
import { useState, useEffect } from 'react'
import "./App.css"
import Calendar from "../Calendar/Calendar.jsx"

const App = () => {
  const [ selectedMonth, setMonth ] = useState('July')
  const [ selectedYear, setYear ] = useState('2024')
  
  useEffect(() => {
    setMonth(selectedMonth)
  }, [selectedMonth, selectedYear])

  return (
    <div className="App">
      <Calendar selectedMonth={selectedMonth} selectedYear={selectedYear} setMonth={setMonth} setYear={setYear}/>
    </div>
  );
}

export default App
