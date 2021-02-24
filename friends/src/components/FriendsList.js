import React from "react";
import axiosWithAuth from "../utilz/axiosWithAuth";
import axios from "axios";
import styled from "styled-components";

class FriendsList extends React.Component{
    constructor(){
        super();
        this.state={
            friends: [],
            newFriend: {
                id: 999,
                name: "",
                age: "",
                email: "",
            }
        }
    }

    componentDidMount(){
        this.getFriendsData();
    }

    getFriendsData=()=>{
        axiosWithAuth()
        .get("/api/friends")
        .then((res)=>{
            console.log("FRIENDSLIST, GET FRIENDS HANDLER, AXIOS SUCCESS", res);
            this.setState({
                friends: res.data
            })
        })
        .catch((err)=>{
            console.log("FRIENDSLIST, GET FRIENDS HANDLER, AXIOS FAILED", err);
        })
    }

    handleNewFriendChange=(event)=>{
        const {name, value}=event.target;

        this.setState({
            ...this.state, 
            newFriend: {...this.state.newFriend,
                [name]: value
            }
        })
    }

    handleNewFriendSubmit=(event)=>{
        event.preventDefault();
        axiosWithAuth()
        .post("/api/friends", this.state.newFriend)
        .then((res)=>{

            this.setState({
                ...this.state,
                friends: res.data
            })
        })
    }

    render(){
        console.log(this.state.friends)
        if (this.state.friends.length===0){
            return <h2>Friends Loading</h2>
        }
        return (
            <FriendsPage>
                <h1>My Friends</h1>
               {this.state.friends.map((friend)=>{
                   return <p style={{fontSize: "1.5rem"}}>{friend.name}</p>
               })}
               <FriendsForm>
               <form onSubmit={this.handleNewFriendSubmit} >
                   <label htmlFor="name">Enter Your Friends Name:
                        <input name="name" id="name" type="text" placeholder="Enter Friend's Name" onChange={this.handleNewFriendChange} value={this.state.newFriend.name} />
                   </label>
                   <label htmlFor="age">Enter Your Friends Age:
                        <input name="age" id="age" type="number" placeholder="Enter Friend's Age" onChange={this.handleNewFriendChange} value={this.state.newFriend.age} />
                   </label>
                   <label htmlFor="email">Enter Your Friend's Email:
                        <input name="email" id="email" type="email" placeholder="Enter Friend's Email" onChange={this.handleNewFriendChange} value={this.state.newFriend.email} />
                   </label>
                   <button>Add New Friend</button>
               </form>
               </FriendsForm>
            </FriendsPage>
        )
    }
}

const FriendsForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.8rem;
`
const FriendsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default FriendsList;