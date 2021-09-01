import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'stores/reduxStore';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
