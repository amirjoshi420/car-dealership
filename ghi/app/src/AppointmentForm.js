import React, { useEffect, useState } from "react";

function AppointmentForm() {
    const [technicians, setTechnicians] = useState([]);
    const [formData, setFormData] = useState({
        vin: "",
        customer: "",
        date: "",
        time:"",
        technician:"",
        reason: "",
    });

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;

        setFormData({
        ...formData,
        [inputName]: value,
        });
    };


    const fileData = async () => {
        const url = "http://localhost:8080/api/technicians/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians)
            }
        }
    useEffect(() =>{
        fileData();
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
            "Content-Type": "application/json",
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setFormData({
                vin: "",
                customer: "",
                date: "",
                time:"",
                technician:"",
                reason: "",
            });
            alert("Appointment created successfully!");
        }
    };



    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Create a Service appointment</h1>
            <form onSubmit={handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormChange}
                    value={formData.vin}
                    placeholder="vin"
                    required
                    type="text"
                    name="vin"
                    id="vin"
                    className="form-control"
                />
                <label htmlFor="vin">vin...</label>
                </div>

                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.customer} placeholder="customer" required type="text" name="customer" id="customer" className="form-control" />
                  <label htmlFor="Customer">Customer...</label>
                </div>

                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.date} placeholder="date" required type="date" name="date" id="date" className="form-control" />
                  <label htmlFor="Date">Date</label>
                </div>

                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.time} placeholder="time" required type="time" name="time" id="time" className="form-control" />
                  <label htmlFor="time">time</label>
                </div>

                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.reason} placeholder="reason" required type="reason" name="reason" id="reason" className="form-control" />
                  <label htmlFor="Reason">Reason...</label>
                </div>

                <div className="mb-3">
                    <select onChange={handleFormChange} value={formData.technician} required name="technician" id="technician" className="form-select">
                        <option value="technicion">Choose a technician...</option>
                        {technicians.map(technician => {
                        return (
                            <option key={technician.id} value={technician.id}>{technician.first_name}</option>
                        )
                        })}
                    </select>
                    </div>
                <button type="Create" className="btn btn-primary">
                Create
                </button>
            </form>
            </div>
        </div>
        </div>
    );
    }

    export default AppointmentForm;
