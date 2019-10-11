import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../state';
import { updateFavorite } from '../../helpers';

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
	const [{ products, favorites }, dispatch] = useStateContext();
	const [product, setProduct] = useState({});

	useEffect(() => {
		let product = products.filter(p => p.id === props.productID);
		product = product.length === 1 ? product[0] : {};
		setProduct(product);
	}, [products, props.productID]);

	const handleUpdateFavorites = (product, value) => {
		const actionType = value === -1 ? 'remove' : 'update';
		const newFavoritesCollection = updateFavorite(favorites, product, actionType);
		dispatch({ type: 'updateFavorites', favorites: newFavoritesCollection });
	};

	return (
		<S.Favorite>
			<img src={`./data/${product.image}`} alt='' />
			<div>{product.title}</div>
			<div>
				<S.Button onClick={() => handleUpdateFavorites(product, -1)}>-</S.Button>
				<S.Counter>{props.quantity}</S.Counter>
				<S.Button onClick={() => handleUpdateFavorites(product, 1)}>+</S.Button>
			</div>
		</S.Favorite>
	);
};

export default Favorite;
