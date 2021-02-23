import React from "react";


class FriendsList extends React.Component{
    constructor(){
        super();
        this.state={
            friends: []
        }
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