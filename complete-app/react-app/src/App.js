import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { StoreItems } from "./pages/StoreItems";
import "./styles/store.css";

function App() {
	const [menChecked, setMenChecked] = useState(false);
	const [womenChecked, setWomenChecked] = useState(false);

	function handleMenChecked() {
		console.log(!menChecked);
		setMenChecked(!menChecked);
	}

	function handleWomenChecked(event) {
		console.log(!womenChecked);
		setWomenChecked(!womenChecked);
	}

	return (
		<div className="app">
			<div className="navigation-layout">
				<Navbar />
			</div>
			<div className="side-layout">
				<Sidebar handleWomenChecked={() => handleWomenChecked()} handleMenChecked={() => handleMenChecked()} />
				<StoreItems menChecked={menChecked && "men's clothing"} womenChecked={womenChecked && "women's clothing"} />
			</div>
		</div>
	);
}

export default App;
