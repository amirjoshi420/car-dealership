
import { useState, useEffect} from 'react';

function ModelList() {
  const [names, setNames] = useState([])

  const getData = async ()=> {
    const response = await fetch('http://localhost:8100/api/models/');
    if (response.ok) {
      const { models } = await response.json();
      setNames(models);
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
        <h1>Manufacturers</h1>

        <table className="table table-striped m-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {names.map(name => {
              return (
                <tr key={name.id}>
                  <td>{ name.name }</td>
                  <td>{name.manufacturer.name}</td>
                  <td>
                    <img src={ name.picture_url } className = "img-thumbnail" style={{height:"100px" , width:"100px"}} />
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

export default ModelList;
