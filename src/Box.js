import React from 'React';

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

export default Box;
