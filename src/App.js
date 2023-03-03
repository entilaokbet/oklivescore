import logo from './logo.svg';
import './App.css';
import Home from './pages/index';
import SportsNews from './pages/sportsnews';
import Bookmarks from './pages/bookmarks';
import Header from './components/header';
import SideBar from './components/sidebar';
import MainContent from './components/main';
import LastestPost from './components/latestpost';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div class="container">

        <div class="col mt24">
          <SideBar></SideBar>
          <MainContent></MainContent>
          <LastestPost></LastestPost>
        </div>
        
      </div>
      
      
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
