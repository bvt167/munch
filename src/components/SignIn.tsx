import { Button, ThemeProvider, createTheme } from '@mui/material';
import React, { useState } from 'react';
import Login from './Login';
import CreateAcc from './CreateAcc';
import MAIN_THEME from 'theme/MainTheme';

const SignIn = () => {
  const [display, setDisplay] = useState("");

  const renderDisplay = (display): any => {
    switch (display) {
      case "createAccount":
        return (<CreateAcc setDisplay={setDisplay} />);
      case "logIn":
        return (<Login setDisplay={setDisplay} />);
      default:
        return (<div>
          <div>
            <div>
              <h1 className='ps-4'>Welcome to</h1>
              <img className='m-0 p-0' src='../../assets/munchLogo.png' alt='Munch Logo'></img>
            </div>
          </div>
          <div className='w-90 d-flex flex-column'>
            <ThemeProvider theme={MAIN_THEME}>
              <Button className='mt-5' variant="contained" size="large" color="primary" onClick={() => setDisplay("createAccount")}>
                Create an Account
              </Button>
              <Button className='mt-3' variant="outlined" size="large" color="primary" onClick={() => setDisplay("logIn")}>
                Sign In
              </Button>
            </ThemeProvider>
          </div>
        </div>);
    }
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center h-100">
      {renderDisplay(display)}
    </div>
  );
}

export default SignIn;
