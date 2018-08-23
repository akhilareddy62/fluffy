import React from 'React';

class Button extends React.Component {
	handleButtonClick = () => {
  	console.log("clicked");
    this.props.handleClick("clicked", "blue");
  }

	render() {
  	console.log("Button props: ", this.props);
    return (
    	<button onClick={this.handleButtonClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
