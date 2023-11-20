import './global.css';
import { Header } from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { CatalogPage } from './components/CatalogPage/CatalogPage';

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
