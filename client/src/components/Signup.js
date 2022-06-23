import React, { useState } from "react";
import Login from './Login'

function Signup() {

// Add this in your component file
  // React States
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    imail: "invalid email",
    dob: "must be 18 years and older",
    fname: "give a proper full name"
  };

   function handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass, img, fname, imail } = document.forms[0];



    fetch('/users', {
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                fullname: fname.value,
                email: imail.value,
                username: uname.value,
                password: pass.value,
                image: img.value,
            }
            ) },  
            )
            setIsSubmitted(true)
  }

  // JSX code for login form
  const renderForm = (
    <div className="form">

      <form onSubmit={handleSubmit}>
        {/* First and Last Name */}
        <div className="input-container">
          <label>Full Name </label>
          <input type="text" name="fname" required />
          
        </div>
        {/* Email */}
        <div className="input-container">
          <label>Email</label>
          <input type="email" name="imail" required />
          
        </div>

      {/* User Name */}
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          
        </div>
        {/* Password */}
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
            {/* Image */}
        <div className="input-container">
          <label>Image</label>
          <input type="text" name="img" required />
          </div>
        
          
        </div>
        <div className="button-container">
          <input type="submit" value="Signup"/>

        </div>
      </form>
    </div>
  );

  

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <Login /> : renderForm}
      </div>
    </div>
  );
}

export default Signup;