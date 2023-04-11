import React from 'react';

function WelcomeFunc({ name }) {
    return <h1>Hello, {name}</h1>;
}

class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

const ClassFuncTest = () => {
    return (
        <div>
            <WelcomeFunc name="Damian" />
            <WelcomeClass name="Damian" />
            <WelcomeClass name="Beata" />
            <WelcomeClass name="Bartek" />
            <WelcomeClass name="Ania" />
        </div>
    )
}

export default ClassFuncTest;