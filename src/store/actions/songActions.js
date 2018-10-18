import * as actionTypes from './actionTypes'
import SongService from '../services/SongService'

//-----FETCH SONGS ACTIONS-----------------------------
export const fetchSongsStart = () => {
	return { type: actionTypes.FETCH_SONGS_START }
}
export const fetchSongsSuccess = (students) => {
	return { type: actionTypes.FETCH_SONGS_SUCCESS, studentsList: students }
}
export const fetchSongsFail = (error) => {
	return { type: actionTypes.FETCH_SONGS_FAIL, error: error }
}
export const fetchSongs = () => {
	return dispatch => {
		dispatch(fetchSongsStart())
		SongService.fetchSongs()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_SONGS, studentsList: response })
				dispatch(fetchSongsSuccess())
			})
			.catch(error => {
				dispatch(fetchSongsFail(error))
			})
	}
}
