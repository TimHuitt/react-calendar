import holidays from "../../data/holidays.js"
import Gif from "../Gif/Gif.jsx"

import "./Holiday.css"

const Holiday = ({ selectedMonth, currentDay }) => {
  return (
    <>
      {Object.entries(holidays).map(([month, days]) => {
        const currentHolidays = days.filter((d) => d.date.split('-')[2] == currentDay)
        if (currentHolidays.length > 0 && month === selectedMonth) {
          
          const day = currentHolidays[0].date
          
          const holiday = currentHolidays[0].holiday.length < 60 
            ? currentHolidays[0].holiday
            : ''

          return (
            <div className="Holiday">
                <>
                  <Gif newQuery={ holiday } />
                  <div className="holiday-item" key={day}>
                    <small key={holiday}>{holiday}</small>
                  </div>
                </>
            </div>
          );

        } else {
          return month === selectedMonth
          ? <Gif newQuery={''} />
          : null
        }
      })}
      
      
    
    </>
  );
};

export default Holiday;
