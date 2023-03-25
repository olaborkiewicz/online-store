const CartItem = ({ image, title, quantity, price }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <img src={image} className="cart-item__img" alt="product-thumbnail" />
        <p className="cart-item__title">{title}</p>
      </div>
      <div className="cart-item__right">
        <div className="cart-item__quantity">{quantity}</div>
        <p className="cart-item__price">{price} zł</p>
      </div>
    </div>
  );
};

export default CartItem;
