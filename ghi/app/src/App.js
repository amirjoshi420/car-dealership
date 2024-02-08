import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import AutomobileList from './AutomobileList.js'
import AutomobileForm from './AutomobileForm.js'
import TechniciansList from './TechniciansList.js'
import TechnicianForm from './TechniciansForm.js'
import AppointmentForm from './AppointmentForm.js'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="manufacturers" element={<ManufacturerList />} />
          <Route path="create-manufacturer" element={<ManufacturerForm />} />

          <Route path="models" element={<ModelList />} />
          <Route path="create-model" element={<ModelForm />} />

          <Route path="automobiles" element={<AutomobileList />} />
          <Route path="create-automobile" element={<AutomobileForm />} />

          <Route path="technicians" element={<TechniciansList />} />
          <Route path="create-technician" element={<TechnicianForm />} />

          <Route path="create-serviceappointment" element={<AppointmentForm />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
