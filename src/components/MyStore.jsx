import React, { useEffect, useState } from 'react'
import { buyApple, buyOrange } from '../Redux/Fruit/ActionsFruit'
import { useDispatch, useSelector } from 'react-redux'

const MyStore = () => {
  const [fruit, setFruit] = useState({})
  const dispath = useDispatch()
  const apple = useSelector(state => state.apple);
  const orange = useSelector(state => state.orange);


 
  return (
    <div>
      {/* <p>{fruit.apple}</p>
      <p>{fruit.orange}</p>

      <button className='btn btn-dark' onClick={() => dispath(buyApple())}>apple</button>
      <button className='btn btn-dark' onClick={() => dispath(buyOrange())}>orange</button> */}
    </div>
  )
}


export default MyStore
