
import { useState, useEffect} from 'react';

function ManufacturerList() {
  const [names, setNames] = useState([])

  const getData = async ()=> {
    const response = await fetch('http://localhost:8100/api/manufacturers/');
    if (response.ok) {
      const { manufacturers } = await response.json();
      setNames(manufacturers);
    } else {
      console.error('An error occurred fetching the data')
    }
  }

  useEffect(()=> {
    getData()
  }, []);

return (
  
    <div style={{ backgroundColor: "#6c757d" }}> {/* Set background color for the entire page */}
      <div className="my-5 container" style={{ backgroundColor: "#ffffff" }}> {/* Set background color for the container */}
        <div className="row">
          <h1>Manufacturers</h1>

          <table className="table table-striped m-3">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {names.map(name => {
                return (
                  <tr key={name.id}>
                    <td>{ name.name }</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
            }
export default ManufacturerList;
