import React from 'react';

const PurpleButton = ({purple, setPurple}) => {

    return (
        <button 
            className="p-2 fw-bold fs-1 btn mt-5 text-white" 
            style={{backgroundColor: 'purple'}}
            onClick={() => setPurple(!purple)}
        >
            <p>{purple ? 'Remove' : 'Add'}</p>
            <p>Purple</p>
        </button>
    );
};

export default PurpleButton;