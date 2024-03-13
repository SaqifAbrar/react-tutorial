export function Navbar() {
	return (
		<nav class="nav">
			<img class="nav__logo" src="../static/logo-ipsum.svg" alt="" />
			<ul class="nav__options">
				<li class="nav__option">
					<a class="nav__link" href="/home">
						Nabar
					</a>
				</li>
				<li class="nav__option">
					<a class="nav__link" href="/store">
						Store
					</a>
				</li>
				<li class="nav__option">
					<a class="nav__link" href="/about">
						About
					</a>
				</li>
			</ul>
		</nav>
	);
}
