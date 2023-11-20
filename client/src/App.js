import './global.css';
import { Header } from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/homePage/HomePage';

function App() {
  return (
    <>
      <Header />
      <main className="app">

      </main>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
