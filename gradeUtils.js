// gradeUtils.js

// Named function to compute average
export const computeAverage = (prelim, midterm, final) => {
    return (prelim + midterm + final) / 3;
};

// Default function to determine passing status
const isPassing = (average) => {
    return average >= 75 ? "PASSING" : "PROBATION";
};

export default isPassing;