import { useEffect, useState } from "react";
import "./styles.css";

interface ICustomDateProps {
  type: string;
  date: string;
}

interface ICalendarProps {
  customDate: ICustomDateProps[];
}

const weekDays = [
  "DOMINGO",
  "SEGUNDA",
  "TERÇA",
  "QUARTA",
  "QUINTA",
  "SEXTA",
  "SÁBADO",
];

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

const Calendar = ({ customDate }: ICalendarProps) => {
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

    //deixar vazio chegar no dia da semana que inicia o mês
    for (let i = 0; i < firstDay; i++) {
      numDay.push(<div></div>);
    }

    //renderizar os dias
    for (let x = 1; x < Object.values(months)[selectedMonth] + 1; x++) {
      var renderCustomDate = customDate.filter(function (custom) {
        return (
          parseInt(custom.date.substring(8)) == x &&
          parseInt(custom.date.substring(5, 8)) - 1 == selectedMonth &&
          parseInt(custom.date.substring(0, 4)) == selectedYear
        );
      });

      if (renderCustomDate.length > 0) {
        numDay.push(
          <div className="day-block-custom tooltip">
            {x}
            <span className="tooltip-date">{renderCustomDate[0].type}</span>
          </div>
        );
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
