import React from 'react';

const TablePage: React.FC = () => {
  // Sample data for the table
  const tableData = [
    { id: 1, name: 'Item 1', quantity: 5 },
    { id: 2, name: 'Item 2', quantity: 8 },
    // Add more sample data as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Table Page</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;