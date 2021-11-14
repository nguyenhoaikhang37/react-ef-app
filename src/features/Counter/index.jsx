import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncreaseClick = () => {
    dispatch(increase());
  };
  const handleDecreaseClick = () => {
    dispatch(decrease());
  };

  return (
    <div>
      Counter: {count}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
