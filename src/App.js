import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {IncNumb, DecNumb} from './Actions'

export default function App() {

  const myState = useSelector(state => state.countReducer)
  const dispatch = useDispatch()

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    counter: {
      display: 'flex', 
      alignItems: 'center'
    },
    btn: {
      margin: '20px',
      paddingLeft: '25px',
      paddingRight: '25px'
    }
  }

  return (
    <div style={style.container}>
      <h1>Increment/Decrement Counter</h1>
      <div style={style.counter}>
        <button style={style.btn} onClick={() => dispatch(IncNumb())}><h1>+</h1></button>
        <h1>{myState}</h1>
        <button style={style.btn} onClick={() => dispatch(DecNumb())}><h1>-</h1></button>
      </div>
    </div>
  )
}