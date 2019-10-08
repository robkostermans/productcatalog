import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useStateContext } from '../../state';

const S = {};

S.Favorite = styled.li`
	align-items: center;
	display: flex;
	flex-direction: row;
	& > div {
		padding: 0.5rem;
		&:last-child {
			margin-left: auto;
		}
	}
	& img {
		padding: 0.5rem;
		width: 50px;
	}
`;

S.Button = styled.button`
	background: transparent;
	border: 0;
	cursor: pointer;
	outline: o;
	&:hover {
		background: ${props => props.theme.colors.primary};
		color: #fff;
	}
`;

S.Counter = styled.div`
	display: inline-block;
	margin: 0 0.5rem;
	padding: 0;
	text-align: center;
	width: 1.5rem;
`;

const Favorite = props => {
	const [{ products }, dispatch] = useStateContext();
	let product = products.filter(p => p.id === props.productID);
	product = product.length === 1 ? product[0] : {};

	return (
		<S.Favorite>
			<img src={`./data/${product.image}`} />
			<div>{product.title}</div>
			<div>
				<S.Button onClick={() => dispatch({ type: 'removeFavorite', product: product })}>-</S.Button>
				<S.Counter>{props.quantity}</S.Counter>
				<S.Button onClick={() => dispatch({ type: 'addFavorite', product: product })}>+</S.Button>
			</div>
		</S.Favorite>
	);
};

export default Favorite;
