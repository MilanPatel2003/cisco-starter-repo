// sextant/src/App.js
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit'; // Import the new Exhibit component
import IPDisplay from './components/IPDisplay';

function App() {
  return (
    <div className="App">
       <Banner />
      <Exhibit title="Your IP's"> {/* Use the Exhibit component */}
       <IPDisplay ipVersion={"ipv4"}></IPDisplay>
       <IPDisplay></IPDisplay>

      </Exhibit>
    </div>
  );
}

export default App;