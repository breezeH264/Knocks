import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: Rating;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6969' }),

  endpoints: builder => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => 'api/products',
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
