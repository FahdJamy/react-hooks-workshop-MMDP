import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown, Divider } from 'semantic-ui-react';

const SelectPerson = props => {
    const [loadedPeople, setPeople] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
			console.log('mounted')
			// Use effect runs when a component mounts. Similar to componentDidMount()
			setLoading(true);
			axios.get('https://swapi.co/api/people/')
			.then(response => {
					const peopleData = response.data.results.slice(0, 10);
					setLoading(false)

					setPeople(
						peopleData.map((data, index) => ({
							name: data.name,
							id: index + 1,
						}))
					)
				})
				.catch(err => {
					console.log(err);
					setLoading(false);
				})
    }, []);

		let content = <p>Loading people.....</p>;

    if(!isLoading && loadedPeople && loadedPeople.length > 0) {
			let options = loadedPeople.map((info) => {
				return {key: info.id, value: info.id, text: info.name}
			});
			content = (
				<>
					<Dropdown
						placeholder='Choose person'
						options={options}
						fluid
						selection
						value={props.value}
						onChange={props.onPersonSelected}/>
					<Divider />
				</>
			);
    } else if (!isLoading && loadedPeople.length > 0) content = <p>Failed fetching😡</p>;

    return content;
};

export default SelectPerson;
