import './App.css';
import NavBar from './components/util/NavBar/NavBar';
import MoviesPage from './pages/MoviesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonsPage from './pages/PersonsPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/persons" element={(<PersonsPage />)} />
          <Route path="/movies" element={(<MoviesPage />)} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
