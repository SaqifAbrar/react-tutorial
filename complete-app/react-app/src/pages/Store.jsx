import { Sidebar } from "../components/Sidebar";
import { StoreItems } from "./StoreItems";

export function Store() {
	return (
		<div className="navigation-layout">
			<Sidebar />
			<StoreItems />
		</div>
	);
}
