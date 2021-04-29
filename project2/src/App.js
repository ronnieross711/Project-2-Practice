import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Search from './components/Search';
import './App.css';

function App() {
  const [searchString, setSearchString] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        console.log('e.target.value')
    } 
    
    const handleChange = (ev) => {
        ev.preventDefault()
       setSearchString(searchString)
       console.log("working", searchString)
    }
  return (
    <div className="app-Navbar">
      <Nav />
     
    
      
      <div className="app-Main">
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
      </div>

      <div className="Main-searchbar">
            <Search searchString={searchString}
                    handleClick={handleClick}
                    handleChange={handleChange}
                    setSearchString={setSearchString}/>
            </div>  
    
    </div>
  );
}

export default App;
