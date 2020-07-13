import api from '../config/axios'

export const getRestaurants = async () => {
	try {
		const response = await api.get('', {
			params: {
				entity_id: 280,
        entity_type: 'city',
        sort: 'rating'
			}
		})

		console.log(response)

		return response.data.restaurants
	} catch (e) {
		console.log(e)
		return null
	}
}
