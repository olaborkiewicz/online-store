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
        <span
          className={
            isFeatured ? "product-bestseller" : "product-bestseller-visible"
          }
        >
          Polecany produkt
        </span>
      </div>
      <div>
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{shortDesc}</p>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
