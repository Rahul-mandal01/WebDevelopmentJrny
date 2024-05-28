import {Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import Support from './components/Support';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            {/* <Link to="/" >Home</Link> */}
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            {/* <Link to="/support">Support</Link> */}
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            {/* <Link to="/about">About</Link> */}
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            {/* <Link to="/labs">Labs</Link> */}
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>



      <Routes>
        {/* <Route path="/" element={<div>Home Page</div>} /> */}
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/support" element={<div>Support</div>} /> */}
        {/* <Route path="/support" element={<Support/>} /> */}
        {/* <Route path="/about" element={<div>About</div>} /> */}
        {/* <Route path="/about" element={<About/>} /> */}
        {/* <Route path="/labs" element={<div>Labs</div>} /> */}
        {/* <Route path="/labs" element={<Labs/>} /> */}
        {/* <Route path="/*" element={<NotFound/>} /> */}

        <Route path="/" element={<MainHeader/>} >
          {/* Default Route */}
          <Route index element={<Home/>} />  
          <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/labs" element={<Labs/>} />
          <Route path="/*" element={<NotFound/>} />

        </Route>

      </Routes>
    </div>
  );
}

export default App;
