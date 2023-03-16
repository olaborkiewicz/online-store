import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Landing = () => {
    useEffect(()=> {
        document.body.style.backgroundColor = `rgb(0, 0, 0)`;

        return () => {
            document.body.style.backgroundColor = `rgb(255, 0, 0)`;
        }
    }, []);

    return (
        <main>
            <Navbar />
            <p>Landing</p>
        </main>
    );
}

export default Landing;