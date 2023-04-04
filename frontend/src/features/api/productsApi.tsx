import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Product } from '../../types/types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.knocks.app',
  }),

  endpoints: builder => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
