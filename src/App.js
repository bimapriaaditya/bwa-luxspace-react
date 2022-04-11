import logo from './logo.svg';
import './assets/css/app.css';
import './input.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import Cart from './pages/Cart'
import SuccessPage from './pages/SuccessPage'
import ErrorPage from './pages/ErrorPage'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:idc" element={<DetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
