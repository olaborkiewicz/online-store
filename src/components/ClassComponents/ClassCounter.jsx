import React from 'react';
import Button from '../Button';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.minItemQty = 1;
    }

    handleMinus = () => {
        if (this.props.quantity === this.minItemQty) return;
        this.props.setQuantity((prev) => prev - 1);
    }

    handlePlus = () => {
        if (this.props.quantity === this.props.maxQty) return;
        this.props.setQuantity((prev) => prev + 1);
    }

    render() {
        return (
            <div className="btn-group mb-4" role="group" aria-label="Basic example">
                <Button onClick={this.handleMinus} size="sm" outline={this.props.quantity === this.minItemQty}>-</Button>
                <input
                    disabled
                    type="number"
                    className="form-control"
                    style={{ width: "100px" }}
                    value={this.props.quantity}
                />
                <Button onClick={this.handlePlus} size="sm" outline={this.props.quantity === this.props.maxQty}>+</Button>
            </div>
        );
    }
}

export default ClassCounter;