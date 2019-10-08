import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StateProvider } from '../state';
import theme from './themes/default';
import { reducer } from '../helpers';
import { Header, Catalog, FavoritesButton, Favorites } from './';

const GlobalStyle = createGlobalStyle`
 	@import url('https://fonts.googleapis.com/css?family=Kaushan+Script|Roboto+Slab&display=swap');
	body {
		margin:0;
		font-size:16px;
		background:rgb(248, 249, 250);
		color:rgb(108, 117, 125);
		overflow-x: hidden;
		font-family: 'Roboto Slab', serif;
	}
`;

const App = ({ config }) => {
	const initialState = {
		products: [],
		favorites: [],
		modal: false
	};

	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<Catalog />
				<FavoritesButton />
				<Favorites />
			</ThemeProvider>
		</StateProvider>
	);
};

export default App;
