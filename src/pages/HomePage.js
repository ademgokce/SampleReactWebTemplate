import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import './HomePage.css';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        // Limit the number of items to 5
        const limitedData = result.slice(0, 5);
        setData(limitedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div className="home-page">
      <h2>Home Page</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body.length > 100 ? `${item.body.substring(0, 100)}...` : item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
