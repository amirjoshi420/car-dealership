import React, { useEffect, useState } from "react";

function AutomobileForm() {
    const [models, setModels] = useState([]);
    const [formData, setFormData] = useState({
        color: "",
        year: "",
        vin: "",
        model:"",
    });


    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
            }
        }
    useEffect(() =>{
        fetchData();
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const url = "http://localhost:8100/api/automobiles/";
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
                color: "",
                year: "",
                vin: "",
                model:"",
            });
            alert("Automobile created successfully!");
        } else {
            console.error("An error occurred while creating Automobile");
        }
        } catch (error) {
        console.error("An error occurred:", error);
        }
    };

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;

        setFormData({
        ...formData,
        [inputName]: value,
        });
    };

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add an automobile to inventory</h1>
            <form onSubmit={handleSubmit} id="create-automobile-form">
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormChange}
                    value={formData.color}
                    placeholder="color"
                    required
                    type="text"
                    name="color"
                    id="color"
                    className="form-control"
                />

                <label htmlFor="color">Color...</label>
                </div>

                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.year} placeholder="year" required type="text" name="year" id="year" className="form-control" />
                  <label htmlFor="year">Year...</label>
                </div>

                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                  <label htmlFor="vin">VIN</label>
                </div>

                <div className="mb-3">
                    <select onChange={handleFormChange} value={formData.model} required name="model" id="model" className="form-select">
                        <option value="model">Choose a model...</option>
                        {models.map(model => {
                        return (
                            <option key={model.id} value={model.id}>{model.name}</option>
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

    export default AutomobileForm;
