import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={'/' || '/home'}>
        <Home />
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
