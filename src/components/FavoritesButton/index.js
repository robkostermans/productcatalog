import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../state';

const S = {};

S.FavoritesButton = styled.button`
	align-items: center;
	background: transparent;
	border: 0;
	cursor: pointer;
	display: flex;
	justify-content: center;
	outline: 0;
	position: fixed;
	right: 1rem;
	top: 1rem;
	z-index: 600;
`;

S.Icon = styled.svg`
	fill: ${props => props.theme.colors.primary};
	width: 50px;
`;

S.Badge = styled.div`
	color: ${props => props.theme.colors.primary};
	font-size: 1rem;
	font-weight: bold;
	position: absolute;
`;

const FavoritesButton = props => {
	const [{ modal, favorites }, dispatch] = useStateContext();

	// TODO: create function
	const totalNumberOfFavorites = favorites.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue.quantity;
	}, 0);

	return (
		<S.FavoritesButton onClick={() => dispatch({ type: 'showFavorites', status: !modal })}>
			<S.Badge>{totalNumberOfFavorites}</S.Badge>
			<S.Icon x='0px' y='0px' viewBox='0 0 510 510'>
				<g>
					<g id='favorite-outline'>
						<path
							d='M369.75,21.675c-43.35,0-86.7,20.4-114.75,53.55c-28.05-33.15-71.4-53.55-114.75-53.55C61.2,21.675,0,82.875,0,161.925
			c0,96.9,86.7,175.95,219.3,293.25l35.7,33.15l35.7-33.15c130.05-119.85,219.3-198.9,219.3-293.25
			C510,82.875,448.8,21.675,369.75,21.675z M257.55,419.475H255l-2.55-2.55C130.05,307.274,51,235.875,51,161.925
			c0-51,38.25-89.25,89.25-89.25c38.25,0,76.5,25.5,91.8,61.2h48.45c12.75-35.7,51-61.2,89.25-61.2c51,0,89.25,38.25,89.25,89.25
			C459,235.875,379.95,307.274,257.55,419.475z'
						/>
					</g>
				</g>
			</S.Icon>
		</S.FavoritesButton>
	);
};

export default FavoritesButton;
