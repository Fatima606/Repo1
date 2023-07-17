import logo from './logo.svg';
import './App.css';
import{Switch,Route} from 'react-router-dom'
import Clr from './Components/Clr';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Clr}/>
      </Switch>
    </div>
  );
}

export default App;
