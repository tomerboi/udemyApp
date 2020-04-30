import React from 'react';

const ValidationComponent = (props) => {
    return (
        <p>{props.len < 5 ? "Text too short" : "Text too long"}</p>
    )
}

export default ValidationComponent;