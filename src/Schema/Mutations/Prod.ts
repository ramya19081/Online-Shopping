import { prod } from "../TypeDefs/Prod"
import { GraphQLInt, GraphQLString } from 'graphql';
import { Prod_Entity } from "../Entities/Prod";
export const CREATE_PROD = {
    type: prod,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        desc: { type: GraphQLString },
        price: { type: GraphQLInt },
        image: { type: GraphQLString },
        Quandity: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
        const { id, name, desc, price, image, Quandity } = args;
        await Prod_Entity.insert({ id, name, desc, price, image, Quandity })
        return args;
    }
};

export const DELETE_PROD = {
    type: prod,
    args: {
        id: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
        const id= args.id;
        await Prod_Entity.delete(id)
    }
};

export const UPDATE_PROD = {
    type: prod,
    args: {
        id: { type: GraphQLInt },
        newQuandity:{ type: GraphQLInt }
    },
    async resolve(parent: any, args: any) {
        const {id,newQuandity}=args;
        await Prod_Entity.update({id:id},{Quandity:newQuandity})
    }
}