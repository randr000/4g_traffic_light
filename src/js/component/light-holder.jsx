import React from 'react';

import Light from './light.jsx';
import SLight from './slight.jsx';

const LightHolder = () => {

    const styles = {
        backgroundColor: "black",
        width: "8rem",
        boxSizing: "content-box",
        // boxShadow: "0 0 30rem 3rem yellow"
    };

    return (
        <div style={styles} className="border border-dark border-5 p-2 mx-auto">
			<SLight color="red"/>
			<Light color="#ff9933" />
			<Light color="green"/>
		</div>
    );
};

export default LightHolder;