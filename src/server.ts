// @filename: server.ts
import http from 'http';
import { createHTTPHandler } from '@trpc/server/adapters/standalone';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

interface User {
  id: string;
  name: string;
}

const userList: User[] = [
  {
    id: '1',
    name: 'KATT',
  },
];

const appRouter = t.router({
  userById: t.procedure
    .input((val: unknown) => {
      if (typeof val === 'string') return val;
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query((req) => {
      const input = req.input;
      const user = userList.find((it) => it.id === input);

      return user;
    }),
  userCreate: t.procedure
    .input(z.object({ name: z.string() }))
    .mutation((req) => {
      const id = `${Math.random()}`;

      const user: User = {
        id,
        name: req.input.name,
      };

      userList.push(user);

      return user;
    }),
});

// Create the tRPC handler
const trpcHandler = createHTTPHandler({
  router: appRouter,
  createContext: () => ({}),
});
 
// create and listen to the server handler
http.createServer((req, res) => {
  // act on the req/res objects
 
  // enable CORS
  res.setHeader('mode', 'no-cors');
  // res.setHeader('Access-Control-Request-Method', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  // res.setHeader('Access-Control-Allow-Headers', '*');
 
  // accepts OPTIONS
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }
 
  // then we can pass the req/res to the tRPC handler
  trpcHandler(req, res);
}).listen(5000);

export type AppRouter = typeof appRouter;