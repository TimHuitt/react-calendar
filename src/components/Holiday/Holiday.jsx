import holidays from "../../data/holidays.js"

const Holiday = ({ days }) => {
  return (
    <>
      {days.map((day, index) => (
        <div key={index + "-day"}>
          <p>{day.date}</p>
          <p>{day.holiday}</p>
        </div>
      ))}
    </>
  )
}

export default Holiday

