import { useEffect, useState } from "react";

type prop = { display: 'none' } | { display: 'block' };
const Intro = (props: prop) => {
	const str = "Workflow"   
	return (
		<div className='App-intro' style={props}>
			<div className='typing'>
                <p>{str}</p>
                <h6>bottom text</h6>
            </div>
		</div>
	);
};

export default Intro;
