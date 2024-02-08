import React, { useEffect, useState } from "react";

function ManufacturerForm() {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = "http://localhost:8100/api/manufacturers/";
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
        });
        alert("Manufacturer created successfully!");
      } else {
        console.error("An error occurred while creating the manufacturer");
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
          <h1>Create a manufacturer</h1>
          <form onSubmit={handleSubmit} id="create-manufacturer-form">
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
              <label htmlFor="name">Manufacturer name...</label>
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

export default ManufacturerForm;
