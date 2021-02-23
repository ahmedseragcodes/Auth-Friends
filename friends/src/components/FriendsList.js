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
                friends: [res.data]
            })
        })
        .catch((err)=>{
            console.log("FRIENDSLIST, GET FRIENDS HANDLER, AXIOS FAILED", err);
        })
    }

    render(){
        return (
            <div>
               {this.state.friends.map((friend)=>{
                   return <p>{friend}</p>
               })}
            </div>
        )
    }
}

export default FriendsList;