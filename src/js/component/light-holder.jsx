import React, { useState } from 'react';

import Light from './light.jsx';
// import SLight from './slight.jsx';

const LightHolder = () => {

    const [litLight, setLitLight] = useState(null);

    const styles = {
        backgroundColor: "black",
        width: "8rem",
        boxSizing: "content-box",
    };


    return (
        <div style={styles} className="border border-dark border-5 rounded p-2 mx-auto">
			<Light color="red" setLitLight={setLitLight} litLight={litLight} />
			<Light color="#ff9933" setLitLight={setLitLight} litLight={litLight} />
			<Light color="green" setLitLight={setLitLight} litLight={litLight} />
		</div>
    );
};

export default LightHolder;