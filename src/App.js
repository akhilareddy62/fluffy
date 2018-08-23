import React from 'react';
import Box from './Box';
import Button from './Button';

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

export default App;
