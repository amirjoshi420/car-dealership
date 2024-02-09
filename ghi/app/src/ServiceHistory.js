
import { useState, useEffect} from 'react';

function ServiceHistory() {
  const [names, setNames] = useState([])
  const [filterValue, setFilterValue] = useState("")
  // const [vinList, setVinList] = useState([])

  const getData = async ()=> {
    const response = await fetch('http://localhost:8080/api/appointments/');
    if (response.ok) {
      const { appointment } = await response.json();
      setNames(appointment);
    } else {
      console.error('An error occurred fetching the data')
    }
  }



  useEffect(()=> {
    getData()
  }, []);


  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const formatTime = (timeString) => {
    const date = new Date(timeString);

    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "CST"
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };


  function handleFilterChange(e) {
    setFilterValue(e.target.value);
  };

  
  const vinList = names.filter((name) => name.vin.includes(filterValue))

  return (
    <div className="my-5 container">
      <div className="row">
        <h1>Service History</h1>
        <input onChange={handleFilterChange} placeholder='Search by VIN'/>
        <table className="table table-striped m-3">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Is VIP?</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            {vinList.map(name => {

              return (
                <tr key={name.id}>
                  <td>{ name.vin }</td>
                  <td>{name.vip ? "yes" : "NO"}</td>
                  <td>{name.customer}</td>
                  <td>{formatDate(name.date_time)}</td>
                  <td>{formatTime(name.date_time)}</td>
                  <td>{name.technician}</td>
                  <td>{name.reason}</td>
                  <th>{name.status}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceHistory;
