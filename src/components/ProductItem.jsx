import React, { useState } from 'react';
import '../styles/ProductItem.scss';

import addToCart from '@icons/bt_add_to_cart.svg';
const prouctItem = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike';

const ProductItem = () => {
	const [cart, setCart] = useState('');

	const handleClick = () => {
		setCart('Hola mundo');
	}

	return (
		<div className="ProductItem">
			<img src={prouctItem} alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleClick}>
					<img src={addToCart} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;
