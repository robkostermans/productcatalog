import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { StateProvider } from '../state';

import { Header, Catalog, FavoritesButton, Favorites } from './';

import theme from './themes/default';
import { reducer } from '../helpers';

const GlobalStyle = createGlobalStyle`
 	@import url('https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat|Roboto+Slab&display=swap');
  body {
	  margin:0;
	font-size:16px;
	background:rgb(248, 249, 250);
	color:rgb(108, 117, 125);
	overflow-x: hidden;
	font-family: 'Roboto Slab', serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 700;
	font-family: 'Montserrat', sans-serif;}

`;

const App = ({ config }) => {
	const initialState = {
		products: [],
		favorites: []
	};

	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<Catalog></Catalog>
				<FavoritesButton />
				<Favorites></Favorites>
			</ThemeProvider>
		</StateProvider>
	);
};

export default App;
