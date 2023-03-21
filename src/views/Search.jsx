import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Layout from '../components/Layout';
import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import { api, ENDPOINTS } from '../services/api';

const PAGE_SIZE = 16;

const Search = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get(`${ENDPOINTS.products}?pageSize=${PAGE_SIZE}`)
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <Layout>
            <Container className="my-5">
                <h1>Search</h1>
                <p>Lorem ipsum</p>
                <div className="row">
                    {products.map((product) => (
                        <div key={`product_${product.id}`} className="col-md-3">
                            <Link to={`/product/${product.slug}`}>
                                <ProductCard
                                    image={product.mainImage.thumbnailSrc}
                                    title={product.name}
                                    shortDesc={product.description}
                                    price={product.price}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </Layout>
    );
}

export default Search;