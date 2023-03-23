const ProductCard = ({
  image,
  title,
  shortDesc,
  isFeatured = false,
  price,
}) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt="product" className="product-image-details" />
        {isFeatured && (
          <span className="product-bestseller">
            Polecany produkt
          </span>
        )}
      </div>
      <div>
        <h3 className="product-title">{title}</h3>
        {shortDesc && <p className="product-description">{shortDesc}</p>}
        <p className="product-price">{price} zł</p>
      </div>
    </div>
  );
};

export default ProductCard;
