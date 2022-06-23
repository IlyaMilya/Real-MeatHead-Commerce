
import React, {useState, useEffect} from 'react'


import ProductPage from './ProductPage'



    function Login() 
    {
        let gettingUsername = "";
        console.log(gettingUsername)
        const [currentUser, setCurrentUser] = useState('')
        const [errorMessages, setErrorMessages] = useState({});
        const [isSubmitted, setIsSubmitted] = useState(false);
        const [userInfo, setUserInfo] = useState({});
      
      
        // User Login info
        
      
      
        const errors = {
          uname: "invalid username",
          pass: "invalid password"
        };
        /*getting user from backend */
         
        const getUser = async () => {
           const req = await fetch(`users/${gettingUsername}`)
           const res = await req.json()
           setCurrentUser(res)
          }
        
        const handleSubmit = (event) => {
          //Prevent page reload
          event.preventDefault();
      
          let { uname, pass } = document.forms[0];
      
          gettingUsername = uname.value
      
          // Find user login info
          const userData = currentUser.find((user) => user.username === uname.value);
            console.log(userData)
            setUserInfo(userData) 
          // Compare user info
          if (userData) {
            if (userData.password !== pass.value) {
              // Invalid password
              setErrorMessages({ name: "pass", message: errors.pass });
                } else {
              setIsSubmitted(true);
                }
              } else {
            // Username not found
                  setErrorMessages({ name: "uname", message: errors.uname });
              }
                           };
      
        // Generate JSX code for error message
        const renderErrorMessage = (name) =>
          name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
          );
      
        
      
        // JSX code for login form
        const renderForm = (
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
              <div className="button-container">
                <input type="submit" value="Login"/>
                <a href="http://localhost:4000/signup"> Sign Up </a>
              </div>
            </form>
          </div>
        );
      
        
          const request = async () => {
          const req = await fetch(`users/${gettingUsername}`)
          const res = await req.json()
          setCurrentUser(res)
          console.log(res)
          }

          useEffect (() => { 
            request()
          },[] )
      
        return (

          <div className="login-page">
          <div className="app">
            <div className="login-form">
              <div className="title"></div>
              {isSubmitted ? <ProductPage userdata = {userInfo} /> : renderForm}
            </div>
          </div>
          </div>

        );
        }

        export default Login;