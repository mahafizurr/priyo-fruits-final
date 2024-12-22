import { useEffect, useState } from "react";

import AdminNav from "../../../components/AdminNav";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/checkout"); // Adjust the path if needed
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <AdminNav />
      <h1>Order List</h1>
      <table className="excel-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Mobile Number</th>
            <th>District</th>
            <th>Full Address</th>
            <th>Transaction Number</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.fullName}</td>
              <td>{order.mobileNumber}</td>
              <td>{order.district}</td>
              <td>{order.fullAddress}</td>
              <td>{order.transactionNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlePrint} className="print-button">
        Print
      </button>
    </div>
  );
};

export default OrderList;
