export function Sidebar() {
	return (
		<div class="sidebar">
			<div class="sidebar_content">
				<h3>Filters</h3>
			</div>
			<form class="sidebar__filter" action="">
				<input type="checkbox" class="filter__option" id="men-clothing" name="men-clothing" value="men" />
				<label for="men-clothing">Men's Clothing</label>
				<br />
				<input type="checkbox" class="filter__option" id="men-clothing" name="women-clothing" value="men" />
				<label for="men-clothing">Women's Clothing</label>
				<br />
				<input type="checkbox" class="filter__option" id="jewlery" name="jewlery" value="jewlery" />
				<label for="men-clothing">Jewlery</label>
				<br />
				<input type="checkbox" class="filter__option" id="electronics" name="electronics" value="electronics" />
				<label for="men-clothing">Electronics</label>
				<br />
				<input class="filter__button" type="submit" value="Submit" />
			</form>
		</div>
	);
}
