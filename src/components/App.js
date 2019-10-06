import React, { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SettingsContextProvider } from '../context';
import { Widget } from './';

import theme from './themes/default';
import { CallValidateApiKey, CallGetChannelSettings } from '../helpers';

const GlobalStyle = createGlobalStyle`
  body {
    //color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`;

const App = ({ config }) => {
	//const Settings = useContext(SettingsContext);
	const [settings, setSettings] = useState({
		...config,
		apiKeyIsValid: null
	});

	//const [settings, setSettings] = useState(null);

	useEffect(() => {
		const fetchConfig = async () => {
			const keyValidation = await CallValidateApiKey(config);
			const channelSettings = await CallGetChannelSettings(config);
			const allConfigSettings = {
				...config,
				...keyValidation,
				...channelSettings,
				accentColor: channelSettings.clientColor || config.accent_color // reconcile two different settings into new one
			};
			await setSettings(allConfigSettings);
		};
		fetchConfig();
	});

	return (
		<React.Fragment>
			<SettingsContextProvider value={settings}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />

					<React.Fragment>
						{settings.apiKeyIsValid === null && <div>Loading...</div>}
						{settings.apiKeyIsValid === true && <Widget>He hallo</Widget>}
						{settings.apiKeyIsValid === false && <div>Invalid</div>}
					</React.Fragment>
				</ThemeProvider>
			</SettingsContextProvider>
		</React.Fragment>
	);
};

export default App;
