import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateSalesPeople from './CreateSalesPeople';
import SalesPeopleList from './SalesPeopleList';
import CustomerList from './ListCustomers';
import CreateCustomer from './CreateCustomerForm';

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

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
