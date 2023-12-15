import {GraphQLObjectType,GraphQLString,GraphQLID} from "graphql";

export const info = new GraphQLObjectType({
  name: "info",
  fields: {
    id_info:{type:GraphQLID},
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    address: { type: GraphQLString },
    country: { type: GraphQLString },
    city: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    postalCode: { type: GraphQLString },
  },
});
