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
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/field', {
          headers: {
            'Access-Control-Allow-Origin': '*', // Allow CORS
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Use token in Authorization header
          }, data
        });
        setData(response.data.data); // Ubah sesuai dengan struktur data yang diharapkan
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (token) {
      handleSubmit;
    }
  }, [token]);

  if (isLoading) {
    return <p>Loading...</p>;
  }


  return (
    <Header>
      {token ? (
        <div className="container mx-auto py-4">
          <h1 className="text-2xl font-bold mb-4">Create Form</h1>
          <form onSubmit={handleSubmit}>
            {fields.map((field: any) => (
              <div key={field.id} className="mb-4">
                <label htmlFor={field.name} className="block font-medium mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <p>Please authenticate first</p>
      )
      }
    </Header >
  );
};

export default App;
