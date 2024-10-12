import React, { useEffect, useState } from 'react';

const LatencyDisplay = () => {
  const [latency, setLatency] = useState(null);
  const [error, setError] = useState(null);
  let connection;

  useEffect(() => {
    connection = new WebSocket('ws://localhost:55455');

    connection.onopen = () => {
      console.log('WebSocket connection established');
      const startTime = new Date().getTime();
      connection.send('Ping'); // Send a ping to measure latency

      connection.onmessage = (event) => {
        const endTime = new Date().getTime();
        const latency = endTime - startTime; // Calculate latency
        setLatency(latency);
      };
    };

    connection.onerror = (error) => {
      console.error('WebSocket error: ', error);
      setError('WebSocket error occurred');
    };

    return () => {
      connection.close();
    };
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h3>Packet Latency: {latency !== null ? `${latency} ms` : 'Calculating...'}</h3>
    </div>
  );
};

export default LatencyDisplay;
