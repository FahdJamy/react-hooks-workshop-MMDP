import React from 'react';
import { Dropdown, Divider } from 'semantic-ui-react';

import { useHttp } from './hooks/custom';

const SelectPerson = props => {
    // Adding my custom hook to fetchdata
		const [isLoading, userData] = useHttp('https://swapi.co/api/people/',[]);
		let loadedPeople = userData ? userData.results.slice(0,10).map((data, index) => ({
			name: data.name,
			id: index + 1,
		})) : [];

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
