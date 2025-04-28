const prompt = require('prompt-sync')();
const calculateSalary = (hourlyRate, startTime, endTime) => {
    const [startHour] = startTime.split(':').map(Number);
    const [endHour] = endTime.split(':').map(Number);

    const workedHours = endHour - startHour;

    let salary = 0;

    if (workedHours <= 8) {
        // If worked hours are 8 or less, calculate the normal salary
        salary = hourlyRate * workedHours;
    } else {
        // If worked hours are more than 8, calculate regular salary and overtime
        const overtimeHours = workedHours - 8;
        salary = (hourlyRate * 8) + (hourlyRate * 1.5 * overtimeHours);
    }

    return salary;
};

const main = () => {
    const hourlyRate = parseFloat(prompt('Hourly Rate $: '));
    const startTime = prompt("Start time (e.g., 09:00): ");
    const endTime = prompt("End time (e.g., 17:00): ");

    const salary = calculateSalary(hourlyRate, startTime, endTime);

    console.log(`SALARY: $${salary.toFixed(2)}`);
};

main();
