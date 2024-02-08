import React, { useEffect, useState } from "react";

function ModelForm() {
    const [manufacturers, setManufacturers] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        manufacturer_id: "",
        picture_url: "",
    });


    const fetchData = async () => {
        const url = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers)
            }
        }
    useEffect(() =>{
        fetchData();
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const url = "http://localhost:8100/api/models/";
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
                name: "",
                manufacturer_id: "",
                picture_url: "",
            });
            alert("Vehicle Model created successfully!");
        } else {
            console.error("An error occurred while creating the Vehicle Model");
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
            <h1>Create a Vehicle model</h1>
            <form onSubmit={handleSubmit} id="create-model-form">
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormChange}
                    value={formData.name}
                    placeholder="name"
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                />

                <label htmlFor="name">Model name...</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} value={formData.picture_url} placeholder="picture_url" required type="text" name="picture_url" id="picture_url" className="form-control" />
                    <label htmlFor="picture_url">Picture Url...</label>
                </div>
                <div className="mb-3">
                    <select onChange={handleFormChange} value={formData.manufacturer_id} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                        <option value="">Choose a Manufacturer...</option>
                        {manufacturers.map(manufacturer => {
                        return (
                            <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                        )
                        })}
                    </select>
                    </div>
                <button type="submit" className="btn btn-primary">
                Create
                </button>
            </form>
            </div>
        </div>
        </div>
    );
    }

    export default ModelForm;
