import { addFavorite } from '../';

export const reducer = (state, action) => {
	switch (action.type) {
		case 'addFavorite':
			return addFavorite(state, action);
		case 'loadProducts':
			return {
				...state,
				products: action.products
			};
		default:
			return state;
	}
};
