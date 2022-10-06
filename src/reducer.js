const reducer = (state, { type, payload }) => {
    // eslint-disable-next-line default-case
    switch (type) {
        case 'add-digit':
            if (payload.digit === "0" && state.currentOperand === "0") {
                return state
            }
            if (payload.digit === "." && state.currentOperand.includes('.')) {
                return state
            }

            return { currentOperand: `${state.currentOperand || ''}${payload.digit}` }
        case 'add-operation':
            if (state.currentOperand == null || isNaN(state.currentOperand[state.currentOperand.length - 1])) {
                return state
            }

            return { currentOperand: `${state.currentOperand || ''}${payload.operation.replace('x', '*')}` }
        case 'result':
            return {
                state, currentOperand: eval(state.currentOperand).toString()
            }
        case 'remove':
            if (state.currentOperand === 0) {
                return state
            }

            return {
                currentOperand: state.currentOperand.length === 1 ? 0 : state.currentOperand.slice(0, -1)
            }
        case 'clear':
            return {
                currentOperand: 0
            }
    }
}

export { reducer }