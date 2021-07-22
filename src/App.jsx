import React, { useState } from 'react';
import CreateBill from './components/CreateBill.jsx';
import UpdateBillDetails from './components/UpdateBillDetails.jsx';

export default function App() {
  const [billName, setBillName] = useState();
  const [status, setStatus] = useState('create');
  const [items, setItems] = useState([]);
  const [person, setPerson] = useState([]);
  return (
    <>
      {status === 'create' && (
        <CreateBill
          billName={billName}
          setBillName={setBillName}
          setStatus={setStatus}
        />
      )}
      {status === 'update' && (
        <UpdateBillDetails
          items={items}
          person={person}
          setItems={setItems}
          setPerson={setPerson}
          setStatus={setStatus}
        />
      )}
    </>
  );
}
