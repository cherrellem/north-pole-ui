import logo from './happy-santa.png';
import './App.css';
import { Button } from './stories/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        <h1>Welcome to North Pole App</h1>
        <div className="list">

        <div style={{margin: "5px"}}>

        <Button
          label="Nice list"
          backgroundColor="green"
          onClick={() => {alert('Are you nice?')}}
          primary
        />
        </div>
         <div style={{margin: "5px"}}>
        <Button
          label="Naughty list"
          backgroundColor="red"
          onClick={() => {alert('Sorry. You might be in the naughty list.')}}
          primary
        />
        </div>
        </div>

      </header>
    </div>
  );
}

export default App;
