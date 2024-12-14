// src/utils.js
export const getDayOfWeek = () => {
    const today = new Date();
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    return days[today.getDay()];
  };
  
  export const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  };
  