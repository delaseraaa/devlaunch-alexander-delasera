/* Crea un programa en JavaScript que calcule la factura total de una persona en el hotel 
donde cada habitacion tiene un precio de $100 por noche, aprovechando una oferta promocional 
que incluye un descuento de 5%.

El programa debe solicitar al huesped el numero de noches que paso en el hotel para calcular la factura final 
Si el usuario ingresa que se quedo 5 noches, la salida sera: $475.00
*/

const prompt = require('prompt-sync')();

const precioPorNoche = 100

const currency = 'usd' 

const textoTotal = 'Para nosotros es un honor haberlo recibido, su total a cancelar es de  ' 

const texto2 = 'Por elegir nuestra cadena hotelera, recibiste un 5% de descuento, gracias por su visita!' 

const customer = prompt('Digite por favor el numero de noches que se hospedo en el hotel? ')

const total = customer * precioPorNoche 

const subtotal = customer * precioPorNoche

const montoConDescuentoAplicado = (total * 0.95)


console.log(` Precio por Noche: ${precioPorNoche} ${currency}\n
              Subtotal ${subtotal} ${currency}\n
              Monto Aplicando Desc: ${textoTotal} ${montoConDescuentoAplicado} ${currency}\n
              Texto Agradecimiento: ${texto2}\n



                                                     `)




