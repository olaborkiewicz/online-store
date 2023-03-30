import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Container from '../components/Container';
import ClassCounter from '../components/ClassComponents/ClassCounter';
import Button from '../components/Button';
import { api, ENDPOINTS } from '../services/api';
import { useCart } from '../context/cart.context';

const Product = () => {
    const { productSlug } = useParams();
    const { state, setState } = useCart();

    const [quantity, setQuantity] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        api.get(`${ENDPOINTS.productBySlug}/${productSlug}`)
            .then((res) => {
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoaded(true);
                }, 500)

            });
    }, []);

    const addToCart = () => {
        const newState = [...state];

        newState.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.mainImage.src,
            quantity: quantity
        });

        setState(newState);
    }

    if (!isLoaded) {
        return (
            <div className="spinner-border" role="status" style={{ margin: "50% auto", display: "block" }}>
                <span className="sr-only" />
            </div>
        )
    }

    return (
        <Layout>
            <Container className="my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.mainImage.src} alt="Product Image" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <h4 className="mb-4">{(product.price * quantity).toFixed(2)} zł</h4>
                        <div className="row">
                            <div className="col">
                                <ClassCounter quantity={quantity} setQuantity={setQuantity} maxQty={product.quantity} />
                            </div>
                            <div className="col">
                                <Button size="sm" onClick={addToCart}>Dodaj do koszyka</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default Product;