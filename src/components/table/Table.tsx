import React, { useState } from 'react';
import TableRow from './TableRow';

const Table: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Sample data (can be replaced with your actual data)
  const tableData = [
    { number: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { number: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { number: 3, first: 'Larry the', last: 'Bird', handle: '@twitter' },
  ];

  // Filtering the table data based on the search query
  const filteredData = tableData.filter((row) => {
    return (
      row.number.toString().includes(searchQuery) ||
      row.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.last.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.handle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className=" m-10 ">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-md"
          style={{ textAlign: 'center' }}
        />
      </div>
      <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead
                className="border-b bg-blue-800 font-medium dark:border-gray-500 dark:text-gray-800 dark:bg-gray-700">
                <tr>
                  <th scope="col" className=" px-6 py-4 text-gray-50 font-extrabold">Number</th>
                  <th scope="col" className=" px-6 py-4 text-gray-50 font-extrabold">First</th>
                  <th scope="col" className=" px-6 py-4 text-gray-50 font-extrabold">Last</th>
                  <th scope="col" className=" px-6 py-4 text-gray-50 font-extrabold">Handle</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-600">
                  <TableRow />
              </tbody>
            </table>
          </div>
       </div>
      </div>
    </div>
  );
};

export default Table;