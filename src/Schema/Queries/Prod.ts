import { prod } from "../TypeDefs/Prod";
import { GraphQLList } from 'graphql';
import { Prod_Entity } from "../Entities/Prod";
export const GET_CART_PROD = {
    type: new GraphQLList(prod),
    resolve():any {
        return Prod_Entity.find()
    }

}