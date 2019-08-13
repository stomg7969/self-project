import React, { useState, useEffect } from 'react';

import NewUser from './pages/newUser';
import Landing from './pages/landing';

function App() {

  const initialState = { username: "", email: "" };
  const [{ username, email }, setUserInfo] = useState(initialState);

  useEffect(() => {
    // I don't think I need cdm here.
    // Think of it as jsx. 
    if (localStorage.getItem('username')) {
      console.log('just logging for now')
      // fetch GET
    }
  });

  const changeListener = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({ ...prevState, [name]: value }));
  };

  if (localStorage.getItem('username')) {
    return (
      <Landing />
    );
  } else {
    return (
      <NewUser
        changeListener={changeListener}
        username={username}
        email={email}
      />
    );
  }
}
// if user is not logged in, show 'hello, what is your name' component
// otherwise, show the right page. 
// contact page. component design.
export default App;
