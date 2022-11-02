import { useState } from "react";

const Home = () => {
	// let name = "mario";
	const [name, setName] = useState("Jason");
	const [age, setAge] = useState(55);

	const handleClick = () => {
		setName("Jay");
		setAge(22);
	};

	return (
		<div className="home">
			<h2>Homepage</h2>
			<p>
				{name} is {age} years old.
			</p>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
};

export default Home;
