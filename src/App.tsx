import "./App.css";
import Calendar from "./components/Calendar";
import mockCustomDates from "./mock/customDates.json"


function App() {
  return (
    <div>
      <h1>Calendário</h1>
      <Calendar customDate={mockCustomDates.customDates} />
    </div>
  );
}

export default App;
