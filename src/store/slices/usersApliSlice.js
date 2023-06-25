import { apiSlice } from "./apiSlice"

const USERS_URL = "/api/v1/users"

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: () => ({
        url: `${USERS_URL}`,
        method: "POST",
        credentials: "include"
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
        credentials: "include"
      })
    })
  })
})

export const { useLoginMutation, useLogoutMutation } = usersApiSlice
