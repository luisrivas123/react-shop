import React from 'react';
import '@styles/OrderItem.scss';

import iconClose from '@icons/icon_close.png';

const prouctItem = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike';

const OrderItem = () => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={prouctItem} />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src={iconClose} alt="close" />
		</div>
	);
}

export default OrderItem;
