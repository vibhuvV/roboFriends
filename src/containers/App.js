import React, { Fragment, Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((users) => {
			this.setState({ robots: users });
		});
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const filterRobot = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		if (!this.state.robots.length) {
			return <h1 className="tc">Loading</h1>;
		} else {
			return (
				<Fragment>
					<div className="tc">
						<h1 className="f1">Robo Friends</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
							<CardList robots={filterRobot} />
						</Scroll>
					</div>
				</Fragment>
			);
		}
	}
}

export default App;
