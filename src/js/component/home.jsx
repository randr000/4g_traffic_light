import React, { useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// components
import LightHolder from './light-holder.jsx';
import LightHanger from './light-hanger.jsx';
import CycleButton from './cycle-button.jsx';

//create your first component
const Home = () => {

	const [cycle, setCycle] = useState(false);

	return (
		<>
			<div className="d-flex justify-content-around align-items-center">
				<CycleButton cycle={cycle} setCycle={setCycle} />
				<div>
					<LightHanger />
					<LightHolder cycle={cycle} />
				</div>
			</div>
		</>
	);
};

export default Home;
