import React, { Component, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Outlet, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav.js';

function Auth() {
  handleCallbackResponse((response) => {
    console.log('encoded JWT ID token' + response.credential);
  });

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '450531637260-o90comuborlhp8678tl3s34bhdhj1307.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <div>
      {/* <div>
        <div className='jumbotron'>
          <div className='homeinfo'>
            <h1 className='display-4'>BooksRUs</h1>
            <p className='lead'>Build a library of your own!</p>
            <br></br>
            <p>
              Search and discover new books catered to your personal taste.
              Register now to start.
            </p>
          </div>
          <p className='lead'>
            <a
              className='btn btn-primary btn-lg'
              href='/auth/register'
              role='button'
            >
              Register
            </a>
          </p>

          <img src='cat.jpg' alt='cat' class="img-thumbnail"></img>
        </div>
      </div> */}

      {/* <div id='signInDiv'></div> */}

      {/* <Outlet /> */}
    </div>
  );
}

export default Auth;
