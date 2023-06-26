import { observer } from 'mobx-react-lite';
import counter from '../model/counter';

export const Counter = observer(() => {
  return (
    <div className="Counter">
      <h1>{counter.total}</h1>
      <button onClick={() => counter.increment()}>Plus +</button>
      <h3>Count: {counter.count}</h3>
      <button onClick={() => counter.decrement()}>Minus -</button>
    </div>
  );
});
