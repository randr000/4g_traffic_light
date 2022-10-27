import React from 'react';

import Light from './light.jsx';
// import SLight from './slight.jsx';

const LightHolder = () => {

    const styles = {
        backgroundColor: "black",
        width: "8rem",
        boxSizing: "content-box",
    };

    return (
        <div style={styles} className="border border-dark border-5 rounded p-2 mx-auto">
			<Light color="red"/>
			<Light color="#ff9933" />
			<Light color="green"/>
		</div>
    );
};

export default LightHolder;