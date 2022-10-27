import React from 'react';

const Light = ({color, litLight, setLitLight}) => {

    const styles = {
        minWidth: "8rem",
        minHeight: "8rem",
        backgroundColor: color,
        borderRadius: "50%",
        filter: "brightness(80%)"
    };

    return (
        <div 
            style={color === litLight ? {...styles, boxShadow: `0 0 6rem 3rem ${color}`} : styles}
            className="my-2"
            onClick={() => setLitLight(color)}
        >
        </div>
    );
};

export default Light;