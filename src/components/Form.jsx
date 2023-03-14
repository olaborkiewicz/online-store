/*
showBtn: Boolean
*/

const Form = ({ showBtn = false }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Wysłano formularz!");
    }

    const handleInputChange = (e) => {
        console.log("Zmieniono input", e.target.value);
    }

    const handleBtnClick = () => {
        alert("Kliknięto przycisk");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange} placeholder="Wyszukaj..." />
            {
                showBtn ? (<button type="submit" onClick={handleBtnClick}>Szukaj</button>) : (<p>Button jest wyłączony</p>)
            }
        </form>
    );
}

export default Form;