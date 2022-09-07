import React from 'react'
import Lottie from 'lottie-react';
import lottie_animation from '../lottie/INITIALIZE_1_HQ.json'
import { animated, config, useTransition } from 'react-spring';
import { StateType } from '../App';

export const LottieComponent: React.FC<{ setState: (state: StateType) => void }> = ({ setState }) =>
{
	const timeout = React.useRef<ReturnType<typeof setTimeout>>()
	const [show, setShow] = React.useState(true)
	const transitions = useTransition(show, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.molasses,
	})

	React.useEffect(() =>
	{
		setTimeout(() =>
		{
			setShow(false)
		}, 1000)
		setTimeout(() =>
		{
			setState('resolve')
		}, 2500)
	}, [])

	return transitions(
		(styles, item) =>
		(
			item && <animated.div style={styles}>
				<Lottie animationData={lottie_animation} loop={true} />
			</animated.div>
		))
}
