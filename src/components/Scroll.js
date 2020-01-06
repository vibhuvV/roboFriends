import React, { Fragment } from 'react';

const Scroll = (props) => {
	return (
		<Fragment>
			<div style={{ overflowY: 'scroll', height: '80vh' }}>{props.children}</div>
		</Fragment>
	);
};

export default Scroll;
