import { useState } from 'react';
import { data } from '../../data/testData';

const TestSearch = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (e) => {
        const results = data.filter((item) => item.text.includes(e.target.value));
        setSearchResults(results);
    }

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={handleInputChange} />
            {
                searchResults.length > 0 && (
                    <ul>
                        {searchResults.map(item => <li key={item.text}>{item.text}</li>)}
                    </ul>
                )
            }
        </div>
    )
}

export default TestSearch;