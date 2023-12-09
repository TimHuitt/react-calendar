import holidays from "../../data/holidays.js"
import Day from "../Day/Day.jsx"
import "./Calendar.css"

const Calendar = ({ selectedMonth }) => {

  const year = '2024'
  const date = new Date()
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const numDays = new Date(year, selectedMonth, 0).getDate();
  console.log(first.toDateString().split(' ')[0])
  const totalCells = 7 * 5
  const cellNumbers = Array.from({ length: totalCells }, (_, index) => index + 1)

  return (
    <div className="Calendar" key="Calendar">

      <div className="cal-wrapper">
        {cellNumbers.map((cell) => (
          <div className="cell">
            {cell}
          </div>
        ))}
      </div>


      {Object.entries(holidays).map(([month, days]) => (
        <div key={month}>
          {month === selectedMonth ? (
            <>
              <h1>{month}</h1>
              <Day days={days} />
            </>
          ) : (
            selectedMonth === 'all' && (
              <>
                <h1>{month}</h1><p>{numDays}</p>
                <Day days={days} />
              </>
            )
          )}
        </div>
      ))}
    </div>
  )
}

export default Calendar