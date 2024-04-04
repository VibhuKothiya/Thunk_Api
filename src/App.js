import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>News API</h1>
      <Products />
    </div>
  );
}

export default App;
