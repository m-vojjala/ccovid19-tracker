import './App.css';
import InfoBox from './Infobox';
import Map from "./Map";


function App() {
  return (
    <div className="App">
      <div className='App-header'><h1>Covid19 Tracker</h1></div>
      <InfoBox />
      <Map />
    </div>
  );
}

export default App;
