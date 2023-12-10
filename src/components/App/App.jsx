import "./App.css"
import Calendar from "../Calendar/Calendar.jsx"

const App = () => {
  const selectedMonth = 'March'
  
  
  return (
    <div className="App">
      <Calendar selectedMonth={ selectedMonth } />
    </div>
  );
}

export default App
