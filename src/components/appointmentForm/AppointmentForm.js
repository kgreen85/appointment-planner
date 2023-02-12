import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactName = () => {
    return contacts.map((contact) => contact.name);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input  
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Appointment Title"
          />
        </label>
        <br />
        <label>
          <input 
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            min={getTodayString()}
          />
        </label>
        <br />
        <label>
          <input 
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <ContactPicker 
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Appointment With"
            contacts={getContactName()}
          />
        </label>
        <br />
        <input type="submit" value="Add Appointment" />
      </form>
    </>
  );
};
