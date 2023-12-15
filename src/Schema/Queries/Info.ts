import { info } from "../TypeDefs/Info";
import { GraphQLList } from 'graphql';
import { Info_Entity } from "../Entities/Info";
export const GET_ALL_INFO = {
    type: new GraphQLList(info),
    resolve(): any {
        return Info_Entity.find()
    }
}
