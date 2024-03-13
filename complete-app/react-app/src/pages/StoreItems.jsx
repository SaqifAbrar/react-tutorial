import { useState, useEffect } from "react";
import "../styles/card.css";

export function StoreItems({ menChecked, womenChecked }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, [items]);

	return (
		<main className="store">
			<div className="store__description">
				<h2>Store Search</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam accusamus repellendus quas mollitia? Rem, quia, voluptate, nihil ipsum at eius veritatis necessitatibus eaque aliquam
					fugit dolorum iusto? Adipisci, voluptatem. Aperiam expedita molestias vero adipisci quisquam, perspiciatis dolor ducimus suscipit recusandae commodi inventore unde ipsa eveniet rem esse
					quidem temporibus officiis earum soluta facilis, facere error voluptates! Fugit, optio quis.
				</p>
			</div>
			<div className="store__items">
				{items.map((item, i) => {
					return (
						<div className="store__item-cell" key={i}>
							<div className="item">
								<div className="item__image-container">
									<img className="item__image" src={item.image} alt=""></img>
								</div>
								<div className="item__text">
									<h3 className="item__name">{item.title}</h3>
									<p className="item__description">{item.description}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}
