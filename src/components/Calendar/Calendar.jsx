import holidays from "../../data/holidays.js"
import Holiday from "../Holiday/Holiday.jsx"
import Day from "../Day/Day.jsx"
import "./Calendar.css"

const Calendar = ({ selectedMonth }) => {

  const year = '2024'
  const date = new Date()
  const first = new Date(date.getFullYear(), date.getMonth(), 1).toDateString().split(' ')[0];
  
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

  const monthNum = monthStrings.indexOf(selectedMonth) + 1
  const numDays = new Date(year, monthNum, 0).getDate();

  const dayStrings = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const start = dayStrings.filter((d)=>d.includes(first))
  const startDay = dayStrings.indexOf(start[0])
  let count = 0
  let dayCount = startDay
  
  const totalCells = 7 * 6
  const cellNumbers = Array.from({ length: totalCells }, (_, index) => index)

  return (
    <div className="Calendar" key="Calendar">
      <h1>{ selectedMonth }</h1>
      <div className="cal-wrapper" key="cal-wrapper">
        <Day selectedMonth={selectedMonth} />
        {/* {cellNumbers.map((cell, index) => {
          let startCal = index === startDay
          let content
          
          dayCount = dayCount === 7 ? 0 : dayCount
          
          if (startCal) {
            content = dayStrings[dayCount++]
            count++
          } else if (count > 0 && count < numDays) {
            content = dayStrings[dayCount++]
            count++
          } else {
            content = ''
            count = 0
          }
  
          return (
            <div key={cell} className="cell">
              <div className="day-date">
                {count > 0 && count <= numDays ? count : ''}
              </div>
              
              <div className="day-str">
                {content}
              </div>

            </div>
          );
        })} */}
      </div>


      
    </div>
  )
}

export default Calendar