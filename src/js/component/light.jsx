import React, { useState } from 'react';

const Light = ({color}) => {

    const [state, setState] = useState({color: color, selected: false});

    const styles = {
        minWidth: "8rem",
        minHeight: "8rem",
        backgroundColor: state.color,
        borderRadius: "50%",
        filter: "brightness(80%)"
    };

    return (
        <div 
            style={state.selected ? {...styles, boxShadow: `0 0 6rem 3rem ${state.color}`} : styles}
            className="my-2"
            onClick={() => setState({...state, selected: !state.selected})}
        >
        </div>
    );
};

export default Light;