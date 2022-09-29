import { createStore } from 'redux'

const defaultState = {
	hamburgerOpen: false,
}

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_HAMBURGER':
			return { ...state, hamburgerOpen: action.payload }

		default:
			return state
	}
}

const store = createStore(reducer)

export default store
