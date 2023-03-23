import Button from './Button';

const minItemQty = 1;

const Counter = ({ quantity, setQuantity, maxQty }) => {


    const handleMinus = () => {
        if (quantity === minItemQty) return;
        setQuantity((prev) => prev - 1);
    }

    const handlePlus = () => {
        if (quantity === maxQty) return;
        setQuantity((prev) => prev + 1);
    }

    return (
        <div className="btn-group mb-4" role="group" aria-label="Basic example">
            <Button onClick={handleMinus} size="sm" outline={quantity === minItemQty}>-</Button>
            <input
                disabled
                type="number"
                className="form-control"
                style={{ width: "100px" }}
                value={quantity}
            />
            <Button onClick={handlePlus} size="sm" outline={quantity === maxQty}>+</Button>
        </div>
    )
}

export default Counter;