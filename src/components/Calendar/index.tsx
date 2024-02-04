import { useEffect, useState } from "react";
import "./styles.css";

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

//const declarando os meses e seus dias equivalentes
const months = {
  Janeiro: 31,
  Fevereiro: 28,
  Março: 31,
  Abril: 30,
  Maio: 31,
  Junho: 30,
  Julho: 31,
  Agosto: 31,
  Setembro: 30,
  Outubro: 31,
  Novembro: 30,
  Dezembro: 31,
};

const customDates = [
  {
    type: "block",
    date: "2024-02-18", // Pode ser do tipo Date também, se preferir
  },
  {
    type: "booked",
    date: "2024-02-10", // Pode ser do tipo Date também, se preferir
  },
];

const Calendar = () => {
  const [firstDay, setFirstDay] = useState(new Date().getDay());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [nameMonth, setNameMonth] = useState(
    Object.keys(months)[selectedMonth]
  );

  //atualizar o valor do primeiro dia da semana
  useEffect(() => {
    setFirstDay(
      new Date(selectedYear + "-" + (selectedMonth + 1) + "-1").getDay()
    );
  }, [selectedYear, selectedMonth]);

  //Tratativa para ano bissexto
  if (selectedMonth == 1) {
    if (
      (selectedYear % 4 == 0 && selectedYear % 100 != 0) ||
      selectedYear % 400 == 0
    ) {
      months.Fevereiro = 29;
    }
  }

  //retornar mês
  const beforeMonth = () => {
    let m = selectedMonth - 1 == -1 ? 11 : selectedMonth - 1;
    let y = m === 11 ? selectedYear - 1 : selectedYear;
    setNameMonth(Object.keys(months)[m]);
    setSelectedMonth(m);
    setSelectedYear(y);
  };
  //avançar mês
  const afterMonth = () => {
    let m = selectedMonth + 1 == 12 ? 0 : selectedMonth + 1;
    let y = m === 0 ? selectedYear + 1 : selectedYear;
    setNameMonth(Object.keys(months)[m]);
    setSelectedMonth(m);
    setSelectedYear(y);
  };

  //renderizar os dias do mês
  const getDaysBlocks = () => {
    let numDay = [];

    //deixar vazio dias até chega no dia da semana que começa o mÊs
    for (let i = 0; i < firstDay; i++) {
      numDay.push(<div></div>);
    }

    for (let x = 1; x < Object.values(months)[selectedMonth] + 1; x++) {
      var teste = customDates.filter(function (custom) {
        return (
          parseInt(custom.date.substring(8)) == x &&
          parseInt(custom.date.substring(5, 8)) - 1 == selectedMonth &&
          parseInt(custom.date.substring(0, 4)) == selectedYear
        );
      });

      if (teste.length > 0) {
        numDay.push(<h1>{x}</h1>);
      } else {
        numDay.push(
          <div className={x === selectedDay ? "day-block-active" : "day-block"}>
            {x}
          </div>
        );
      }
    }

    return numDay;
  };

  return (
    <div className="container">
      <div className="header-calendar">
        <button className="button-calendar" onClick={beforeMonth}>
          &lt;
        </button>
        <p>{nameMonth}</p>
        <p>{selectedYear}</p>
        <button className="button-calendar" onClick={afterMonth}>
          &gt;
        </button>
      </div>
      <div className="container-calendar">
        {/*map na const weekDays para criarmos a primeira linha do calendário
        referente aos dias da semana*/}
        {weekDays.map((day) => (
          <div key={day} className="header-week">
            {day.substring(0, 3)}
          </div>
        ))}
      </div>
      <div className="container-calendar">{getDaysBlocks()}</div>
    </div>
  );
};

export default Calendar;
