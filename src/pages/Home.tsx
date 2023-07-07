import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

interface DataItem {
  field: ReactNode;
  id: number;
  user: ReactNode;
}

const Home: React.FC = () => {
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
        const response = await axios.get('http://127.0.0.1:8000/api/dashboard', {
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


  return (
    <Header>
      {token ? (
        <div className="container mx-auto grid grid-cols-2 gap-x-4">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">List Fields</h2>
              <p>{data.field}</p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">List Users</h2>
              <p>{data.user}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Please authenticate first</p>
      )}
    </Header>
  );
};

export default Home;
