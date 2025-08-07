// src/components/CalendarWidget.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const CalendarWidget = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <div className="calendar-wrapper">
      <Calendar onChange={handleChange} value={selectedDate} />
    </div>
  );
};

export default CalendarWidget;
