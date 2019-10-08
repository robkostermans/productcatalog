/**
 * Update the favorites with new data
 * @param {array} favorites current favorites
 * @param {object} product product you whish to update with
 * @param {string} action type of update new|update|remove|clear
 */
export const updateFavorite = (favorites, product, action) => {
	if (action === 'new') {
		return [
			...favorites,
			{
				productID: product.id,
				quantity: 1
			}
		];
	}
	if (action === 'clear') {
		return favorites.filter(f => f.productID !== product.id);
	}

	if (action === 'update') {
		return favorites.filter(f => {
			if (f.productID === product.id) {
				f.quantity += 1;
			}
			return f;
		});
	}

	if (action === 'remove') {
		return favorites.filter(f => {
			if (f.productID === product.id) {
				if (f.quantity - 1 > 0) {
					f.quantity = f.quantity === 0 ? 0 : f.quantity - 1;
					return f;
				} else {
					return null;
				}
			} else {
				return f;
			}
		});
	}
};
