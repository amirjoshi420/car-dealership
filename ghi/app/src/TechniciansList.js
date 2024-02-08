
import { useState, useEffect} from 'react';

function TechnicianList() {
  const [names, setNames] = useState([])

  const getData = async ()=> {
    const response = await fetch('http://localhost:8080/api/technicians/');
    if (response.ok) {
      const { technicians } = await response.json();
      setNames(technicians);
    } else {
      console.error('An error occurred fetching the data')
    }
  }

  useEffect(()=> {
    getData()
  }, []);

  return (
    <div className="my-5 container">
      <div className="row">
        <h1>Technicians</h1>

        <table className="table table-striped m-3">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {names.map(name => {
              return (
                <tr key={name.id}>
                    <td>{name.employee_id}</td>
                    <td>{ name.first_name }</td>
                    <td>{name.last_name}</td>


                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TechnicianList;
