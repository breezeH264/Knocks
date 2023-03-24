import {
  productsApi,
  useGetAllProductsQuery,
} from '../features/api/productsApi';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import './Home.scss';
import { Link } from 'react-router-dom';

interface Product2 {
  id: number;
  title: string;
  image: string;
}

export default function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <>
      <div className='featured__products'>
        {data &&
          data?.map((product: Product2) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <div className='product'>
                <h3>{product.title}</h3>
                <img src={product.image} className='product__thumbnail' />
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
