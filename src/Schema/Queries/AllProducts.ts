import { allproducts } from "../TypeDefs/AllProducts";
import { GraphQLList } from 'graphql';
import { AllProducts_Entity } from "../Entities/AllProducts";
export const GET_ALL_PRODUCTS = {
    type: new GraphQLList(allproducts),
    resolve():any {
        return AllProducts_Entity.find()
    }

}