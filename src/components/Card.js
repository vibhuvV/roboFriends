import React, { Fragment } from 'react';

const Card = (props) => {
	const { name, email, id } = props;
	return (
		<Fragment>
			<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
				<img src={`https://robohash.org/${id}?200x200`} alt="robo" />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Card;
