import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "@/api/baseUrl";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({ query: () => "/movies" }),
    getCinemas: builder.query({ query: () => "/cinemas" }),
    getMoviesByCinemaId: builder.query({
      query: (id) => "/movies?cinemaId=" + id,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetCinemasQuery,
  useGetMoviesByCinemaIdQuery,
} = movieApi;
