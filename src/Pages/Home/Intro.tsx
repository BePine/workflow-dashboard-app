import { useEffect, useState } from "react";
import useTypewriter from "react-typewriter-hook"

type Props = {
	display: string,
	opacity: number
}
const Intro = (props: Props) => {
	const str = "Workflow"
	const [animationState, setAnimationState] = useState({animationPlayState: "paused"})
	useEffect(()=>{
		setTimeout(()=>{
			setAnimationState({animationPlayState: "running"})
		},1000)
	},[])
	return (
		<div data-testid="introId" className='App-intro' style={{display: props.display, opacity: props.opacity}}>
			<div className='typing'>
                <p>{useTypewriter(str)}</p>
                <h6 style={animationState}>Welcome!</h6>
            </div>
		</div>
	);
};

export default Intro;
