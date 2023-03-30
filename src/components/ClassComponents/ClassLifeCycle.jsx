import React from 'react';

class ClassLifeCycle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "black"
        };
    }

    changeColor(color) {
        this.setState({ color }); // zapis skrócony - { color: color }
    }

    componentDidMount() {
        setTimeout(() => {
            this.changeColor("red");
        }, 3000);
    }

    //

    shouldComponentUpdate() {
        if (["black", "orange", "white"].includes(this.state.color)) {
            return true;
        }
        return false;
    }

    /*

    W komponencie funkcyjnym:

    useEffect(() => {
        setTimeout(() => {
            this.changeColor("red");
        }, 3000);
    }, []);

    */

    componentDidUpdate() {
        document.title = `Color: ${this.state.color}`;
    }

    /*

    W komponencie funkcyjnym:

    useEffect(() => {
        document.title = `Color: ${this.state.color}`;
    }, [state.color]);

    */

    componentWillUnmount() {
        this.changeColor("orange");
    }

    /*

   W komponencie funkcyjnym:

   useEffect(() => {
       return () => {
        this.changeColor("orange");
       }
   }, [state.color]);

   */

    render() {
        return (
            <div style={{ width: "500px", height: "500px", padding: "50px", backgroundColor: this.state.color }}>
                <p style={{ color: "#fff" }}>{this.state.color}</p>
                <button onClick={() => this.changeColor("blue")}>Make me blue!</button>
            </div>
        )
    }
}

export default ClassLifeCycle;