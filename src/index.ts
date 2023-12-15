import express from 'express';
import {graphqlHTTP} from "express-graphql";
import { schema } from './Schema';
import cors from 'cors';
import { DataSource } from 'typeorm';
import { Prod_Entity } from './Schema/Entities/Prod';
import { Info_Entity } from './Schema/Entities/Info';
import { AllProducts_Entity } from './Schema/Entities/AllProducts';
const connectDB = new DataSource({
  type: "mssql",
  username: "sa",
  host:'localhost\\SQLEXPRESS',
  password: "Welcome@12345",
  database: "my_app",
 logging: false,
  port: 49395,
    synchronize: true,
  extra: {
    trustServerCertificate: true,
  },
  entities:[Prod_Entity,Info_Entity,AllProducts_Entity],
});
const main=async()=>{
    await connectDB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    });

    const app=express()
    app.use(cors())
    app.use(express.json())
    app.use('/graphql',graphqlHTTP({
        schema,
        graphiql:true
    }))
    app.listen(8000,()=>{
        console.log('server is running on 8000')
    })
}

main().catch((err)=>{
    console.log(err);
})