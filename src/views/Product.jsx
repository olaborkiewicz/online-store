import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Counter from '../components/Counter';
import Button from '../components/Button';
import { api, ENDPOINTS } from '../services/api';

const Product = () => {
    const { productSlug } = useParams();

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
        // @TODO
    }

    if (!isLoaded) {
        return (
            <div class="spinner-border" role="status" style={{ margin: "50% auto", display: "block" }}>
                <span class="sr-only" />
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
                                <Counter quantity={quantity} setQuantity={setQuantity} maxQty={product.quantity} />
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