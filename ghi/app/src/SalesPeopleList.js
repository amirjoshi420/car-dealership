import { useState, useEffect } from 'react';

function SalesPersonList() {
  const [names, setNames] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8090/api/salespeople/');
      if (response.ok) {
        const { salesperson } = await response.json(); // Changed property name to match the response
        setNames(salesperson);
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
        <h1>Sales Person List</h1>
        <table className="table table-striped m-3">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {names.map(name => (
              <tr key={name.id}>
                <td>{name.employee_id}</td>
                <td>{name.first_name}</td>
                <td>{name.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesPersonList;
