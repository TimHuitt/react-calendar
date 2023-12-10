import holidays from "../../data/holidays.js"
import "./Holiday.css"

const Holiday = ({ selectedMonth, currentDay }) => {
  return (
    <>
      {Object.entries(holidays).map(([month, days]) => {
        const currentHolidays = days.filter((d) => d.date.split('-')[2] == currentDay)

        if (currentHolidays.length > 0 && month === selectedMonth) {
          return (
            <div className="Holiday">
              {currentHolidays.map((day, index) => (
                <div className="holiday-item" key={index + "-day"}>
                  <small key={day.holiday}>{day.holiday}</small>
                </div>
              ))}
            </div>
          );
        } else {
          return null
        }
      })}
    
      
    </>
  );
};

export default Holiday;
