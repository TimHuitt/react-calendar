import './Day.css'
import { Link } from "react-router-dom"
import Holiday from "../Holiday/Holiday.jsx"

const Day = ({ selectedMonth, selectedYear }) => {
  
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

  const dayStrings = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const date = new Date(`${selectedMonth} 1, ${selectedYear}`)
  const first = new Date(date.getFullYear(), date.getMonth(), 1).toDateString().split(' ')[0];
  const monthNum = monthStrings.indexOf(selectedMonth) + 1
  const numDays = new Date(selectedYear, monthNum, 0).getDate();

  const start = dayStrings.filter((d)=>d.includes(first))
  const startDay = dayStrings.indexOf(start[0])
  
  let count = 0
  let dayCount = startDay
  let hidden = true

  const totalCells = 7 * 6
  const cellNumbers = Array.from({ length: totalCells }, (_, index) => index)

  return (
    <>
      {cellNumbers.map((cell, index) => {
        let startCal = index === startDay
        let content
        dayCount = dayCount === 7 ? 0 : dayCount
        
        if (startCal) {
          content = dayStrings[dayCount++]
          count++
          hidden = false
        } else if (count > 0 && count < numDays) {
          content = dayStrings[dayCount++]
          count++
        } else {
          content = ''
          count = 0
          hidden = true
        }
        
        return (
          <div key={cell} className={"cell " + (hidden ? 'hidden' : '')}>
            <Link to={"/details/" + cell}>
              <div className="day-date">
                {count > 0 && count <= numDays ? count : ''}
              </div>
              <div className="day-str">
                {content}
              </div>
              { !hidden && (
                <Holiday selectedMonth={selectedMonth} currentDay={count}/>
              )}
            </Link>
          </div>
        );
      })}

    </>
  )
}

export default Day