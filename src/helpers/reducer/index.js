export const reducer = (state, action) => {
	switch (action.type) {
		case 'updateFavorites':
			return {
				...state,
				favorites: action.favorites
			};

		case 'showFavorites':
			return {
				...state,
				modal: action.status
			};

		case 'loadFavorites':
			return {
				...state,
				favorites: action.favorites
			};

		case 'loadProducts':
			return {
				...state,
				products: action.products
			};

		default:
			return state;
	}
};
