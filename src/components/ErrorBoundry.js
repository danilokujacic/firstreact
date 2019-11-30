import React, { Component } from "react";

export default class ErrorBoundry extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      ErrorMsg: ""
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      ErrorMsg: info
    });
  }
  render(){
  if(this.state.hasError){
      return <h1>Error: {this.state.info}</h1>
  }else{
      return this.props.children
  }
  }
}
