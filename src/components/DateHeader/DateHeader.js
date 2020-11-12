import React from "react";
import "./DateHeader.scss";
export const DateHeader = () => {
  const [dayOfWeek, month, day, year] = new Intl.DateTimeFormat("en-En", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
    .format(new Date())
    .split(" ");

  return (
    <div className="DateHeader">
      <div className="left">
        <p className="day">{day.slice(0, day.length - 1)}</p>
        <div className="monthandyear">
          <p className="month">{month.slice(0, 3).toUpperCase()}</p>
          <p className="year">{year}</p>
        </div>
      </div>
      <div className="right">
        <p className="week-day">
          {dayOfWeek.slice(0, dayOfWeek.length - 1).toUpperCase()}
        </p>
      </div>
    </div>
  );
};
