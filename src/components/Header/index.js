import React from 'react';
import styled from 'styled-components';

const S = {};

S.Header = styled.header`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 85vh;
	justify-content: center;
`;

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
	max-width: 400px;
	line-height: 2.35rem;
	text-align: center;
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
			<S.SubTitle>Get your robot now; automate your home, do some gardening, build your army and take over the world... whatever you want! Get your robots now!</S.SubTitle>
		</S.Header>
	);
};

export default Header;
