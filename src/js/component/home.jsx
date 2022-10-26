import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// components
import LightHolder from './light-holder.jsx';
import LightHanger from './light-hanger.jsx';

//create your first component
const Home = () => {
	return (
		<>
			<LightHanger />
			<LightHolder />
		</>
	);
};

export default Home;
