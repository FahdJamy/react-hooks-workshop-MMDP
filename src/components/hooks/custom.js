import { useState, useEffect } from 'react';
import axios from 'axios';

// Our custom hook will return an array of two variables
// Please Note hooks can return or not return variables
export const useHttp = (url, depenpencies = []) => {
	const [isLoading, setIsLoading] = useState(false);
	const [fetchedData, setData] = useState(null);
	
	useEffect(() => {
		// Use effect runs when a component mounts. Similar to componentDidMount()
		setIsLoading(true);
		axios.get(url)
		.then(response => {
			const {data} = response;
			setIsLoading(false);
			setData(data);
		})
		.catch(err => {
			console.log(err);
			setIsLoading(false);
		})
	}, depenpencies);

	return [isLoading, fetchedData];
};
