import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../components/Header';

interface DataItem {
  jenis: ReactNode;
  id: number;
  desc: ReactNode;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/field', {
          headers: {
            'Access-Control-Allow-Origin': '*', // Allow CORS
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Use token in Authorization header
          }
        });
        setData(response.data.data); // Ubah sesuai dengan struktur data yang diharapkan
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  let i = 1;


  return (
    <Header>
      {token ? (
        <div className="container mx-auto">
          <h1 className="text-xl mb-4 font-bold">Manage Field</h1>
          <div className='bg-white px-4 py-6 rounded-md'>
            <button className='mb-4'>
              <a href="/manage-field/add" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add Field
              </a>
            </button>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left border">No</th>
                    <th className="px-6 py-4 text-left border">Jenis</th>
                    <th className="px-6 py-4 text-left border">Deskripsi</th>
                    <th className="px-6 py-4 text-center border" colSpan={2}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 border">{i++}</td>
                      <td className="px-6 py-4 border">{item.jenis}</td>
                      <td className="px-6 py-4 border">{item.desc}</td>
                      <td className="px-6 py-4 border">
                        <a href={`/manage-field/edit/${item.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 border">
                        <a href={`/manage-field/delete/${item.id}`} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p>Please authenticate first</p>
      )}
    </Header>
  );
};

export default App;
