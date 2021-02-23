import React from "react";
import axiosWithAuth from "../utilz/axiosWithAuth";
import axios from "axios";


class FriendsList extends React.Component{
    constructor(){
        super();
        this.state={
            friends: []
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

    render(){
        console.log(this.state.friends)
        return (
            <div>
                <h1>My Friends</h1>
               {this.state.friends.map((friend)=>{
                   return <p style={{fontSize: "1.5rem"}}>{friend.name}</p>
               })}
            </div>
        )
    }
}

export default FriendsList;