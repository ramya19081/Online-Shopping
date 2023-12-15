import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from "graphql";

export const allproducts = new GraphQLObjectType({
  name: "allproducts",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    desc: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
  },
});