import ReactJson from 'react-json-view'

function Pre({ children }) {
	return (
		<ReactJson src={children} />
	)
}

export default Pre;