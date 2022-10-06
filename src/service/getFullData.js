import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'constants/requestURL';

export const getFullData = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: (name) => `/${name}`,
    }),
  }),
});

export const { useGetAllDataQuery } = getFullData;
