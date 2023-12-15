import { GraphQLString,GraphQLID } from 'graphql';
import { Info_Entity } from '../Entities/Info';
import { info } from '../TypeDefs/Info';

export const CREATE_INFO = {
    type: info,
    args: {
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
    async resolve(parent: any, args: any) {
        const { firstName,lastName,email,address,country,city,phoneNumber,postalCode } = args;
        await Info_Entity.insert({ firstName,lastName,email,address,country,city,phoneNumber,postalCode})
        return args;
    }
};
