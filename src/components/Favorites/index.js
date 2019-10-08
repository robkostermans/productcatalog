import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { useStateContext } from '../../state';
import { Favorite } from '..';

const S = {};
const slide = keyframes`
  from {
    transform: translateX(350px);
  }

  to {
    transform: translateX(0px);
  }
`;

S.Favorites = styled.ul`
	animation: ${slide} 0.15s linear forwards;
	background: #fff;
	display: flex;
	flex-direction: column;
	height: 100vh;
	list-style: none;
	margin: 0;
	padding: 0.5rem;
	padding-top: 100px;
	position: fixed;
	right: 0;
	top: 0;
	transform: translateX(350px);
	width: 350px;
`;

const fadin = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

S.Modal = styled.div`
	animation: ${fadin} 0.25s linear forwards;
	background: rgba(0, 0, 0, 0.25);
	left: 0;
	height: 100vh;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 500;
`;

S.Title = styled.h1`
	color: ${props => props.theme.colors.primary};
	font-family: 'Kaushan Script', cursive;
	font-size: 2rem;
	margin: 1rem;
	line-height: 1.35;
`;
const Favorites = props => {
	const [{ favorites, modal }, dispatch] = useStateContext();

	useEffect(() => {
		dispatch({ type: 'loadFavoritesFromStorage' });
	}, [dispatch]);

	return (
		<>
			{modal && (
				<S.Modal>
					<S.Favorites>
						<S.Title>Build your ar... collection now!</S.Title>
						{favorites.map((favorite, index) => (
							<Favorite key={index} {...favorite} />
						))}
					</S.Favorites>
				</S.Modal>
			)}
		</>
	);
};

export default Favorites;
