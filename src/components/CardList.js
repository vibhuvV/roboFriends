import React, { Fragment } from 'react';
import Card from '../components/Card';

const CardList = ({ robots }) => {
	const cardArray = robots.map((user, i) => {
		return <Card key={i} id={user.id} name={user.name} email={user.email} />;
	});
	return <Fragment>{cardArray}</Fragment>;
};

export default CardList;
