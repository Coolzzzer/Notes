type FormState = typeof INITIAL_STATE;
type FormAction =
  | { type: "RESET_VALIDITY" }
	| { type: "SET_VALUE"; payload: object}
	| { type: "CLEAR" }
  | { type: "SUBMIT"};

export const INITIAL_STATE = {
	isValid: {
		title: true,
		text: true,
		date: true
	},
	values:{
		title: '',
		text: '',
		date: ''
	},
	isFormReadyToSubmit: false
}

export const formReducer = (state: FormState, action: FormAction) =>{
	switch(action.type){
		case 'SET_VALUE':
			return { ...state, values: { ...state.values, ...action.payload } };
		case 'CLEAR':
			return {...INITIAL_STATE}
		case 'RESET_VALIDITY':
			return {...state, isValid: INITIAL_STATE.isValid};
		case 'SUBMIT':{
			const titleValidity = Boolean(state.values.title?.trim().length);
			const textValidity = Boolean(state.values.text?.trim().length);
			const dateValidity = Boolean(state.values.date);
			return {
				...state,
				values:{
					title: state.values.title ,
					text: state.values.text ,
					date: new Date(state.values.date as string)
				},
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