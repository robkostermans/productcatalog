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

export const loadFavoritesFromStorage = (state, action) => {
	const loadedFavorites = getLocalStorage();

	return {
		...state,
		favorites: loadedFavorites
	};
};

export const removeFavorite = (state, action) => {
	const newFavorites = state.favorites.filter(f => f.productID !== action.product.id);
	updateLocalStorage(newFavorites);
	return {
		...state,
		favorites: newFavorites
	};
};

const updateLocalStorage = favorites => {
	localStorage.setItem('ProductCatalog-Favorites', JSON.stringify(favorites));
};
const getLocalStorage = favorites => {
	return JSON.parse(localStorage.getItem('ProductCatalog-Favorites'));
};
