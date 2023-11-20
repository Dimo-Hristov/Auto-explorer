import './global.css';
import { Header } from "./components/Header/Header";
import { Home } from './components/home/Home';

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Home />
      </main>
    </>
  );
}

export default App;
