export default {
	filters: {
		price(value) {
			return (
				value
					.toString()
					.replace(/\D/g, '')
					.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g, ' ') + ' ₽'
			)
		}
	}
}
