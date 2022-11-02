import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw Error("Couldn't fetch the data");
				}
				return response.json();
			})
			.then((data) => {
				setData(data);
				setIsLoading(false);
				setError(null);
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error.message);
			});
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
