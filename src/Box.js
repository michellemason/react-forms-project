import React from "react";
import './Box.css';

const Box = ({
    id,
    handleRemove,
    width = 100, 
    height = 100, 
    backgroundColor = 'red'
    }) => {
    const remove = () => handleRemove(id);
    return (
        <div className="Box" style={{
            backgroundColor,
            width: `${width}px`, 
            height: `${height}px`
        }}>
        <button className="Box-btn" onClick={remove}>X</button>
        </div>
    )
}

export default Box;