import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateSalesPeople from './CreateSalesPeople';
import SalesPeopleList from './SalesPeopleList';
import CustomerList from './ListCustomers';
import CreateCustomer from './CreateCustomerForm';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import AutomobileList from './AutomobileList.js'
import AutomobileForm from './AutomobileForm.js'
import TechniciansList from './TechniciansList.js'
import TechnicianForm from './TechniciansForm.js'
import AppointmentForm from './AppointmentForm.js'
import AppointmentList from './AppointmentList.js';
import ServiceHistory from './ServiceHistory.js';

import SalesList from './ListSales.js'
import RecordSale from './AddSale.js'
// import SalespersonHistory from './SalesHistory.js';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create-salespeople" element={<CreateSalesPeople />} />
          <Route path="/salespeople" element={<SalesPeopleList />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/create-customer" element={<CreateCustomer />} />
          <Route path="/sales" element={<SalesList />} />
          <Route path="/create-sale" element={<RecordSale />} />
          {/* <Route path="/saleshistory" element={<SalespersonHistory />} /> */}

          <Route path="manufacturers" element={<ManufacturerList />} />
          <Route path="create-manufacturer" element={<ManufacturerForm />} />

          <Route path="models" element={<ModelList />} />
          <Route path="create-model" element={<ModelForm />} />

          <Route path="automobiles" element={<AutomobileList />} />
          <Route path="create-automobile" element={<AutomobileForm />} />

          <Route path="technicians" element={<TechniciansList />} />
          <Route path="create-technician" element={<TechnicianForm />} />

          <Route path="create-serviceappointment" element={<AppointmentForm />} />
          <Route path="serviceappointment" element={<AppointmentList />} />

          <Route path="servicehistory" element={<ServiceHistory />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
