import React from 'react';

const Ass = (props) => {
    return (
        <div>
            <input type="text" onChange={props.change} value={props.name}></input>
            <p>{props.number}</p>
        </div>

    )
}

export default Ass;