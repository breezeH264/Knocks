import { Link, useParams, useNavigate } from 'react-router-dom';

import { useGetAllProductsQuery } from '../features/api/productsApi';

import { Product } from '../types/types';

import { useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';
import { addToCart } from '../features/cart/cartSlice';
import { useAppDispatch } from '../app/hooks';
import './ProductPage.scss';

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();
  const { productId } = useParams();

  const singleProduct = data?.find(
    (product: Product) => product.id === parseInt(productId ?? '')
  );

  const { id, title, description, image, price, rating } = singleProduct ?? {};

  useTitle('Products | Knocks.app');

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const handleBuyNow = (product: any) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Unexpected error occurred...</p>;
  }

  //   if (!singleProduct) {
  //     return <p>Product not found</p>;
  //   }

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <p>{rating?.rate}</p>
      <p>{rating?.count}</p>
      <img className='product__image' src={image} alt={title} />
      <button onClick={() => handleAddToCart(singleProduct)}>
        Add to Cart
      </button>

      <button onClick={() => handleBuyNow(singleProduct)}>Buy Now</button>
    </>
  );
};
export default ProductPage;
