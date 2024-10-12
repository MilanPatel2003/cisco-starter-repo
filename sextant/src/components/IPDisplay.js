import React, { useEffect, useState } from 'react'

const IPDisplay = ({ ipVersion }) => {
  const [ipAddress, setIpAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        // Determine the correct API URL based on the ipVersion prop
        const url = ipVersion === 'ipv4' 
          ? 'https://api.ipify.org?format=json' 
          : 'https://api6.ipify.org?format=json';
        
        const response = await fetch(url);
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (err) {
        setError('Failed to fetch IP address');
      } finally {
        setLoading(false);
      }
    };

    fetchIP();
  }, [ipVersion]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h3>Your Public {ipVersion === 'ipv4' ? 'IPv4' : 'IPv6'} Address:</h3>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IPDisplay;
