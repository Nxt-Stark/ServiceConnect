import React from 'react';

const DataTable = ({ title, headers, rows }) => (
  <div className="p-4 bg-white rounded shadow">
    <h3 className="text-lg font-semibold">{title}</h3>
    <table className="w-full mt-4">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-2 py-1 border-b">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-2 py-1 border-b">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;
