import axios from 'axios';

/**
 * get products
 * @param {&} Settings faux config object not used in this demo
 * note; using axios is overkill here...
 */
export async function getProducts(Settings) {
	const result = await axios({
		method: 'GET',
		url: 'data/catalog.json',
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
