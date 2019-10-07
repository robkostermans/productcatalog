import React from 'react';
import styled from 'styled-components';

import { useStateContext } from '../../state';

import { Favorite } from '..';

const S = {};
S.Wishlist = styled.ul`
	background: ${props => props.theme.colors.primary};
	margin: 0;
`;

const Favorites = props => {
	const [{ favorites }] = useStateContext();
	return (
		<S.Wishlist>
			{favorites.map((favorite, index) => (
				<Favorite key={index} {...favorite} />
			))}
		</S.Wishlist>
	);
};

// Favorites.defaultProps = {
// 	wishlist: []
// };

export default Favorites;
