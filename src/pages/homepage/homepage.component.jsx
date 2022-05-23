import React from 'react';
import CardList from '../../components/card-list/card-list.component';
import LoadingScreen from '../../components/loading-screen/loading-screen.component';
import SearchBox from '../../components/search-box/search-box.component';
import Dropdown from '../../components/dropdown/dropdown.component';


import './homepage.style.scss';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			region: 'all',
			searchField: '',
			loading: true,
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		fetch('https://restcountries.com/v2/all')
			.then((res) => res.json())
			.then((data) => this.setState({ countries: data, loading: false }));
	}

	handleRegion = (e) => this.setState({ region: e.target.value });
	handleSearch = (e) => this.setState({ searchField: e.target.value });

	render() {
		const { theme } = this.props;
		const { countries, region, searchField } = this.state;
		const regions = countries
			.map((e) => e.region)
			.filter((e, index, self) => self.indexOf(e) === index && e !== '');
		let filteredRegion = countries;
		if (region !== 'all')
			filteredRegion = countries.filter((country) =>
				country.region.toLowerCase().includes(region.toLowerCase())
			);
		const filterCountries = filteredRegion.filter((country) =>
			country.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				{this.state.loading ? (
					<LoadingScreen />
				) : (
					<div className={`container`}>
						<div className="controllers">
							<SearchBox
								placeholder={`Search for a country...`}
								handleChange={this.handleSearch}
								theme={theme}
							/>
							<Dropdown
								regions={regions}
								title="Filter by region"
								handleChange={this.handleRegion}
								theme={theme}
							/>
						</div>
						<CardList countries={filterCountries} theme={theme} />
					</div>
				)}
			</div>
		);
	}
}

export default HomePage;
