const initalState = {
    loggedInAs: '',
    isCreditCardHolder: false
}

export default function(state = initalState, action){
    switch(action.type){
        case 'LOG_IN':
            return {...state, loggedInAs: action.payload}
            
            break;
        case 'IS_CREDIT_HOLDER':
            return {...state, isCreditCardHolder: true}
            break;
        default:
            return state
    }

}

export function login(name){
    return {
        type: 'LOG_IN',
        payload: name,
    };
}