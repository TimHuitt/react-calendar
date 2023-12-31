import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { DataProvider } from '../../context/DataContext.jsx'

import "./App.css"
import Calendar from "../Calendar/Calendar.jsx"
import Details from '../../pages/Details/Details.jsx'

const App = () => {
  const [ selectedMonth, setMonth ] = useState('July')
  const [ selectedYear, setYear ] = useState('2024')
  
  useEffect(() => {
    setMonth(selectedMonth)
  }, [selectedMonth, selectedYear])

  return (
    <>
      <DataProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={ <Calendar selectedMonth={selectedMonth} selectedYear={selectedYear} setMonth={setMonth} setYear={setYear} />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </div>
      </DataProvider>
    </>
  );
}

export default App
