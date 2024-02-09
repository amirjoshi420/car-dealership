import React, { useState, useEffect } from 'react';

function SalesList() {
  const [sales, setSales] = useState([]);
  const [salespeople, setSalesPeople] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);

  const getData = async () => {
    try {
      const response1 = await fetch('http://localhost:8090/api/salespeople');
      const response2 = await fetch('http://localhost:8090/api/customers');
      const response3 = await fetch('http://localhost:8100/api/automobiles');
      const response4 = await fetch('http://localhost:8090/api/sales'); // Fetch sales data

    //   console.log('Response 1:', await response1.json());
    //   console.log('Response 2:', await response2.json());
    //   console.log('Response 3:', await response3.json());

      if (response1.ok && response2.ok && response3.ok && response4.ok) {
        const salespeople  = await response1.json();
        const customers  = await response2.json();
        const automobiles = await response3.json();
        const salesData = await response4.json();


        setSalesPeople(salespeople.salesperson);
        setCustomers(customers);
        setAutomobiles(automobiles);
        setSales(salesData.sales); // Access the "sales" key

        // console.log('Salespeople:', salespeople);
        // console.log('customers', customers);
        // console.log('automobiles', automobiles);
        // console.log('sales', salesData);

      } else {
        console.error("An error occurred while trying to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

//   console.log(salespeople)
//   console.log(customers)
//   console.log(automobiles)
console.log(sales)

//   const combinedData = salespeople.concat(customers).concat(automobiles).concat;
//   console.log(combinedData)

  return (
    <div className="my-5 container">
      <div className="row">
        <h1>Sales List</h1>
        <table className="table table-striped m-5">
          <thead>
            <tr>
              <th>Salesperson Employee ID</th>
              <th>Salesperson Name</th>
              <th>Customer Name</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {sales.map(sale => {
            return (
                <tr key={sale.id}>
                <td>{sale.salesperson.employee_id}</td>
                <td>{sale.salesperson.first_name}</td>
                <td>{sale.customer.first_name}</td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
                </tr>
            );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );



}


export default SalesList;
