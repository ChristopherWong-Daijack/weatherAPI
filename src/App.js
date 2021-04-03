import logo from './logo.svg';
import WeatherAPI from './componenets/weatherAPI'
import './App.css';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Route exact path='/' render={()=>(
          <div >
            <header>
              <Link to='/weatherAPI'>Navigate to Weather API</Link>
            </header>
            Welcome to my WeatherAPI
            
          </div>
          
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
