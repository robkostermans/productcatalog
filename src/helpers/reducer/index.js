import { addFavorite, loadFavoritesFromStorage } from '../';

export const reducer = (state, action) => {
	switch (action.type) {
		case 'addFavorite':
			return addFavorite(state, action);
		case 'loadProducts':
			return {
				...state,
				products: action.products
			};
		case 'loadFavoritesFromStorage':
			return loadFavoritesFromStorage(state, action);
		default:
			return state;
	}
};
