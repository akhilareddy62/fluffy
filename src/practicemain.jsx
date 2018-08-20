class Box extends React.Component {
	render() {
    const styles = {
      backgroundColor: this.props.bgColor,
      height: "100px",
      width: "100px"
    };
    
    return (
    	<div style={styles}></div>
    );
  }
}

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

class App extends React.Component {
	state = {
  	label: "click mee",
    bgColor: "red"
  };

	listenButtonClick = (label, color) => {
  	const newState = {
    	label: label,
      bgColor: color
    };
  
  	this.setState(newState);
  };

  render() {
    return (
    	<div>
        <Button
          label={this.state.label}
          handleClick={this.listenButtonClick}
        />
        <br />
        <Box bgColor={this.state.bgColor} />
      </div>
    );
  }
}

const containerNode = document.getElementById('container');

ReactDOM.render(
	<App />,
  containerNode
);
