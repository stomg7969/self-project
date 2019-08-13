import React, { useState } from "react";

const NewUser = (props) => {

  const [userInputStyle, setUserInputStyle] = useState('block');
  const [emailInputStyle, setEmailInputStyle] = useState('none');

  const userStyle = { display: userInputStyle };
  const emailStyle = { display: emailInputStyle };

  const { changeListener, username, email } = props;

  const submitListener = e => {
    e.preventDefault();
    if (e.target.firstElementChild.name === 'username') {
      setUserInputStyle('none');
      setEmailInputStyle('block');
      setTimeout(() => (document.getElementById('email').focus()), 10);
    } else {
      setEmailInputStyle('none');
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      alert('reloading just for now');
      window.location.reload();
    }
    // after all input, fetch (POST) --> .then reload page.
  };

  return (
    <div>
      <div style={userStyle}>
        <h1>Hello, what is your name ?</h1>
        <form onSubmit={submitListener}>
          <input
            className="new-input username"
            type="text"
            name='username'
            value={username}
            onChange={changeListener}
            minLength='1'
            required
            autoFocus
          />
        </form>
      </div>
      {/* name and email must be locally set as JWT. */}
      <div style={emailStyle}>
        <h1>what is your email ?</h1>
        <form onSubmit={submitListener}>
          <input
            id="email"
            className="new-input email"
            type="email"
            name='email'
            value={email}
            onChange={changeListener}
            tabIndex="-1"
            pattern="*@-.-"
            required
          />
        </form>
      </div>
    </div>
  );
};
export default NewUser;