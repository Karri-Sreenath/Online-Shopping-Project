import React from 'react'
import type { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
export function Sample() {
  const count = useSelector((state: RootState) => state.counter.value)


  return (
    <div>
      <div>
       
         
        <span>{count}</span>
       
      </div>
    </div>
  )
}