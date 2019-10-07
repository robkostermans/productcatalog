import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useStateContext } from '../../state';
import { getProducts } from '../../helpers';
import { Favorite } from '..';

const S = {};
S.Wishlist = styled.ul`
	background: ${props => props.theme.colors.primary};
	margin: 0;
`;

const Favorites = props => {
	const [{ favorites }, dispatch] = useStateContext();

	useEffect(() => {
		dispatch({ type: 'loadFavoritesFromStorage' });
	}, [dispatch]);

	return (
		<S.Wishlist>
			{favorites.map((favorite, index) => (
				<Favorite key={index} {...favorite} />
			))}
		</S.Wishlist>
	);
};

export default Favorites;
