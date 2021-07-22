import React from 'react';
import axios from 'axios';

export default function CreateBill(props) {
  /* eslint-disable react/prop-types */
  const { billName, setBillName, setStatus } = props;
  return (
    <>
      <h4>CreateBill</h4>
      <input
        value={billName}
        onChange={(e) => setBillName(e.target.value)}
        placeholder="Bill Name Input"
      />
      <button
        type="submit"
        onClick={() => {
          axios.post('/bill', { billName }).then(setStatus('update'));
        }}
      >
        Submit
      </button>
    </>
  );
}
