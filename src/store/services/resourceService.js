// const API_URL = process.env.REACT_APP_API_URL || "https://music-db-api.herokuapp.com/api"
const API_URL = "https://music-db-api.herokuapp.com/api"
// const API_URL = "http://localhost:3002/api"

const ResourceService = {
	fetchResources() {
		return fetch(`${API_URL}/resources`)
			.then(response => response.json())
			.catch(error => {
				console.log('[ResourceService][fetchResources] ERROR: ', error)
			})
	}
}

export default ResourceService;
