import React, { useRef, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const userName = useRef('');
  const password = useRef('');

  let signUpHandler = (e) => {
    e.preventDefault();
    
  }
  return(
    <div>
      <h1>passport local learning project</h1>
      <div className="signup">
        <h2>sign up</h2>
        <form onSubmit={signUpHandler}>
          <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" ref={userName} />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="text" name="password" id="password"  ref={password} />
          </div>
          <button type="submit">sign up</button>
        </form>
        <br />
        <hr />
        <br />
        <h2>login</h2>
        <form onSubmit={signUpHandler}>
          <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" ref={userName} />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="text" name="password" id="password"  ref={password} />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    </div>

    
  )
}

export default App;
