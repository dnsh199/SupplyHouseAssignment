// src/components/AddSpecialHoursForm.js
import React, { useState } from "react";

const AddSpecialHoursForm = ({ onAdd }) => {
  const [date, setDate] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHour = { id: Date.now(), date, openTime, closeTime, reason };
    onAdd(newHour);
    setDate("");
    setOpenTime("");
    setCloseTime("");
    setReason("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Special Hours</h3>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="time" value={openTime} onChange={(e) => setOpenTime(e.target.value)} required />
      <input type="time" value={closeTime} onChange={(e) => setCloseTime(e.target.value)} required />
      <input
        type="text"
        placeholder="Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddSpecialHoursForm;
