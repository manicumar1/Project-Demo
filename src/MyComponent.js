import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = 'YOUR_ACCESS_TOKEN'; // Retrieve the access token from state, context, or local storage

    axios.get('YOUR_API_ENDPOINT', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.name} - {item.description}
        </div>
      ))}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default MyComponent;
