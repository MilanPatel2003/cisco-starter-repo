// sextant/src/App.js
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit'; // Import the new Exhibit component

function App() {
  return (
    <div className="App">
       <Banner />
      <Exhibit title="Welcome to the Exhibit"> {/* Use the Exhibit component */}
       
      </Exhibit>
    </div>
  );
}

export default App;