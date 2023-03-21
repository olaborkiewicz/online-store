import { useState, useEffect } from 'react';
import { data } from '../../data/testData';

const TestSelect = ({ counter }) => {
    const [selectedValue, setSelectedValue] = useState('Użytkownik nie wybrał żadnej opcji');

    useEffect(() => {

        if (selectedValue === "Wartość opcji 4") {
            document.body.style.backgroundColor = `rgb(0, 0, 0)`;
        } else {
            document.body.style.backgroundColor = `rgba(0, 0, 0, ${counter / 20})`;
        }
    }, [counter, selectedValue]);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }

    return (
        <>
            <p>Counter: {counter}</p>
            <p>{selectedValue}</p>
            <select onChange={handleChange}>
                {data.map((item) => <option value={item.value} key={item.text}>{item.text}</option>)}
            </select>
        </>
    );
}

export default TestSelect;