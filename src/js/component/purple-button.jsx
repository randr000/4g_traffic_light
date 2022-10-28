import React from 'react';

const PurpleButton = () => {

    return (
        <button className="p-2 fw-bold fs-1 btn mt-5 text-white" style={{backgroundColor: 'purple'}} onClick={() => setCycle(false)}>
            <p>Remove</p>
            <p>Purple</p>
        </button>
    );
};

export default PurpleButton;