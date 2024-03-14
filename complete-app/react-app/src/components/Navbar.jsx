import "../styles/navigation.css";

export function Navbar() {
	return (
		<nav className="nav">
			<img className="nav__logo" src="/logo-ipsum.svg" alt="" />
			<ul className="nav__options">
				<li className="nav__option">
					<a className="nav__link" href="/home">
						Nabar
					</a>
				</li>
				<li className="nav__option">
					<a className="nav__link" href="/store">
						Store
					</a>
				</li>
				<li className="nav__option">
					<a className="nav__link" href="/about">
						About
					</a>
				</li>
			</ul>
		</nav>
	);
}
