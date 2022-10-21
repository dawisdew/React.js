import React from "react";

function User(props){
    console.log(props);
    return (
        <div>
            <p className='p'>name: {props.userinfo.name}</p>
            <p>lastname: {props.userinfo.lastname}</p>
            <p>age: {props.userinfo.age}</p>
        </div>
    )
}

export default User