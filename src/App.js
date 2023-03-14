// import logo from './logo.svg';

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/index';
import SportsNews from './pages/sports-news';
import Bookmarks from './pages/bookmarks';
import NoPage from "./pages/NoPage";

// import Header from './components/header';
// import SideBar from './components/sidebar';
// import MainContent from './components/main';
// import LastestPost from './components/latestpost';
// import HookApi from './components/hookapi';

// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//       <div class="container">

//         <div class="col mt24">
//           <SideBar></SideBar>
//           <MainContent></MainContent>
//           <LastestPost></LastestPost>
//         </div>
        
//         <HookApi></HookApi>
//       </div>
      
      
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//       <Home></Home>
//       <SportsNews></SportsNews>

//       <Bookmarks></Bookmarks> */}
//     </div>
//   );
// }

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/sports-news" element={<SportsNews />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//<Route path="*" element={<NoPage />} /> 404 Page not added