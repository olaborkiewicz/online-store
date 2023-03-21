const TestCounter = ({ counter, setCounter }) => {

    const handleClick = () => {
        // setCounter(counter + 1); // <- nowy stan niezależny od starego

        setCounter((staryStan) => {
            const nowyStan = staryStan + 1;
            return nowyStan;
        });
    }

    return (<>
        <p>{counter}</p>
        <button onClick={handleClick}>Click me!</button>
    </>);
}

export default TestCounter