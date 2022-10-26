import React from 'react';

const SLight = ({color}) => {

    const styles = {
        minWidth: "8rem",
        minHeight: "8rem",
        backgroundColor: color,
        borderRadius: "50%",
        filter: "brightness(80%)",
        boxShadow: "0 0 6rem 3rem yellow"
    };

    return (
        <div style={styles} className="my-2"></div>
    );
};

export default SLight;