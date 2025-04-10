type FormState = typeof INITIAL_STATE;
type FormAction =
  | { type: "RESET_VALIDITY" }
	| { type: "SET_VALUE"; payload: object}
	| { type: "CLEAR" }
  | { type: "SUBMIT"; payload: { title: string; text: string; date: Date | undefined } 
};

export const INITIAL_STATE = {
	isValid: {
		title: true,
		text: true,
		date: true
	},
	values:{
		title: '',
		text: '',
		date: undefined
	},
	isFormReadyToSubmit: false
}

export const formReducer = (state: FormState, action: FormAction) =>{
	switch(action.type){
		case 'SET_VALUE':
			return {...state,	values: {...state, ...action.payload}}
		case 'CLEAR':
			return {...state,	values: INITIAL_STATE.values}
		case 'RESET_VALIDITY':
			return {...state, isValid: INITIAL_STATE.isValid};
		case 'SUBMIT':{
			const titleValidity = action.payload.title?.trim().length;
			const textValidity = action.payload.text?.trim().length;
			const dateValidity = action.payload.date;
			return {
				...state,
				values: action.payload,
				isValid: {
					title: titleValidity ,
					text: textValidity ,
					date: dateValidity 
				},
				isFormReadyToSubmit: titleValidity && textValidity && dateValidity
			}
		}
		default:
      return state;
	}
}