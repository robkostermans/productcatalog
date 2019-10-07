export const addFavorite = (state, action) => {
	if (state.favorites.some(item => item.productID === action.product.id)) {
		// update existing
		state.favorites.map(d => {
			if (d.productID === action.product.id) {
				d.quantity++;
			}
			return null;
		});
	} else {
		state.favorites.push({
			// add new
			productID: action.product.id,
			quantity: 1
		});
	}

	updateLocalStorage(state.favorites);

	return {
		...state,
		favorites: state.favorites
	};
};

// export const removeFavorite = (state, action) => {
// 	return {
// 		...state,
// 		favorites: [...state.favorites, action.product]
// 	};
// };

// export const isFavorite = (state, action) => {
// 	return {
// 		...state,
// 		favorites: [...state.favorites, action.product]
// 	};
// };

const updateLocalStorage = favorites => {
	localStorage.setItem('ProductCatalog-Favorites', JSON.stringify(favorites));
};
