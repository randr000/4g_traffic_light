import React from 'react';

const CycleButton = ({cycle, setCycle}) => {

    return cycle ? 
        (<button className="p-5 fw-bold fs-1 btn btn-danger" onClick={() => setCycle(false)}>Stop Cycle</button>) :
        (<button className="p-5 fw-bold fs-1 btn btn-success" onClick={() => setCycle(true)}>Begin Cycle</button>);
};

export default CycleButton;