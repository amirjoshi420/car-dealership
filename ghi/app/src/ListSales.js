import { useState, useEffect } from 'react';

function CustomerList() {
  const [sales, setSales] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8090/api/customers/');
      if (response.ok) {
        const customers = await response.json();
        setCustomers(customers);
      } else {
        console.error('An error occurred fetching the data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="my-5 container">
      <div className="row">
        <h1>Customer List</h1>
        <table className="table table-striped m-3">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(name => (
              <tr key={name.id}>
                <td>{name.first_name}</td>
                <td>{name.last_name}</td>
                <td>{name.address}</td>
                <td>{name.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
