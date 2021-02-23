import './App.css';
import React, { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import axiosWithAuth from "./utilz/axiosWithAuth";


function App() {

  const history=useHistory();

  const [formValues, setFormValues]=useState({
    username: "",
    password: "", 
  })

  const [errors, setErrors]=useState([]);

  const [friends, setFriends]=useState([]);

  const handleChange = (event) => {

    const { name, value }=event.target;

    setFormValues({
      ...formValues,
      [name]: value
    })

  }

  const login = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/login", formValues)
    .then((res)=>{
      console.log("APP COMP, LOGIN EVENT HANDLER, AXIOS  SUCCESS", res);
      localStorage.setItem("token", JSON.stringify(res));
      history.push("/login");
    })
    .catch((err)=>{
      console.log("APP COMP, LOGIN EVENT HANDLER, AXIOS FAIL", err);
      setErrors([
        err.response.data.error
      ])
    })
    


  }

  return (
    <FrontPage >
      <HeaderNav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
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
        <form onSubmit={login}>
          <label htmlFor="username">Username:
            <input name="username" id="username" placeholder="Enter Your Username" onChange={handleChange} value={formValues.username} />
          </label>
          <label htmlFor="password">Password:
            <input name="password" id="password" placeholder="Enter Your Password" onChange={handleChange} value={formValues.password} />
          </label>
        <button>Log In</button>
        {errors.map((error)=>{
          return <p>{error}</p>
        })}
        </form>
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
