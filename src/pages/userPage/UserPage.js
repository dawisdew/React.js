
import React from "react";
import User from "../../components/user/User"
import UserList from "../../components/userList/UserList"
var props = {
    user:{
        name:'Erkutbek',
        lastname:'Turdubaev',
        age:'26',
    },
    names:['Dastan','Erkutbek','Guliza',"David"]
}
function UserPage(){
    const user ={
        name:'Erkutbek',
        lastname:'Turdubaev',
        age:'26',
    }
    const names=['Dastan','Erkutbek','Guliza',"David"]
    return (
        <div>
            <h1>Users list</h1>        
            <User  userinfo={user}/>
            --------------------
            <UserList list={names}/>
        </div>
    )
}

export default UserPage