import { useState } from "react";
import DaysBlock from "./index.tsx";

//const declarando os dias da semana
const weekDays = [
  "DOMINGO",
  "SEGUNDA",
  "TERÇA",
  "QUARTA",
  "QUINTA",
  "SEXTA",
  "SÁBADO",
];

/*const customDates = [
  {
    type: "block",
    date: "2024-02-05", // Pode ser do tipo Date também, se preferir
  },
  {
    type: "booked",
    date: "2024-05-25", // Pode ser do tipo Date também, se preferir
  },
];*/

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
  );

  /*array para dias do Custom Dates
  const arrayCustomDates = () => {
    let daysCustom = [];

    for (let i = 0; i < customDates.length; i++) {
      var valor1 = customDates[i].date.split("-");
      daysCustom.push(parseInt(valor1[2]));
    }

    return daysCustom;
  };*/

  return (
    <div className="container">
      <div className="container-calendar">
        {/*map na const weekDays para criarmos a primeira linha do calendário
        referente aos dias da semana*/}
        {weekDays.map((day) => (
          <div key={day} className="header-week">
            {day.substring(0, 3)}
          </div>
        ))}
      </div>
      <DaysBlock />
    </div>
  );
};

export default Calendar;
