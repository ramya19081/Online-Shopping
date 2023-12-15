import { allproducts } from "../TypeDefs/AllProducts"
import { GraphQLInt, GraphQLString } from 'graphql';
import { AllProducts_Entity } from "../Entities/AllProducts";
export const CREATE_ALLPRODUCTS = {
    type: allproducts,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        desc: { type: GraphQLString },
        price: { type: GraphQLInt },
        image: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { id, name, desc, price, image} = args;
        await AllProducts_Entity.insert({ id, name, desc, price, image})
        return args;
    }
};
