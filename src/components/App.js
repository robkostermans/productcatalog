import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { StateProvider } from '../state';

import { Header, Catalog, Favorites } from './';

import theme from './themes/default';
import { reducer } from '../helpers';

const GlobalStyle = createGlobalStyle`
  body {
    //color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
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
				<Favorites></Favorites>
			</ThemeProvider>
		</StateProvider>
	);
};

export default App;
