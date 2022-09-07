import React from 'react'
import { useTransition, config, animated } from 'react-spring'

export const SuccessWidget: React.FC = () =>
{
	const [show] = React.useState(true)
	const transitions = useTransition(show, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.molasses,
	})

	return transitions(
		(styles, item) =>
		(
			item && <animated.div style={styles} className='widget'>
				<div><b>Привет</b></div>
				<div>Чем могу помочь?</div>
			</animated.div>
		))
}
