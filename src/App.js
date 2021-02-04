import logo from './logo.svg';
import WeatherAPI from './componenets/WeatherAPI'
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  


  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Route exact path='/' render={()=>(
          <div >Welcome to my WeatherAPI</div>
          )}/>

          <Route exact path='/weatherAPI' render={()=>(
          <WeatherAPI/>
          )}/>
        </Switch>
        
      </header>
    </div>
  );
}

export default App;
