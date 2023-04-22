import CreateAcc from 'components/CreateAcc';
import Home from "components/Home";
import Login from 'components/Login';
import PublishPost from 'components/PublishPost';
import React, { useEffect, useState } from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import './App.css';
import SignIn from 'components/SignIn';
import ViewPost from 'components/ViewPosts';
import ConfirmPost from 'components/ConfirmPost';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => { }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <SignIn /> }/>
        <Route path="/login" element={
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setAccountInfo={setAccountInfo}
          />
        }/>
        <Route path="/create" element={ <CreateAcc /> }/>
        <Route path="/publish" element={ <PublishPost isLoggedIn={isLoggedIn} /> }/>
        <Route path="/signin" element={ <SignIn /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/viewpost" element={ <ViewPost /> } />
        <Route path="/confirm" element={ <ConfirmPost />} />
      </Routes>
    </Router>
  )
}

export default App;
