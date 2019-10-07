import React from 'react';
import styled from 'styled-components';

import { useStateContext } from '../../state';

const S = {};

S.Product = styled.li`
	background: ${props => props.theme.colors.primary};
	color: #fff;
	border: 0;
	padding: 7px 10px;
`;

//SET DEDaAULTS
S.Product.defaultProps = {
	theme: {
		colors: {
			primary: 'palevioletred'
		}
	}
};

const Product = props => {
	const dispatch = useStateContext();
	return (
		<S.Product>
			{props.title}
			<button onClick={() => dispatch[1]({ type: 'addFavorite', product: props })}>addtoWhishList</button>
		</S.Product>
	);
};

export default Product;
