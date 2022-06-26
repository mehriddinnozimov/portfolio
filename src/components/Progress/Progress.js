function Progress({page}) {
	return (
			<div className="progress mt-5">
                <div className="progress-bar bg-violet" role="progressbar" style={ {width: page + "%"}} aria-valuenow={page} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
		)
}

export default Progress;