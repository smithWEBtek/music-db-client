import * as actionTypes from '../actions/actionTypes';

const initialState = {
	songs: [
		{ title: 'Blue Skies', genre: 'Swing' },
		{ title: 'Isfahan', genre: 'Jazz' },
		{ title: 'Antillanna', genre: 'Salsa' }
	],
	error: false,
	loading: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// --FETCH SONGS------------------------------------

		case actionTypes.FETCH_SONGS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_SONGS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_SONGS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_SONGS:
			const songs = action.songsList
			return Object.assign({}, state, {
				songs: songs
			})
		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;