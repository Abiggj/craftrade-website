const React = require('react');
const ReactDOM = require('react-dom/client');
require('./index.css');
const App = require('./App.mjs');
const reportWebVitals = require('./reportWebVitals.mjs');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
