import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get('/', (ctx) => {
    ctx.response.body = 'Hello world';
});

router.get('/book', (ctx) => {
    ctx.response.body = [
        {
            title: "Sherlock",
            author: "Arthur"
        }
    ]
});

router.post('/book', async (ctx) => {
    const body = await ctx.request.body(); /* body no es una propiedad, es una función por lo tanto nos devuelve un objeto */
    console.log(body);

    ctx.response.body = 'received';
})


export default router;