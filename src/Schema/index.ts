import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLSchema } from 'graphql';
import { GET_CART_PROD } from './Queries/Prod';
import { GET_ALL_INFO } from './Queries/Info';
import { GET_ALL_PRODUCTS } from './Queries/AllProducts';
import { CREATE_PROD, DELETE_PROD, UPDATE_PROD } from './Mutations/Prod';
import { CREATE_INFO } from './Mutations/Info';
import { CREATE_ALLPRODUCTS } from './Mutations/AllProducts';
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
      getCartProd: GET_CART_PROD,
      getAllInfo: GET_ALL_INFO,
      getAllProducts:GET_ALL_PRODUCTS
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
      createProd: CREATE_PROD,
      deleteProd: DELETE_PROD,
      updateProd: UPDATE_PROD,
      createInfo: CREATE_INFO,
      createAllProducts:CREATE_ALLPRODUCTS
  },
});
export const schema = new GraphQLSchema({ query: RootQuery,mutation:Mutation});