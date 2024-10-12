// sextant/src/App.js
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IPDisplay from './components/IPDisplay';
import LatencyDisplay from './components/LatencyDisplay'; // Import the new LatencyDisplay component

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Your IP's">
        <IPDisplay ipVersion={"ipv4"} />
        <IPDisplay />
      </Exhibit>
      <LatencyDisplay /> {/* Add the LatencyDisplay component here */}
    </div>
  );
}

export default App;
