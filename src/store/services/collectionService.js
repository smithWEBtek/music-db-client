// const API_URL = process.env.REACT_APP_API_URL || "https://music-db-api.herokuapp.com/api"
const API_URL = "https://music-db-api.herokuapp.com/api"
// const API_URL = "http://localhost:3002/api"

const CollectionService = {
	fetchCollections() {
		return fetch(`${API_URL}/collections`)
			.then(response => response.json())
			.catch(error => {
				console.log('[CollectionService][fetchCollections] ERROR: ', error)
			})
	}
}

export default CollectionService;
