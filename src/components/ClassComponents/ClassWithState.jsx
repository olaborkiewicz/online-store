import React from 'react';

class ClassWithState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        };

        this.myRef = React.createRef();
    }

    switch = () => {
        this.setState({ toggle: !this.state.toggle });
        this.myRef.current.innerText = "You have clicked me!";
    }

    render() {
        const { toggle } = this.state;

        return (
            <div>
                <button onClick={this.switch} ref={this.myRef}>Click me</button>
                <p>{toggle ? "Toggle On" : "Toggle Off"}</p>
            </div>
        );
    }
}

export default ClassWithState;