// import React, { useEffect, useState } from "react";

// function SalespersonHistory() {
//     const [salespersons, setSalespersons] = useState([]);
//     const [selectedSalesperson, setSelectedSalesperson] = useState(null);
//     const [searchText, setSearchText] = useState("");
//     const [salesData, setSalesData] = useState([]);
//     const [filteredSales, setFilteredSales] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:8090/api/salespeople")
//             .then(response => response.json())
//             .then(data => setSalespersons(Array.isArray(data) ? data : []))
//             .catch(error => console.error("Error fetching salespersons:", error));

//         fetch("http://localhost:8090/api/sales")
//             .then(response => response.json())
//             .then(data => setSalesData(Array.isArray(data) ? data : []))
//             .catch(error => console.error("Error fetching sales data:", error));
//     }, []);

//     useEffect(() => {
//         let filteredSales = salesData;

//         if (selectedSalesperson) {
//             filteredSales = filteredSales.filter(sale => sale.salesperson_id === selectedSalesperson);
//         }

//         if (searchText) {
//             const lowerSearchText = searchText.toLowerCase();
//             filteredSales = filteredSales.filter(sale =>
//                 sale.customer_name.toLowerCase().includes(lowerSearchText) ||
//                 sale.automobile_vin.toLowerCase().includes(lowerSearchText)
//             );
//         }

//         setFilteredSales(filteredSales);
//     }, [selectedSalesperson, searchText, salesData]);

//     const handleSalespersonChange = (event) => {
//         setSelectedSalesperson(event.target.value);
//     };

//     const handleSearchInputChange = (event) => {
//         setSearchText(event.target.value);
//     };

//     return (
//         <div>
//             <h1>Salesperson History</h1>
//             <div>
//                 <label htmlFor="salesperson">Select Salesperson:</label>
//                 <select id="salesperson" value={selectedSalesperson} onChange={handleSalespersonChange}>
//                     <option value="">Select a salesperson...</option>
//                     {salespersons.map((salesperson) => (
//                         <option key={salesperson.id} value={salesperson.id}>
//                             {salesperson.first_name} {salesperson.last_name}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search salesperson or VIN..."
//                     value={searchText}
//                     onChange={handleSearchInputChange}
//                 />
//             </div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Salesperson</th>
//                         <th>Customer</th>
//                         <th>Automobile VIN</th>
//                         <th>Price</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredSales.map((sale) => (
//                         <tr key={sale.id}>
//                             <td>{sale.salesperson_name}</td>
//                             <td>{sale.customer_name}</td>
//                             <td>{sale.automobile_vin}</td>
//                             <td>{sale.price}</td>
//                             <td>{sale.date}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default SalespersonHistory;
