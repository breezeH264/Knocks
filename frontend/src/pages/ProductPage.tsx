import { Link, useParams } from 'react-router-dom';

import {
  productsApi,
  useGetAllProductsQuery,
} from '../features/api/productsApi';
type Props = {};

const ProductPage = (props: Props) => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const { productId } = useParams();

  const singleProduct = data?.find(
    (product: any) => product.id === parseInt(productId)
  );

  return (
    <>
      <div>ProductPage</div>
      <p>{singleProduct?.title}</p>
      <p>{singleProduct?.description}</p>
      <p>{singleProduct?.price}</p>
      <p>{singleProduct?.rating.rate}</p>
      <p>{singleProduct?.rating.count}</p>
      <img src={singleProduct?.image} />
      <button>add to cart</button>
    </>
  );
};

export default ProductPage;
