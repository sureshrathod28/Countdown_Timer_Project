
import './App.css';
import CountdownTimer from './components/timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://img.freepik.com/free-icon/wall-clock_318-874005.jpg?size=626&ext=jpg&ga=GA1.2.360652572.1686292548&semt=ais" className="App-logo" alt="logo" />
        <h1>Countdown Timer</h1>
       <CountdownTimer/>
      </header>
      
    </div>
  );
}

export default App;
