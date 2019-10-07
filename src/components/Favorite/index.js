import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useStateContext } from '../../state';

const S = {};

S.Favorite = styled.li`
	background: ${props => props.theme.colors.primary};
	color: #fff;
	border: 0;
	padding: 7px 10px;
`;

S.Favorite.defaultProps = {
	theme: {
		colors: {
			primary: 'palevioletred'
		}
	}
};

const Favorite = props => {
	const [{ products }] = useStateContext();
	let product = products.filter(p => p.id === props.productID);
	product = product.length === 1 ? product[0] : {};

	return (
		<S.Favorite>
			{props.productID} |{product.title}| {props.quantity}
		</S.Favorite>
	);
};

export default Favorite;
