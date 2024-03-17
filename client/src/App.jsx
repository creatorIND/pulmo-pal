import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/data")
			.then((response) => {
				setData(response.data.message);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
}

export default App;
