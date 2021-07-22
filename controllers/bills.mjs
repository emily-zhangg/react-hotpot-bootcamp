import { resolve } from 'path';

export default function initBillsController(db) {
  const create = async (request, response) => {
    const createBill = await db.Bill.create({
      name: request.body.billName,
    });
    console.log(createBill);
    const billIdData = createBill.dataValues.id;
    response.cookie('billId', billIdData);
    response.sendFile(resolve('dist', 'main.html'));
  };
  const update = async (req, res) => {
    console.log('hiiii');
    const billData = await db.Bill.update(
      { total: req.body.total },
      { where: { id: req.cookies.billId } }
    );
    console.log(billData);
    req.body.person.forEach(async (element) => {
      await db.Person.create({
        name: element.name,
        amount: element.amount,
        billId: req.cookies.billId,
      });
    });
    res.sendFile(resolve('dist', 'main.html'));
  };
  return { create, update };
}
