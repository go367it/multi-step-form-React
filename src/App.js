import './App.css';
import AppNavbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div classNameName="App">
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
