import React from 'react';
import styled from 'styled-components';

//import { useStateContext } from '../../state';

const S = {};

S.Favorite = styled.li`
	background: ${props => props.theme.colors.primary};
	color: #fff;
	border: 0;
	padding: 7px 10px;
`;

S.Favorite.defaultProps = {
	theme: {
		colors: {
			primary: 'palevioletred'
		}
	}
};

const Favorite = props => {
	//const dispatch = useStateContext();
	return (
		<S.Favorite>
			{props.productID} | {props.quantity}
		</S.Favorite>
	);
};

export default Favorite;
