
import { useState, useEffect} from 'react';

function AppointmentList() {
  const [names, setNames] = useState([])
  const [vips ,setVips] = useState([])

  const getData = async ()=> {
    const response = await fetch('http://localhost:8080/api/appointments/');
    if (response.ok) {
      const { appointment } = await response.json();
      setNames(appointment);
    } else {
      console.error('An error occurred fetching the data')
    }
  }
  const fetchData = async ()=> {
    const response = await fetch('http://localhost:8100/api/automobiles/');
    if (response.ok) {
      const { autos } = await response.json();
      setVips(autos);
    } else {
      console.error('An error occurred fetching the data')
    }
  }
  console.log(vips)

  useEffect(()=> {
    fetchData()
  }, []);

  async function handleClick(event, nameId) {
    const request = await fetch(`http://localhost:8080/api/appointments/${nameId}/cancel/`,{
    method:"PUT",
    });
    const response = await request.json();


    if (response.status) {
        alert("successfully Canceled ")
        getData();
    }else {
        alert("Can't Cancel")
    }
  }

  async function handleClickFinish(event, nameId) {
    const request = await fetch(`http://localhost:8080/api/appointments/${nameId}/finish/`,{
    method:"PUT",
    });
    const response = await request.json();


    if (response.status) {
        alert("successfully Finished ")
        getData();
    }else {
        alert("Can't Finish")
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



  return (
    <div className="my-5 container">
      <div className="row">
        <h1>Service Appointment</h1>

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
            </tr>
          </thead>
          <tbody>
            {names.map(name => {
              return (
                <tr key={name.id}>
                  <td>{ name.vin }</td>
                  <td>{name.vip? "yes" : "NO"}</td>
                  <td>{name.customer}</td>
                  <td>{formatDate(name.date_time)}</td>
                  <td>{formatTime(name.date_time)}</td>
                  <td>{name.technician}</td>
                  <td>{name.reason}</td>
                  <td>
                    <div className = "d-flex">
                      <button type="button" className="btn btn-danger" onClick={(event) =>
                        handleClick(event, name.id)}>Cancel</button>
                      <button type="button" className="btn btn-success" onClick={(event) =>
                        handleClickFinish(event, name.id)}>Finish</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppointmentList;
