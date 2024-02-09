import React, { useEffect, useState } from "react";

function RecordSale() {
    const [automobiles, setAutomobiles] = useState([]);
    const [salespersons, setSalespersons] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [formData, setFormData] = useState({
        automobile: "",
        salesperson: "",
        customer: "",
        price: ""
    });

    const fetchData = async () => {
        try {
            const automobileResponse = await fetch("http://localhost:8100/api/automobiles");
            const salesPersonResponse = await fetch("http://localhost:8090/api/salespeople");
            const customerResponse = await fetch("http://localhost:8090/api/customers");

            if (automobileResponse.ok && salesPersonResponse.ok && customerResponse.ok) {
                const automobileData = await automobileResponse.json();
                const salesPersonData = await salesPersonResponse.json();
                const customerData = await customerResponse.json();

                setAutomobiles(automobileData.autos); // Assuming automobiles are under autos property
                setSalespersons(Array.isArray(salesPersonData.salesperson) ? salesPersonData.salesperson : [salesPersonData.salesperson]);
                setCustomers(customerData);

                console.log(automobileData);
                console.log(salesPersonData);
                console.log(customerData);
                console.log("FormData:", formData);


            } else {
                console.error("Failed to fetch all data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // console.log("FormData:", formData);
            const url = "http://localhost:8090/api/sales/";
            const fetchConfig = {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                }
            };

            const response = await fetch(url, fetchConfig);
            console.log(response)

            if (response.ok) {
                console.log("Sale recorded successfully!");
                setFormData({
                    automobile: "",
                    salesperson: "",
                    customer: "",
                    price: ""
                });
            } else {
                console.error("Failed to record sale. Response status:", response.status);
            }
        } catch (error) {
            console.error("Error recording sale:", error.message);
        }
    };


    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Record a Sale</h1>
                    <form onSubmit={handleSubmit} id="record-sale-form">
                        <div className="form-floating mb-3">
                            <select
                                onChange={handleFormChange}
                                value={formData.automobile}
                                required
                                name="automobile"
                                id="vin"
                                className="form-select"
                            >
                                <option value="">Select a VIN...</option>
                                {automobiles.map((automobile) => (
                                    <option key={automobile.vin} value={automobile.vin}>
                                        {automobile.vin}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="vin">VIN</label>
                        </div>

                        <div className="form-floating mb-3">
                            <select
                                onChange={handleFormChange}
                                value={formData.salesperson}
                                required
                                name="salesperson"
                                id="salesperson"
                                className="form-select"
                            >
                                <option value="">Select a salesperson...</option>
                                {salespersons.map((salesperson) => (
                                    <option key={salesperson.id} value={salesperson.id}>
                                        {salesperson.first_name} {salesperson.last_name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="salesperson">Salesperson</label>
                        </div>

                        <div className="form-floating mb-3">
                            <select
                                onChange={handleFormChange}
                                value={formData.customer}
                                required
                                name="customer"
                                id="customer"
                                className="form-select"
                            >
                                <option value="">Select a customer...</option>
                                {customers.map((customer) => (
                                    <option key={customer.id} value={customer.id}>
                                        {customer.first_name} {customer.last_name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="customer">Customer</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                onChange={handleFormChange}
                                value={formData.price}
                                placeholder="Price"
                                required
                                type="number"
                                name="price"
                                id="price"
                                className="form-control"
                            />
                            <label htmlFor="price">Price</label>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Record Sale
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RecordSale;
