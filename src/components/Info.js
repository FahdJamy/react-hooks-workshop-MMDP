import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Person from './Person';


const PersonInfo = (props) => {
    const [loadedPerson, setSelectedPerson] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
			setLoading(true);
			axios.get('https://swapi.co/api/people/' + props.selectedPerson)
				.then(response => {
					const {data} = response;
					const userInfo = {
						id: props.selectedPerson,
						name: data.name,
						height: data.height,
						gender: data.gender,
						mass: data.mass,
						movieCount: data.films.length,
						colors: {
								hair: data.hair_color,
						}
					}

				setLoading(false)
				setSelectedPerson(userInfo)
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
    }, [props.selectedPerson]);

    useEffect(() => {
			// This useEffect will be run when a component is going to unmount
			// This return will be executed
      return () => {
        console.log('Perform clean ups');
      };
    }, []);

    let content = <p>loading persons info</p>

    if (!isLoading && loadedPerson.id) {
			content = (
				<Person
					name={loadedPerson.name}
					gender={loadedPerson.gender}
					mass={loadedPerson.mass}
					height={loadedPerson.height}
					hairColor={loadedPerson.colors.hair}
					skinColor={loadedPerson.colors.skin}
					movieCount={loadedPerson.movieCount}
				/>
			)
    } else if (!isLoading && !loadedPerson.id) {
			content = <p>Failed fetching😔</p>
		}
		
    return content;
}

// React.memo function will work as our componentShouldUpdate lifeCycle method.
export default React.memo(PersonInfo);
