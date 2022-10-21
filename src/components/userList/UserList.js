import React from "react";

function UserList(props){
    return (
        <ul>
            <li>
            {props.list.map(function (name){
                   return <li>{name}</li>
                }
                )
                }
            </li>
        </ul>
    )
}

export default UserList