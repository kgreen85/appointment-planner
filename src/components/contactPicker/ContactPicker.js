import React from "react";

export const ContactPicker = ({contacts, onChange, name}) => {
  return (
    <>
      <select name={name} onChange={onChange}>
        <option key={-1} value={""} selected="selected">
          No Contact Selected
        </option>
        {contacts.map((contact) => {
          return (
            <option value={contact} key={contact}>
              {contact}
            </option>
          );
        })}
      </select>
    </>
  );
};
