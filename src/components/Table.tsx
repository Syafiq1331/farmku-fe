import React from 'react';

interface TableProps {
  data: any[]; // Ganti dengan tipe data yang sesuai
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 1</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 2</th>
          {/* Tambahkan kolom tambahan sesuai dengan kebutuhan Anda */}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap">{item.column1}</td> {/* Ganti dengan properti yang sesuai */}
            <td className="px-6 py-4 whitespace-nowrap">{item.column2}</td> {/* Ganti dengan properti yang sesuai */}
            {/* Tambahkan kolom tambahan sesuai dengan kebutuhan Anda */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
