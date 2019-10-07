import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Product } from '../';
import { getProducts } from '../../helpers';

import { useStateContext } from '../../state';

const S = {};
S.Catalog = styled.ul`
	list-style: none;
	margin: 0;
	padding: 1rem;
`;

const Catalog = props => {
	const [{ products }, dispatch] = useStateContext();

	useEffect(() => {
		const fetchProducts = async () => {
			const loadedProducts = await getProducts();
			await dispatch({ type: 'loadProducts', products: loadedProducts });
		};
		fetchProducts();
	}, [dispatch]);

	return (
		<S.Catalog>
			{products.map(product => (
				<Product key={product.id} {...product} />
			))}
		</S.Catalog>
	);
};

Catalog.defaultProps = {
	products: []
};

export default Catalog;
