import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages';

const App = () => (
  <Router>
    <Switch>
      <Route path={'/' || '/home'}>
        <Home />
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  </Router>
);

export default App;

// {
//   "eslint.validate": [
//     "javascript",
//     "javascriptreact",
//     "typescript",
//     "typescriptreact"
//   ],
//   "[javascriptreact]": {
//     "editor.codeActionsOnSave": {
//       "source.fixAll.eslint": true
//     }
//   },
//   "editor.formatOnSave": true,
//   "[typescript]": {
//     "editor.formatOnSave": false,
//     "editor.codeActionsOnSave": {
//       "source.fixAll.eslint": true
//     }
//   },
//   "[typescriptreact]": {
//     "editor.formatOnSave": false,
//     "editor.codeActionsOnSave": {
//       "source.fixAll.eslint": true
//     }
//   },
//   "editor.renderWhitespace": "boundary",
//   "editor.codeActionsOnSave": {
//     "source.fixAll.eslint": true
//   }
// }
