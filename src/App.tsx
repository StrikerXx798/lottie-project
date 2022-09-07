import './App.css';
import 'antd/dist/antd.css'
import React from 'react'
import { ButtonLoading } from './components/ButtonLoading';
import { LottieComponent } from './components/LottieComponent';
import { SuccessWidget } from './components/SuccessWidget';

export type StateType = 'ready' | 'pending' | 'resolve'

export const App: React.FC = () =>
{
  const [state, setState] = React.useState<StateType>('ready')

  const getState = React.useCallback(
    (stateScreen: StateType): React.ReactNode =>
    {
      switch (stateScreen)
      {
        case 'resolve':
          return <SuccessWidget />
        case 'pending':
          return <LottieComponent setState={setState} />
        case 'ready':
        default:
          return <ButtonLoading setState={setState} />
      }
    }, [])


  return (
    <div className='app'>
      {getState(state)}
    </div>
  )
}

