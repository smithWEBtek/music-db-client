import * as actionTypes from './actionTypes'
import SongService from '../services/SongService'

//-----FETCH SONGS ACTIONS-----------------------------
export const fetchSongsStart = () => {
	return { type: actionTypes.FETCH_SONGS_START }
}
export const fetchSongsSuccess = (songs) => {
	return { type: actionTypes.FETCH_SONGS_SUCCESS, songsList: songs }
}
export const fetchSongsFail = (error) => {
	return { type: actionTypes.FETCH_SONGS_FAIL, error: error }
}
export const fetchSongs = () => {
	return dispatch => {
		dispatch(fetchSongsStart())
		SongService.fetchSongs()
			.then(response => {
				dispatch({ type: actionTypes.FETCH_SONGS, songsList: response })
				dispatch(fetchSongsSuccess())
			})
			.catch(error => {
				dispatch(fetchSongsFail(error))
			})
	}
}
