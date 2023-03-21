import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const Product = () => {
    const { productSlug } = useParams();

    return (
        <Layout>
            <p>Product</p>
            Slug: {productSlug}
        </Layout>
    );
}

export default Product;