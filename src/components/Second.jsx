import React from 'react'
import Third from './Third'

const Second = ({tags}) => {
	return (
		<div>
			<div>Second</div>
			<Third tags={tags} />
		</div>
	)
}

export default Second