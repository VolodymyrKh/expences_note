import React from "react";
import { MdSend } from "react-icons/md";

export default function Form({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) {
  return (
    <form style={{ padding: "1rem" }} onSubmit={handleSubmit}>
      <fieldset
        style={{ border: "1px solid #ccc", marginBottom: "2rem" }}
        className="form-center"
      >
        <legend>add expenses</legend>
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            value={charge}
            onChange={handleCharge}
            placeholder="e.g. shopping"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmount}
            placeholder="e.g. 17"
          />
        </div>
      </fieldset>
      <button className="btn" type="submit">
        {edit ? 'edit' : 'submit'} 
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
}
