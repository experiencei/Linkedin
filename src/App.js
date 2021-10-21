import React, { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { selectUser , login ,logout } from './features/userSlice';
import Login from './components/login/Login';
import { auth } from './components/firebase/firebase';
import Widgets from './components/widget/Widgets';



function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged(userAuth => {
        if (userAuth) {
          dispatch(login({
             email : userAuth.email,
             uid: userAuth.uid,
             displayName : userAuth.displayName,
             photoUrl : userAuth.photoUrl,
          }))
        }  else{
               dispatch(logout())
        }
      })
  }, [])
      
  return (
    <div className="app">
      <Header/>
      {user ? (<div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>) :  (<Login/>) }
      
    </div>
  );
}

export default App;
