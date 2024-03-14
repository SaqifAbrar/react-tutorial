import { Sidebar } from "../components/Sidebar";
import { StoreItems } from "./StoreItems";
import "../styles/store.css";

export function Store() {
	return (
		<div className="side-layout">
			<Sidebar />
			<StoreItems />
		</div>
	);
}
