/* Para crear un servidor */
const listener = Deno.listen({port:3000});

console.log('Listening on port 3000');

for await (const conn of listener) { /* Por cada conexión que llegue se muestre por consola */
    console.log(conn);
    Deno.copy(conn, conn);
    
}