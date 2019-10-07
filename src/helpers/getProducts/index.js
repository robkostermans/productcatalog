import axios from 'axios';

export async function getProducts(Settings) {
	const result = await axios({
		method: 'GET',
		url: process.env.REACT_APP_API + '/catalog.json',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json'
		}
	}).catch(error => {
		console.log(error);
		return false;
	});

	return result.data || false;
}

//export default getProducts;
