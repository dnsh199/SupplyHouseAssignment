// src/data.js

export const regularHours = {
    statusCode: 0,
    status: true,
    errorMsg: null,
    data: [
      { id: 1, dayOfWeek: "MONDAY", openTime: "08:00:00", closeTime: "19:45:00" },
      { id: 2, dayOfWeek: "TUESDAY", openTime: "08:00:00", closeTime: "19:45:00" },
      { id: 3, dayOfWeek: "WEDNESDAY", openTime: "08:00:00", closeTime: "19:45:00" },
      { id: 4, dayOfWeek: "THURSDAY", openTime: "08:00:00", closeTime: "19:45:00" },
      { id: 5, dayOfWeek: "FRIDAY", openTime: "09:00:00", closeTime: "19:45:00" },
      { id: 6, dayOfWeek: "SATURDAY", openTime: "09:00:00", closeTime: "17:45:00" },
      { id: 7, dayOfWeek: "SUNDAY", openTime: "09:00:00", closeTime: "17:45:00" },
    ],
    successMessage: "Customer Service hours found",
  };
  
  export const specialHours = {
    statusCode: 0,
    status: true,
    errorMsg: null,
    data: [
      { id: 1, date: "2024-12-25", openTime: "10:00:00", closeTime: "16:00:00", reason: "Christmas" },
    ],
    successMessage: "Special hours found",
  };
  