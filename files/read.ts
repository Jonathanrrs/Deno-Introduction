const filePath = './text.txt'; 
/* Para traer el archivo de texto */
/* Aunque no se haya usado en este caso la palabra reservada va a funcionar por ahora*/
let file = await Deno.open(filePath); 
/* Con esto ya tenemos el archivo guardado */
await Deno.copy(file, Deno.stdout) 
/* No es necesario mostrarlo en un log, con el método copy podemos mostrarlo */
file.close(); /* Se cierra el archivo */






