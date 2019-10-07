import React from 'react';
import styled from 'styled-components';
import { FavoritesButton } from '../';

const S = {};

S.Header = styled.header``;

S.Title = styled.h1`
	color: ${props => props.theme.colors.primary};
	font-family: 'Kaushan Script', cursive;
	font-size: 3rem;
	margin: 1rem;
	line-height: 1;
`;
S.SubTitle = styled.h2`
	color: ${props => props.theme.colors.primary};
	display: block;
	font-family: 'Kaushan Script', cursive;
	font-size: 1.25rem;
	margin: 1rem;
	line-height: 1;
`;

//SET DEDaAULTS
S.Header.defaultProps = {
	theme: {
		colors: {
			primary: 'palevioletred'
		}
	}
};

const Header = props => {
	//const theme = useContext(ThemeContext);

	return (
		<S.Header>
			<S.Title>Robot Shop</S.Title>
			<S.SubTitle>Get your robot now ... just in case!</S.SubTitle>
		</S.Header>
	);
};

export default Header;
