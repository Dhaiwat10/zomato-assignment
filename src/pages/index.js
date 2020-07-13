import React, { useEffect, useState } from 'react'
import { getRestaurants } from '../services/zomato'
import Card from '../components/Card'

import './index.css'

export default function IndexPage() {
	const [ restaurants, setRestaurants ] = useState([])

	useEffect(() => {
		getRestaurants().then((res) => {
			setRestaurants(res)
		})
	}, [])

	return (
		<React.Fragment>
      <h1 className='heading'>Top 25 Restaurants in NYC</h1>
			<div className='grid-container'>
				{restaurants.map((restaurant) => {
					const item = restaurant.restaurant

					return (
						<Card
							name={item.name}
							featuredImgSrc={item.featured_image}
							cost={item.average_cost_for_two}
							rating={item.user_rating.aggregate_rating}
							zomatoUrl={item.url}
						/>
					)
				})}
			</div>
		</React.Fragment>
	)
}
