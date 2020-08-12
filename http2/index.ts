/* Aquí no funciona el require y no tiene un package.json */
/* OAK */

import { Application } from "https://deno.land/x/oak/mod.ts";
import  router  from './routes/index.ts';

const app = new Application();

app.use((ctx,next) => {
    /* console.log(ctx.request.method, ctx.request.url); */ /* Muestre de la petición que va llegando que método está utilizando, y de la peticón la url */
    next();
});

app.use(router.routes());
  
await app.listen({ port: 3000 });
console.log('server running on port 3000');
