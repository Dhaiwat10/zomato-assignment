import React from 'react'

import './Card.css'

function Card({ name, cost, featuredImgSrc, rating, zomatoUrl }) {
	return (
		<div className='card'>
			<img className='card-img' src={featuredImgSrc} />
			<div className='info-container'>
				<h4>
					<b>{name}</b> (⭐{rating}/5){' '}
				</h4>
				<p>Cost for two ${cost}</p>
        <a className='zomato-link' href={zomatoUrl} target='_blank'>View on Zomato</a>
			</div>
		</div>
	)
}

export default Card
