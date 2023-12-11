import { useState, useEffect } from 'react'
import { useDataContext } from '../../context/DataContext.jsx'
import Day from "../Day/Day.jsx"
import "./Calendar.css"

const Calendar = ({ 
  selectedMonth, 
  setMonth, 
  selectedYear, 
  setYear,
}) => {

  const { resetData } = useDataContext()

  useEffect(() => {
    resetData()
  }, [])

  const monthStrings = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const startYear = 1900
  const endYear = 2050
  const years = Array.from({ length: endYear - startYear }, (_, index) => startYear + index)

  const month = monthStrings.indexOf(selectedMonth)
  const nextMonth = month === 11 ? 'January' : monthStrings[month + 1]
  const prevMonth = month === 0 ? 'December' : monthStrings[month - 1]

  return (
    <div className="Calendar" key="Calendar">
      
      <div className="month-select">
        <button onClick={()=>{setMonth(prevMonth)}}>{"<"}</button>
        <h1>{ selectedMonth }</h1>
        <button onClick={()=>{setMonth(nextMonth)}}>{">"}</button>
      </div>

      <div className="year-select">
        <select value={selectedYear} onChange={(e) => setYear(e.target.value)}>
         {years.map((year) => {
          return <option value={year}>{year}</option>
         })}
        </select>
      </div>

      <div className="cal-wrapper" key="cal-wrapper">
        <Day selectedMonth={selectedMonth} selectedYear={selectedYear} />
      </div>
    </div>
  )
}

export default Calendar