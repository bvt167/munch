import CreateAcc from 'components/CreateAcc';
import Home from "components/Home";
import Login from 'components/Login';
import PublishPost from 'components/PublishPost';
import React, { useEffect, useState } from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import './App.css';
import SignIn from 'components/SignIn';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => { }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home accountInfo={accountInfo} isLoggedIn={isLoggedIn} /> }/>
        <Route path="/login" element={
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setAccountInfo={setAccountInfo}
          />
        }/>
        <Route path="/create" element={ <CreateAcc /> }/>
        <Route path="/publish" element={ <PublishPost isLoggedIn={isLoggedIn} /> }/>
        <Route path="/signin" element={ <SignIn /> } />
      </Routes>
    </Router>
  )
}

export default App;
