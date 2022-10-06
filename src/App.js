import { useReducer } from 'react';
import './App.scss';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import { reducer } from './reducer';

export default function App() {
  const [{ currentOperand }, dispatch] = useReducer(reducer, { currentOperand: 0 })

  return (
    <div className="calculator-app">
      <div className="output">{currentOperand}</div>
      <button style={{ opacity: 0 }}>C</button>
      <button className='top' onClick={() => dispatch({ type: 'clear' })}>C</button>
      <button className='top' onClick={() => dispatch({ type: 'result' })}>=</button>
      <button className='top' onClick={() => dispatch({ type: 'remove' })}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-backspace" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z"></path>
          <path d="M12 10l4 4m0 -4l-4 4"></path>
        </svg>
      </button>
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="%" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="x" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
    </div>
  );
}
