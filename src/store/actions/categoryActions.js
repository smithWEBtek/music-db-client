import * as ActionTypes from './actionTypes'
import CategoryService from '../services/categoryService'

//-----FETCH CATEGORIES ACTIONS-----------------------------
export const fetchCategoriesStart = () => {
	return { type: ActionTypes.FETCH_CATEGORIES_START }
}
export const fetchCategoriesSuccess = (categories) => {
	return { type: ActionTypes.FETCH_CATEGORIES_SUCCESS, categoriesList: categories }
}
export const fetchCategoriesFail = (error) => {
	return { type: ActionTypes.FETCH_CATEGORIES_FAIL, error: error }
}
export const fetchCategories = () => {
	return dispatch => {
		dispatch(fetchCategoriesStart())
		CategoryService.fetchCategories()
			.then(response => {
				dispatch({ type: ActionTypes.FETCH_CATEGORIES, categoriesList: response })
				dispatch(fetchCategoriesSuccess())
			})
			.catch(error => {
				dispatch(fetchCategoriesFail(error))
			})
	}
}
