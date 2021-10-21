import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import selectUser from './components/selectUser/selectUser';


function App() {

  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header/>

      {user ? (<Login/>) : (<div className="app__body">
        <Sidebar/>
        <Feed/>
      </div>)}
      
    </div>
  );
}

export default App;
