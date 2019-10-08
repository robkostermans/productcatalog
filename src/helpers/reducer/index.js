import { addFavorite, removeFavorite, loadFavoritesFromStorage } from '../';

export const reducer = (state, action) => {
	switch (action.type) {
		case 'addFavorite':
			return addFavorite(state, action);
		case 'removeFavorite':
			return removeFavorite(state, action);
		case 'showFavorites':
			return {
				...state,
				modal: action.status
			};
		case 'loadFavoritesFromStorage':
			return loadFavoritesFromStorage(state, action);
		case 'loadProducts':
			return {
				...state,
				products: action.products
			};

		default:
			return state;
	}
};
