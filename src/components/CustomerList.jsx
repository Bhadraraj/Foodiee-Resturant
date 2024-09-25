import React from 'react';
import './demo.css'; // Custom styles

const orders = [
  {
    customer: 'Eren Jaegar',
    menu: 'Spicy seasoned seafood noodles',
    payment: '$125',
    status: 'Completed',
    avatarColor: '#FFD700', // Gold for avatar
  },
  {
    customer: 'Reiner Braunn',
    menu: 'Salted Pasta with mushroom sauce',
    payment: '$145',
    status: 'Preparing',
    avatarColor: '#87CEEB', // Blue for avatar
  },
  {
    customer: 'Levi Ackerman',
    menu: 'Beef dumpling in hot and sour soup',
    payment: '$105',
    status: 'Pending',
    avatarColor: '#FF69B4', // Pink for avatar
  },
  {
    customer: 'Historia Reiss',
    menu: 'Hot spicy fried rice with omelet',
    payment: '$45',
    status: 'Completed',
    avatarColor: '#00FA9A', // Green for avatar
  },
  {
    customer: 'Hanji Zoe',
    menu: 'Hot spicy fried rice with omelet',
    payment: '$245',
    status: 'Completed',
    avatarColor: '#8A2BE2', // Purple for avatar
  },
];

const Demo = () => {
  return (
    <div className="container order-report">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Order Report</h2>
        <button className="btn btn-outline-secondary d-flex align-items-center">
          <i className="bi bi-filter" /> Filter Order
        </button>
      </div>
      <table className="table table-borderless align-middle">
        <thead className="table-light">
          <tr>
            <th>Customer</th>
            <th>Menu</th>
            <th>Total Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <div className="d-flex align-items-center">
                  <div
                    className="avatar me-3"
                    style={{ backgroundColor: order.avatarColor }}
                  >
                    {order.customer.charAt(0)}
                  </div>
                  {order.customer}
                </div>
              </td>
              <td>{order.menu}</td>
              <td>{order.payment}</td>
              <td>
                <span
                  className={`status-badge ${
                    order.status.toLowerCase() === 'completed'
                      ? 'completed'
                      : order.status.toLowerCase() === 'preparing'
                      ? 'preparing'
                      : 'pending'
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
