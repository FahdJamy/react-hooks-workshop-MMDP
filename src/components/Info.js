import React, { useEffect } from 'react';

import { useHttp } from './hooks/custom';
import Person from './Person';


const PersonInfo = (props) => {
		// Adding my custom hook to fetchdata
		const [isLoading, userData] = useHttp(
			`https://swapi.co/api/people/${props.selectedPerson}`,
			[props.selectedPerson],
		);
		let userInfo = null

		if (userData) {
			userInfo = {
				id: props.selectedPerson,
				name: userData.name,
				height: userData.height,
				gender: userData.gender,
				mass: userData.mass,
				movieCount: userData.films.length,
				colors: {
						hair: userData.hair_color,
				}
			}
		}

    useEffect(() => {
			// This useEffect will be run when a component is going to unmount
			// This return will be executed
      return () => {
        console.log('Perform clean ups');
      };
    }, []);

    let content = <p>loading persons info</p>

    if (!isLoading && userInfo) {
			content = (
				<Person
					name={userInfo.name}
					gender={userInfo.gender}
					mass={userInfo.mass}
					height={userInfo.height}
					hairColor={userInfo.colors.hair}
					skinColor={userInfo.colors.skin}
					movieCount={userInfo.movieCount}
				/>
			)
    } else if (!isLoading && !userInfo) {
			content = <p>Failed fetching😔</p>
		}
		
    return content;
}

// React.memo function will work as our componentShouldUpdate lifeCycle method.
export default React.memo(PersonInfo);
