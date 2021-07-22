import axios from 'axios';
import React, { useRef } from 'react';

let peopleSplitting = [];
export default function UpdateBillDetails(props) {
  /* eslint-disable react/prop-types */
  const { items, setItems, person, setPerson, setStatus } = props;

  const itemInput = useRef(null);
  const itemPriceInput = useRef(null);
  const name = useRef(null);
  const calculateBill = () => {
    let totalBill = 0;
    items.forEach((eachItem) => {
      totalBill = +totalBill + eachItem.price;
    });
    return totalBill;
  };
  const totalBillAmount = calculateBill();
  return (
    <>
      <input ref={itemInput} placeholder="Item input" />
      <br />
      <input ref={itemPriceInput} placeholder="Item Price input" />
      <button
        type="button"
        onClick={() => {
          setItems([
            ...items,
            {
              item: itemInput.current.value,
              price: itemPriceInput.current.value,
            },
          ]);
          itemInput.current.value = '';
          itemPriceInput.current.value = '';
        }}
      >
        Add Item
      </button>
      <input ref={name} placeholder="Person input" />
      <button
        type="button"
        onClick={() => {
          setPerson([...person, { name: name.current.value, amount: 0 }]);
          name.current.value = '';
        }}
      >
        Add Item
      </button>
      <div>
        <h6>Item List</h6>
        {items.map((item, index) => (
          <div key={index}>
            <span>{item.item}</span>
            <span>{item.price}</span>
            <br />
            {person.map((ppl, indexNum) => (
              <div key={indexNum}>
                <input
                  type="checkbox"
                  id={ppl.name}
                  value={ppl.name}
                  onClick={(e) => {
                    const personClicked = e.target.value;
                    if (peopleSplitting.includes(personClicked)) {
                      const indexOfPerson =
                        peopleSplitting.indexOf(personClicked);
                      peopleSplitting.splice(indexOfPerson, 1);
                    } else {
                      peopleSplitting.push(personClicked);
                    }
                    console.log(peopleSplitting);
                  }}
                />
                <label for={ppl.name}>{ppl.name}</label>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const amountToBePaid = item.price / peopleSplitting.length;
                person.forEach((eachPerson, indexMapped) => {
                  if (peopleSplitting.includes(eachPerson.name)) {
                    person[indexMapped].amount += amountToBePaid;
                    setPerson([...person]);
                    console.log(person);
                  }
                });
                peopleSplitting = [];
              }}
            >
              Add People
            </button>
          </div>
        ))}
        <h6>Total:{totalBillAmount}</h6>
      </div>
      <div>
        <h6>Amount Owed</h6>
        {person.map((x, number) => (
          <div key={number}>
            <span>{x.name}</span>
            <span>${x.amount}</span>
          </div>
        ))}
      </div>
      <button
        type="submit"
        onClick={() => {
          axios
            .post('/updateBill', { total: totalBillAmount, person })
            .then(setStatus('create'));
        }}
      >
        Save Bill
      </button>
    </>
  );
}
