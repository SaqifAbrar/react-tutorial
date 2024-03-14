import "../styles/sidebar.css";

export function Sidebar({ handleMenChecked, handleWomenChecked }) {
	return (
		<div className="sidebar">
			<div className="sidebar_content">
				<h3>Filters</h3>
			</div>
			<form className="sidebar__filter" action="">
				<input type="checkbox" className="filter__option" id="men-clothing" onClick={() => handleMenChecked()} />
				<label htmlFor="men-clothing">Men's Clothing</label>
				<br />
				<input type="checkbox" className="filter__option" id="men-clothing" onClick={() => handleWomenChecked()} />
				<label htmlFor="men-clothing">Women's Clothing</label>
				<br />
				<input type="checkbox" className="filter__option" id="jewlery" name="jewlery" value="jewlery" />
				<label htmlFor="men-clothing">Jewlery</label>
				<br />
				<input type="checkbox" className="filter__option" id="electronics" name="electronics" value="electronics" />
				<label htmlFor="men-clothing">Electronics</label>
				<br />
				<input className="filter__button" type="submit" value="Submit" />
			</form>
		</div>
	);
}
