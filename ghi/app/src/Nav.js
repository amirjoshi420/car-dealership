import { NavLink } from 'react-router-dom';
import clogo from './clogo.png';

function Nav() {
  return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">CarCar</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav">
//             <li className="nav-item dropdown">
//               <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/create-manufacturer">Create a Manufacturer</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/models">Models</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/create-model">Create a Model</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/create-automobile">Create an Automobile</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/salespeople">Sales People</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/create-salespeople">Add a Sales Person</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/customers">Customers</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/create-customer">Add a Customer</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/sales">Sales</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/create-sale">Add a Sale</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/saleshistory">Sales History</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/technicians">Technicians</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/create-technician">Add a Technician</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/serviceappointment">Service Appointments</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/create-serviceappointment">Create a Service Appointment</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/servicehistory">Service History</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }



    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
            <img src={clogo} alt="car" width="140" height="60" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="manufacturersDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Manufacturers</a>
                    <ul className="dropdown-menu" aria-labelledby="manufacturersDropdown">
                        <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/create-manufacturer">Create a Manufacturer</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="modelsDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Models</a>
                    <ul className="dropdown-menu" aria-labelledby="modelsDropdown">
                        <li><NavLink className="dropdown-item" to="/models">Models</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/create-model">Create a Model</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="automobilesDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Automobiles</a>
                    <ul className="dropdown-menu" aria-labelledby="automobilesDropdown">
                        <li><NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/create-automobile">Create an Automobile</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="salespeopleDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Sales People</a>
                    <ul className="dropdown-menu" aria-labelledby="salespeopleDropdown">
                        <li><NavLink className="dropdown-item" to="/salespeople">Sales People</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/create-salespeople">Add a Sales Person</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="customersDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Customers</a>
                    <ul className="dropdown-menu" aria-labelledby="customersDropdown">
                        <li><NavLink className="dropdown-item" to="/customers">Customers</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/create-customer">Add a Customer</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="salesDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Sales</a>
                    <ul className="dropdown-menu" aria-labelledby="salesDropdown">
                        <li><NavLink className="dropdown-item" to="/sales">Sales</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/create-sale">Add a Sale</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/saleshistory">Sales History</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="techniciansDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Technicians</a>
                    <ul className="dropdown-menu" aria-labelledby="techniciansDropdown">
                        <li><NavLink className="dropdown-item" to="/technicians">Technicians</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/create-technician">Add a Technician</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="serviceAppointmentsDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Service Appointments</a>
                    <ul className="dropdown-menu" aria-labelledby="serviceAppointmentsDropdown">
                        <li><NavLink className="dropdown-item" to="/serviceappointment">Service Appointments</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/create-serviceappointment">Create a Service Appointment</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/servicehistory">Service History</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    </nav>


  );
}

export default Nav;
