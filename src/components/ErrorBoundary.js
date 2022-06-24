import React, { Component } from 'react'

class ErrorBoundary extends Component {
	constructor(props){
		super(props)
		this.state = {
			error: null
		}
	}
	componentDidCatch(err, info){
		this.setState({error: err})
		console.log("err", err)
		console.log("info", info)
	}
  	render() {
	    if (this.state.error) {
	      return 	(<div>
	      				<h1>Caught an error.</h1>
	      				<p>{ this.state.error.message }</p>
	      			</div>)
	    } else {
	    	return this.props.children
	    }
	  }
}

export default ErrorBoundary;