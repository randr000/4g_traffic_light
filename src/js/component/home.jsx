import React, { useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// components
import LightHolder from './light-holder.jsx';
import LightHanger from './light-hanger.jsx';
import CycleButton from './cycle-button.jsx';
import PurpleButton from './purple-button.jsx';

//create your first component
const Home = () => {

	const [cycle, setCycle] = useState(false);
	const [purple, setPurple] = useState(false);

	return (
		<>
			<div className="d-flex justify-content-around align-items-center">
				<div className="d-flex flex-column">
					<CycleButton cycle={cycle} setCycle={setCycle} />
					<PurpleButton purple={purple} setPurple={setPurple} />
				</div>
				<div>
					<LightHanger />
					<LightHolder cycle={cycle} purple={purple}/>
				</div>
			</div>
		</>
	);
};

export default Home;
