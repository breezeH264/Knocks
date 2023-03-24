import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Product } from '../../types/types';

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
