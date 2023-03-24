import { Link, useParams, useNavigate } from 'react-router-dom';

import { useGetAllProductsQuery } from '../features/api/productsApi';

import { Product } from '../types/types';

import { useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';

const ProductPage = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const { productId } = useParams();

  const singleProduct = data?.find(
    (product: Product) => product.id === parseInt(productId)
  );

  const { id, title, description, image, price, rating } = singleProduct ?? {};

  useTitle(`${singleProduct?.title} | Knock`);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Unexpected error occurred...</p>;
  }

  if (!singleProduct) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <p>{rating?.rate}</p>
      <p>{rating?.count}</p>
      <img src={image} alt={title} />
    </>
  );
};
export default ProductPage;
