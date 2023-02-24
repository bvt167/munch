import './App.css';
import React from 'react';
import Home from "components/Home";
import Login from 'components/Login';
import PublishPost from 'components/PublishPost';
import CreateAcc from 'components/CreateAcc';
import { Route, Link, Routes, HashRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/login" element={ <Login /> }/>
      <Route path="/create" element={ <CreateAcc /> }/>
      <Route path="/publish" element={ <PublishPost /> }/>
      </Routes>
    </Router>
  )
}

export default App;
