import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from "graphql";

export const prod = new GraphQLObjectType({
  name: "prod",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    desc: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
    Quandity: { type: GraphQLInt },
  },
});