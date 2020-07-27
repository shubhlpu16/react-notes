import React,{useContext} from 'react';
import {Context} from '../../AppContext';
import './Home.css';


 const Home=()=>{
   const {store}=useContext(Context)
   console.log(store);
  return(
    <div className="App">
      <header className="header">
        <img src="/images/logo.svg" className="logo" alt="logo" />
        <p>
        A simple React Setup with routes in <code>/src/App.js</code>.<br/>
        Redux is also setup with different directories of actions, reducers, store.
        </p>

      </header>
    </div>)
}


export default Home;
