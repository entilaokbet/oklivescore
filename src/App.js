import logo from './logo.svg';
import './App.css';
import Home from './pages/index';
import SportsNews from './pages/sportsnews';
import Bookmarks from './pages/bookmarks';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Home></Home>
      <SportsNews></SportsNews>

      <Bookmarks></Bookmarks>
    </div>
  );
}

export default App;
