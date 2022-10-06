export default function OperationButton({ dispatch, operation }){
  return <button className='operation' onClick={() => dispatch({ type: 'add-operation', payload: { operation } })}>
    {operation}
  </button>;
}