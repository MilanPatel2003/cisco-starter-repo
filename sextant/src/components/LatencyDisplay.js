import React, { useEffect, useState } from 'react';

const LatencyDisplay = () => {
  const [latency, setLatency] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:55455');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const packetTimestamp = data.data; // Assuming the message structure has a 'data' field with the timestamp
      const currentTime = Date.now();
      const calculatedLatency = currentTime - packetTimestamp;
      setLatency(calculatedLatency);
    };

    ws.onerror = (event) => {
      console.error('WebSocket error: ', event);
      setError('WebSocket error occurred');
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="latency-display">
      {error && <div>Error: {error}</div>}
      {latency !== null ? (
        <div>Packet Latency: {latency} ms</div>
      ) : (
        <div>Waiting for packets...</div>
      )}
    </div>
  );
};

export default LatencyDisplay;