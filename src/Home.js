import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((response) => {
				if (!response.ok) {
					throw Error("Couldn't fetch the data");
				}
				return response.json();
			})
			.then((data) => {
				setBlogs(data);
				setIsLoading(false);
				setError(null);
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error.message);
			});
	}, []);

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blogs && (
				<BlogList blogs={blogs} title="Awesome Blog!" />
			)}
		</div>
	);
};

export default Home;
