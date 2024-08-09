
import Button from "./UI/Button";
import {useAppSelector,useAppDispatch} from '../app/hooks'
import {increment, decrement, incrementByAmount} from '../app/features/counter/counterSlice'



const Counter = () => {
    // ** Extract Value 
    const counterValue = useAppSelector(state => state.counter.value) //** state:RootState Type  & counter is objectState in counterSlice 
    const textValue = useAppSelector(state =>state.counter.text) //** state:RootState Type 
   const dispatch = useAppDispatch() 
    
  return (
      <div className="w-full h-screen p-2 flex flex-col items-center justify-center space-y-4">
        <h3 className="text-4xl font-semibold">Counter: {counterValue}</h3>
        <div className="flex flex-row space-x-3">
        <Button className="w-fit bg-purple-700" onClick={()=> dispatch(increment())}>{textValue}</Button>
        <Button className="w-fit bg-purple-700" onClick={()=> dispatch(decrement())}>Decrease Counter</Button>
        <Button className="w-fit bg-purple-700" onClick={()=> dispatch(incrementByAmount(5))}>Increase Counter By 5</Button>
        </div>
       
      </div>
  );
};

export default Counter;
