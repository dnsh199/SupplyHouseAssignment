// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { regularHours, specialHours } from "../data";
import RegularHours from "../components/RegularHours";
import SpecialHours from "../components/SpecialHours";

const Home = () => {
  const [todaySpecialHours, setTodaySpecialHours] = useState([]);

  useEffect(() => {
    const today = new Date();
    const todayDayOfWeek = today.toLocaleString("en-US", { weekday: "long" }).toUpperCase(); // e.g., "MONDAY"
    const currentDayRegularHours = regularHours.data.find(
      (hour) => hour.dayOfWeek === todayDayOfWeek
    );

    // Get today's date in "YYYY-MM-DD" format
    const todayDate = today.toISOString().split("T")[0];

    // Fetch all special hours (localStorage + default JSON data)
    const storedSpecialHours =
      JSON.parse(localStorage.getItem("specialHours")) || specialHours.data;

    // Filter special hours for today
    const todaySpecials = storedSpecialHours.filter(
      (hour) => hour.date === todayDate
    );

    // Filter today's specials that overlap with regular hours
    const overlappingSpecials = todaySpecials.filter((special) =>
      isOverlapping(special, currentDayRegularHours)
    );

    setTodaySpecialHours(overlappingSpecials);
  }, []);

  // Check if special hours overlap with regular hours
  const isOverlapping = (special, regular) => {
    const specialStart = new Date(`1970-01-01T${special.openTime}`);
    const specialEnd = new Date(`1970-01-01T${special.closeTime}`);
    const regularStart = new Date(`1970-01-01T${regular.openTime}`);
    const regularEnd = new Date(`1970-01-01T${regular.closeTime}`);

    return (
      specialStart >= regularStart &&
      specialStart < regularEnd &&
      specialEnd > regularStart &&
      specialEnd <= regularEnd
    );
  };

  return (
    <div>
      <RegularHours />
      {todaySpecialHours.length > 0 && (
        <SpecialHours hours={todaySpecialHours} />
      )}
    </div>
  );
};

export default Home;
