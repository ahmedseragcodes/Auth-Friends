import './App.css';
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";


function App() {

  const [formValues, setFormValues]=useState({
    username: "",
    password: "", 
  })

  const [errors, setErrors]=useState("");

  const [friends, setFriends]=useState([]);

  const handleChange = (event) => {

    const { name, value }=event.target;

    setFormValues({
      ...formValues,
      [name]: value
    })

  }

  return (
    <FrontPage >
      <HeaderNav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
      </HeaderNav>
      <LoginForm>
        <form>
          <label htmlFor="username">Username:
            <input name="username" id="username" placeholder="Enter Your Username" />
          </label>
          <label htmlFor="password">Password:
            <input name="password" id="password" placeholder="Enter Your Password" />
          </label>
        </form>
        <button>Login</button>
      </LoginForm>
    </FrontPage>
  );
}

const FrontPage=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const HeaderNav=styled.div`
 li, link, a {
   font-size: 1.8rem;
   list-style-type: none;
 }
 display: flex-wrap;
 border-bottom: 1rem solid black;
 width: 100%;
 text-align: center;
`

const LoginForm=styled.div`
display: flex;
flex-direction: column;
font-size: 1.8rem;
margin-top: 1rem;
`

export default App;
