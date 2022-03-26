import logo from './logo.svg';
import './assets/css/app.css';
import './input.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
function App() {
  return (
    <Router path="/">
      <HomePage />
    </Router>
  );
}

export default App;
