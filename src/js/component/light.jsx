import React from 'react';

const Light = ({color}) => {

    const styles = {
        minWidth: "8rem",
        minHeight: "8rem",
        backgroundColor: color,
        borderRadius: "50%",
        filter: "brightness(80%)"
    };

    return (
        <div style={styles} className="my-2"></div>
    );
};

export default Light;