import React from 'react'
import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { animated, config, useTransition } from 'react-spring';
import { StateType } from '../App';

export const ButtonLoading: React.FC<{ setState: (state: StateType) => void }> = ({ setState }) =>
{
	const [show, setShow] = React.useState(true)
	const transitions = useTransition(show, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.molasses,
	})

	const onClick = React.useCallback(() =>
	{
		setShow(false)
		setTimeout(() => setState('pending'), 1000)
	}, [setState])

	return transitions(
		(styles, item) =>
		(
			item && <animated.div style={styles}>
				<Button
					onClick={onClick}
					type="primary"
					size='large'
					icon={<PoweroffOutlined />}
				>
					Click me!
				</Button>
			</animated.div>
		)
	)
}
