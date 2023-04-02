import { useGetAllProductsQuery } from '../features/api/productsApi';

import './AllProducts.scss';
import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { Product } from '../types/types';

export default function AllProducts() {
  useTitle('Discover | knocks.');
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <>
      <div className='products'>
        <div className='filter'>
          <button>Category</button>
          <button>Size</button>
          <button>Color</button>
          <button>Price</button>
          <button>Rating</button>
        </div>
        <div className='products__container'>
          <div className='featured__products'>
            {isLoading ? (
              <div>
                <p>loading</p>
              </div>
            ) : (
              data &&
              data?.map((product: Product) => (
                <Link key={product.id} to={`/products/${product.id}`}>
                  <div className='product'>
                    <h3>{product.title}</h3>
                    <img
                      src={product.image}
                      alt={product.title}
                      className='product__thumbnail'
                    />
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
