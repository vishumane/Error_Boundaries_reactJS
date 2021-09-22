
import './App.css';
import {Switch,Route} from'react-router-dom';
import Home from'./component/home/Home';
import Contact from'./component/contact/Contact';
import About from'./component/about/About';
import Error from'./component/error/Error';
import Application from './ErrorBoundaries/Application';

const App=()=> {
  return (
    <div className="App">
      <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route  path="/contact" component={Contact}/>
    <Route component={Error} />
      </Switch>
      <Application/>
    </div>
  );
}

export default App;
