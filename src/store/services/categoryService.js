// const API_URL = process.env.REACT_APP_API_URL || "https://music-db-api.herokuapp.com/api"
const API_URL = "https://music-db-api.herokuapp.com/api"
// const API_URL = "http://localhost:3002/api"

const CategoryService = {
	fetchCategories() {
		return fetch(`${API_URL}/songs`)
			.then(response => response.json())
			.catch(error => {
				console.log('[CategoryService][fetchCategorys] ERROR: ', error)
			})
	}
}

export default CategoryService;
