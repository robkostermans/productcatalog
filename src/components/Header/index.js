import React from 'react';
import styled from 'styled-components';
import { WhishListButton } from '../';

const S = {};

S.Header = styled.header`
	background: ${props => props.theme.colors.primary};
	color: #fff;
	border: 0;
	padding: 7px 10px;
`;
S.Wrapper = styled.div`
	max-width: 800px;
	margin: auto;
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
			<S.Wrapper>
				Header
				<WhishListButton />
			</S.Wrapper>
		</S.Header>
	);
};

export default Header;
