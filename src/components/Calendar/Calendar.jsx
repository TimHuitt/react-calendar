import holidays from "../../data/holidays.js"
import Day from "../Day/Day.jsx"

const Calendar = () => {
  return (
    <div key='Calendar'>
    {Object.entries(holidays).map(([month, days]) => (
      <div>
        <h1>{month}</h1>
        <Day days={days} />
      </div>
    ))}
    </div>
  )
}

export default Calendar