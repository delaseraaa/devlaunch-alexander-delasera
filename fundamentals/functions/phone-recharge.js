/* El proveedor principal de servicios de telefonia movil en la ciudad esta introduciendo una oferta 
promocional basada tanto en el monto de recarga realizado por sus clientes como en la duracion de 
suscripcion de su compañia. para ser elegible para promocion, los clientes deben de recargar un minimo de $20

En la promocion SuperSaver, los clientes pueden disfrutar de un monto de recarga duplicado si su recarga es 
inferior a $38 y han estado afiliados al servicio por tres años o menos.

Por otro lado, la promocion megaRecharge esta dirigida a los clientes que han estado suscritos por mas de tres años 
ofreciendoles un monto de recarga triplicado independientemente del monto recargado.

Tu tarea es desarrollar un programa que tome como entrada el nombre del cliente , el monto de la recarga 
y la duracion de su suscripcion y determine si la promocion les aplica y calcule el monto total de recarga 
incluyendo la promocion*/

const prompt = require('prompt-sync')();

function main() {
    const name = prompt('Write Your Name: ');
    const rechargeAmount = parseInt(prompt("Recharge amount: "));
    const subscriptionDuration = parseInt(prompt("Subscription Duration (in months): "));

    const recharge = calculateRecharge(rechargeAmount, subscriptionDuration);
    const promo = recharge - rechargeAmount;

    console.log(`
        THANKS: ${name}
        RECHARGE: $${recharge}
        PROMO: $${promo}
    `);
}

const MIN_RECHARGE = 20;
const MAX_RECHARGE = 80;
const MIN_AFFILIATION_MONTHS = 36;
const MIN_PROMO_MONTHS = 12;
const MEGA_PROMO_MULTIPLIER = 3;
const SUPER_PROMO_MULTIPLIER = 2;

function calculateRecharge(amount, duration) {
    if (duration < MIN_PROMO_MONTHS) return amount;

    let multiplier = 1;

    if (amount < MIN_RECHARGE) {
        return amount; // No bonus if recharge is too small
    }

    if (duration >= MIN_AFFILIATION_MONTHS) {
        multiplier = MEGA_PROMO_MULTIPLIER;
    } else if (amount >= MIN_RECHARGE && amount <= MAX_RECHARGE) {
        multiplier = SUPER_PROMO_MULTIPLIER;
    }

    return amount * multiplier;
}

main();
