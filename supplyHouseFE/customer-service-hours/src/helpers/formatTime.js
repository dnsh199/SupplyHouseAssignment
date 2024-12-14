// src/helpers/formatTime.js
export const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    const isPM = parseInt(hour, 10) >= 12;
    const formattedHour = isPM ? parseInt(hour, 10) - 12 || 12 : parseInt(hour, 10);
    const period = isPM ? "PM" : "AM";
    return `${formattedHour}:${minute} ${period}`;
  };
  