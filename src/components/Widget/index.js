import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import SettingsContext from '../../context';

import { CallValidateApiKey } from '../../helpers';

const Widget = props => {
	const Settings = useContext(SettingsContext);

	const [activities, setActivity] = useState([]);

	const Widget = styled.div`
		background: ${Settings.accentColor};
		color: #fff;
		border: 0;
		padding: 7px 10px;
	`;

	const Wrapper = styled.div`
		max-width: 800px;
		margin: auto;
	`;

	useEffect(() => {
		//nextActivitity();
		console.log('hook...');
	});

	const nextActivitity = _ => {
		const nextActivity = activities.length === 0 ? 'init' : 'next';
		console.log(nextActivity);
		setActivity(['1']);
	};

	nextActivitity();
	return (
		<Widget>
			<Wrapper>
				<header>Header</header>
				{props.children}
				{activities.map(item => (
					<li key={item.objectID}>
						<a href={item.url}>{item.title}</a>
					</li>
				))}
			</Wrapper>
		</Widget>
	);
};

const initActivity = () => {};

export default Widget;
