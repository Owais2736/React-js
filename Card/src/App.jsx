
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement , reset } from './card/cardSlice'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    
       
     <div>
      The count is {count}
     </div>
     <button onClick={()=> dispatch(increment() )}>Increament</button>
     <button onClick={()=> dispatch(decrement() )}>decrement</button>
     <button onClick={()=> dispatch(reset() )}>reset</button>
    </>
  )
}

export default App
