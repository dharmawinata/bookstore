import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Author from './Author';
import AddAuthor from './AddAuthor';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container mt-3">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/authors'>
              <Author/>
            </Route>
            <Route path='/addAuthor'>
              <AddAuthor/>
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
