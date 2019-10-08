/**
 * Update Local Storage for persistent data across sessions
 * @param {array} favorites full set array of favorites you want in de localstorage
 */

export const updateLocalStorage = favorites => {
	localStorage.setItem('ProductCatalog-Favorites', JSON.stringify(favorites));
};

/**
 * Get the favorites from local storage
 * @param {array} favorites
 */
export const getLocalStorage = favorites => {
	const favoritesInStorage = localStorage.getItem('ProductCatalog-Favorites');
	return Array.isArray(JSON.parse(favoritesInStorage)) ? JSON.parse(favoritesInStorage) : [];
};
