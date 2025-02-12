import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../state';
import { getProducts } from '../../helpers';
import { Product } from '../';

const S = {};
S.Catalog = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	list-style: none;
	margin: auto;
	max-width: 1140px;
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
