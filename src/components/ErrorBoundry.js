import React, { Component } from 'react';

// we can wrap a component with ErrorBoundry component so it will catch an error,
// display something instead of breaking the whole website
class ErrorBoundry extends Component {
	constructor(props){
		super(props);
		this.state ={
			hasError: false
		}
	}

	// if anything errors out it wil run this lifecycle hook
    componentDidCatch (error, info) {
	   this.setState({ hasError: true })
    }

    // children will be anything thats between the ErrorBoundry
    render(){
	   if(this.state.hasError){
		   return <h1>ooops!</h1>
	   }
	   return this.props.children
    }
}    

export default ErrorBoundry;