import React, { useState, useEffect } from 'react';

import Light from './light.jsx';

const LightHolder = ({cycle, purple}) => {

    const [litLight, setLitLight] = useState(null);

    const colors = ['red', '#ff9933', 'green'];
    const additionalColor = 'purple';

    const styles = {
        backgroundColor: "black",
        width: "8rem",
        boxSizing: "content-box",
    };

    // Used to cycle lights
    useEffect(() => {

        if (cycle) {
            const intervalID = setInterval(cycleLights, 1000);
            return () => clearInterval(intervalID);
        }

    });

    // Used to include purple in light cycle
    useEffect(() => {
        if (purple) colors.push(additionalColor);
        return () => colors.pop();
    });
    
    function cycleLights() {
        let colorIdx = litLight ? colors.indexOf(litLight) : colors.length - 1;
        colorIdx = colorIdx + 1 === colors.length ? 0 : colorIdx + 1;
        setLitLight(colors[colorIdx]);
    }

    return (
        <div style={styles} className="border border-dark border-5 rounded p-2 mx-auto">
			<Light color={colors[0]} setLitLight={setLitLight} litLight={litLight} />
			<Light color={colors[1]} setLitLight={setLitLight} litLight={litLight} />
			<Light color={colors[2]} setLitLight={setLitLight} litLight={litLight} />
            {purple ? <Light color={additionalColor} setLitLight={setLitLight} litLight={litLight} /> : null}
		</div>
    );
};

export default LightHolder;