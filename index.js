// index.js
import isPassing, { computeAverage } from './gradeUtils.js';

// Starter data
const enrollees = [
    { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
    { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
    { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
    { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
    { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 }
];

// Function returning a Promise simulating an API call
const getEnrollees = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Change to reject(new Error("Failed to fetch")) to test try/catch error handling
            resolve(enrollees);
        }, 1000);
    });
};

// Main async function with try/catch
const processEnrollmentReport = async () => {
    try {
        const data = await getEnrollees();

        console.log("=== IT313 Enrollment Eligibility Report ===");

        // Use map() and destructuring to build processed array
        const processedEnrollees = data.map(enrollee => {
            const { name, prelim, midterm, final } = enrollee; // Destructuring
            const average = computeAverage(prelim, midterm, final);
            const status = isPassing(average);
            return { name, average, status };
        });

        // Print individual reports using template literals
        processedEnrollees.forEach(e => {
            console.log(`${e.name}\n  Average: ${e.average.toFixed(2)} ${e.status}`);
        });

        // Use filter() to separate passing students
        const passingEnrollees = processedEnrollees.filter(e => e.status === "PASSING");

        // Use reduce() to compute class average (provide initial value 0)
        const classAverage = processedEnrollees.reduce((acc, curr) => acc + curr.average, 0) / processedEnrollees.length;

        // Print summary metrics
        console.log(`\nClass Average: ${classAverage.toFixed(2)}`);
        entricCount:
        console.log(`Passing: ${passingEnrollees.length}/${processedEnrollees.length}`);

    } catch (error) {
        console.error("Error fetching enrollee records:", error.message);
    }
};

processEnrollmentReport();