import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import Item from "./Item";

export default function List({ expenses, handleClearList, handleEdit, handleDelete }) {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              {...expense}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={handleClearList}>
          clear all
          <MdDeleteSweep className="btn-icon" />
        </button>
      )}
    </>
  );
}
