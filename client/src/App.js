import React, { useRef, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const regUserName = useRef('');
  const regPassword = useRef('');
  const logUserName = useRef('');
  const logPassword = useRef('');
  
  let signUpHandler = (e) => {
    e.preventDefault();
    Axios({
      method: 'post',
      data: {
        'userName': regUserName.current.value,
        'password': regPassword.current.value,
      },
      withCredentials: true,
      url: 'http://localhost:4000/register'
    }).then((res) => console.log(res));
  }
  let loginHandler = (e) => {
    e.preventDefault();
    Axios({
      method: 'post',
      data: {
        'userName': logUserName.current.value,
        'password': logPassword.current.value,
      },
      withCredentials: true,
      url: 'http://localhost:4000/login'
    }).then((res) => console.log(res));
  }
  return(
    <div>
      <h1>passport local learning project</h1>
      <div className="signup">
        <h2>sign up</h2>
        <form onSubmit={signUpHandler}>
          <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" ref={regUserName} />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="text" name="password" id="password"  ref={regPassword} />
          </div>
          <button type="submit">sign up</button>
        </form>
        <br />
        <hr />
        <br />
        <h2>login</h2>
        <form onSubmit={loginHandler}>
          <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username"  ref={logUserName} />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="text" name="password" id="password"  ref={logPassword} />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    </div>

    
  )
}

export default App;
