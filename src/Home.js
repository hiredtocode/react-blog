const Home = () => {
	const handleClick = (event) => {
		console.log("Hello", event);
	};

	const handleClickAgain = (name, event) => {
		console.log("Hello " + name, event.detail);
	};

	return (
		<div className="home">
			<h2>Homepage</h2>
			<button onClick={handleClick}>Click me</button>
			<button
				onClick={(event) =>
					handleClickAgain("Jason", event)
				}
			>
				Click again
			</button>
		</div>
	);
};

export default Home;
