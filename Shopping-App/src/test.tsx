import type { RootState } from './store'
import { useSelector,  } from 'react-redux'
export function Test() {
  const count = useSelector((state: RootState) => state.counter.value)
  return (
    <div>
      <div>
         
        <span>{count}</span>
       
      </div>
    </div>
  )
}