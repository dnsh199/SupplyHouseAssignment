// src/pages/ManageSpecialHours.js
import React, { useEffect, useState } from "react";
import AddSpecialHoursForm from "../components/AddSpecialHoursForm";
import SpecialHours from "../components/SpecialHours";

const ManageSpecialHours = () => {
  const [allSpecialHours, setAllSpecialHours] = useState([]);

  useEffect(() => {
    const storedHours = JSON.parse(localStorage.getItem("specialHours")) || [];
    setAllSpecialHours([...storedHours, ...require("../data").specialHours.data]);
  }, []);

  const handleAdd = (newHour) => {
    const updatedHours = [...allSpecialHours, newHour];
    localStorage.setItem("specialHours", JSON.stringify(updatedHours));
    setAllSpecialHours(updatedHours);
  };

  return (
    <div>
      <h3>Manage Special Hours</h3>
      <AddSpecialHoursForm onAdd={handleAdd} />
      <SpecialHours hours={allSpecialHours} />
    </div>
  );
};

export default ManageSpecialHours;
