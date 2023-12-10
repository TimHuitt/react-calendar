import holidays from "../../data/holidays.js"

const Holiday = ({ selectedMonth, currentDay }) => {
  return (
    <>
      {Object.entries(holidays).map(([month, days]) => {
        const currentHolidays = days.filter((d) => d.date.split('-')[2] == currentDay)

        if (currentHolidays.length > 0 && month === selectedMonth) {
          return (
            <div key={month + "-holiday"}>
              {currentHolidays.map((day, index) => (
                <div key={index + "-day"}>
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
