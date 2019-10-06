import axios from 'axios';

async function CallGetChannelSettings(Settings) {
	const result = await axios({
		method: 'POST',
		url: process.env.REACT_APP_API + '/GetChannelSettings',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json'
		},
		data: {
			ApiKey: Settings.ApiKey
		}
	}).catch(error => {
		console.log(error);
		return false;
	});

	return result.data || false;
	//setData(result.data);
}

export default CallGetChannelSettings;
