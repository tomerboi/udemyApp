import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Hobbies: {props.hobie}</p>
        </div>
    )
}

export default UserOutput