import { createApi,fetchBaseQuery  } from '@reduxjs/toolkit/query/react'



// Important : Read => Query | (Create & delete & update) => Mutation (Endpoints)
export const apiProductSlice = createApi({
    // hint is equivalent of name in normal slice
    reducerPath:'productsAPI',
    // hint : is equivalent of querykey in react Query
    tagTypes:['products'],
    // hint: All of our requests will have URLs starting with '/fakeApi'
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com'}),
    // hint: The "endpoints" represent operations and requests for this server
    endpoints: (builder) =>({
        // Note: builder.query => Get Request
        // Note: getProductList => Return Hook
        getProductList: builder.query({
        // Note: The URL for the request is '/fakeApi/posts'
        query:(_)=> {
            return {url:'/products?limit=5'} // hint:  query:(args)=>{}
        }
        })
    }),
});

// hint: Export the auto-generated hook for the `getProductList` query endpoint
export const { useGetProductListQuery } = apiProductSlice