import * as actionTypes from '../actions/actionTypes';

const initialState = {
	categories: [
		{ title: 'Bittersweet Blues', genre: 'Swing' },
		{ title: 'Isfahan', genre: 'Jazz' },
		{ title: 'Antillanna', genre: 'Salsa' }
	],
	error: false,
	loading: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// --FETCH CATEGORIES------------------------------------

		case actionTypes.FETCH_CATEGORIES_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_CATEGORIES_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_CATEGORIES_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_CATEGORIES:
			const categories = action.categoriesList
			return Object.assign({}, state, {
				categories: categories
			})
		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;