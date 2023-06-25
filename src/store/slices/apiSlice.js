import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react"
const API_URL = import.meta.env.VITE_BASE_API_ENDPOINT

const baseQuery = fetchBaseQuery({ baseUrl: API_URL})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: () => ({})
})
