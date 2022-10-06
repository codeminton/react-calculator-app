export default function DigitButton({ dispatch, digit }){
    return <button onClick={() => dispatch({ type: 'add-digit', payload: { digit } })}>
        {digit}
    </button>;
}