import React from 'react';
import styled from 'styled-components';

const S = {};

S.WhishListButton = styled.button`
	background: ${props => props.theme.colors.primary};
	color: #fff;
	border: 0;
	padding: 7px 10px;
`;

//SET DEDaAULTS
S.WhishListButton.defaultProps = {
	theme: {
		colors: {
			primary: 'palevioletred'
		}
	}
};

const WhishListButton = props => {
	return <S.WhishListButton>Favorites</S.WhishListButton>;
};

export default WhishListButton;
