import * as actionTypes from '../actions/actionTypes';

const initialState = {
	collections: [
		{ name: 'Howie Rubenstein gig' },
		{ name: 'Cornell Coley gig' },
		{ name: 'Vibra Tropicale gig' },
		{ name: 'Mark Greel gig' },
	],
	error: false,
	loading: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// --FETCH COLLECTIONS------------------------------------

		case actionTypes.FETCH_COLLECTIONS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_COLLECTIONS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_COLLECTIONS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_COLLECTIONS:
			const collections = action.collectionsList
			return Object.assign({}, state, {
				collections: collections
			})
		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;