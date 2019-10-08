import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../state';
import { updateFavorite } from '../../helpers';

const S = {};

S.Product = styled.li`
	background: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
	display: inline-block;
	height: 250px;
	margin: 0.5rem;
	position: relative;
	width: 250px;
`;

S.Image = styled.img`
	bottom: 0;
	left: 0;
	margin: auto;
	max-height: 100%;
	max-width: 100%;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 0;
`;
S.Label = styled.div`
	background: #fff;
	bottom: 0;
	padding: 0.5rem;
	position: absolute;
	z-index: 100;
`;
S.Title = styled.div`
	display: inline;
	font-weight: 700;
`;

S.SubTitle = styled.div`
	display: inline;
`;

S.FavoriteButton = styled.button`
	background: transparent;
	border: 0;
	bottom: 0.5rem;
	cursor: pointer;
	outline: 0;
	position: absolute;
	right: 0.5rem;
	z-index: 100;
`;

S.Icon = styled.svg`
	fill: ${props => props.theme.colors.primary};
	width: 25px;
`;

const Product = props => {
	const [{ favorites }, dispatch] = useStateContext();

	const handleUpdateFavorites = product => {
		const actionType = favorites.some(f => f.productID === product.id) ? 'clear' : 'new';
		const newFavoritesCollection = updateFavorite(favorites, product, actionType);
		dispatch({ type: 'updateFavorites', favorites: newFavoritesCollection });
	};

	return (
		<S.Product>
			<S.Label>
				<S.Title>{props.title}</S.Title> <S.SubTitle>{props.year}</S.SubTitle>
			</S.Label>
			<S.Image src={`./data/${props.image}`} />
			<S.FavoriteButton onClick={() => handleUpdateFavorites(props)}>
				<S.Icon x='0px' y='0px' viewBox='0 0 510 510'>
					<g>
						{favorites.some(f => f.productID === props.id) ? (
							<g id='favorite'>
								<path
									d='M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
			C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z'
								/>
							</g>
						) : (
							<g id='favorite-outline'>
								<path
									d='M369.75,21.675c-43.35,0-86.7,20.4-114.75,53.55c-28.05-33.15-71.4-53.55-114.75-53.55C61.2,21.675,0,82.875,0,161.925
			c0,96.9,86.7,175.95,219.3,293.25l35.7,33.15l35.7-33.15c130.05-119.85,219.3-198.9,219.3-293.25
			C510,82.875,448.8,21.675,369.75,21.675z M257.55,419.475H255l-2.55-2.55C130.05,307.274,51,235.875,51,161.925
			c0-51,38.25-89.25,89.25-89.25c38.25,0,76.5,25.5,91.8,61.2h48.45c12.75-35.7,51-61.2,89.25-61.2c51,0,89.25,38.25,89.25,89.25
			C459,235.875,379.95,307.274,257.55,419.475z'
								/>
							</g>
						)}
					</g>
				</S.Icon>
			</S.FavoriteButton>
		</S.Product>
	);
};

export default Product;
