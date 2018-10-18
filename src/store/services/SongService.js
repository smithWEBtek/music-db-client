const API_URL = process.env.REACT_APP_API_URL || "https://music-db-api.herokuapp.com/api"

const SongService = {
	fetchSongs() {
		return fetch(`${API_URL}/songs`)
			.then(response => response.json())
			.catch(error => {
				console.log('[SongService][fetchSongs] ERROR: ', error)
			})
	}
}

export default SongService;