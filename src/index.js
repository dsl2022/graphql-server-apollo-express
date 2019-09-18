import 'dotenv/config';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import schema from './schema';
import resolvers from './resolvers';
import models from './models';

import cors from 'cors';
const app = express();

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	context: {
		models,
		me: models.users[1]
	}
});

server.applyMiddleware({ app, path: '/graphql' });
app.listen({ port: 8000 }, () => {
	console.log('Apollo Server on http://localhost:8000/graphql');
});
// const userCredentials = { firstname: 'Robin' };
// const userDetails = { nationality: 'German' };

// const user = {
// 	...userCredentials,
// 	...userDetails
// };

// console.log(user);
// console.log(process.env.SOME_ENV_VARIBLE);
