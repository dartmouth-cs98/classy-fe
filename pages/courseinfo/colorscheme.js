const pink = "#FAEBF6";
const orange = "#FCF0E3";
const green = "#EFFAEB";

// compares a student's distribs or wc's and returns the color that the tile should be shaded
export function getDistribColor(courseDistrib, studentDistribs) {
    // course earns no new distrib that would help fulfill a requirement
    if (courseDistrib === null || studentDistribs.includes(courseDistrib)) {
        return orange;
    }
    return green;
}

// returns the color an NR Eligible tile should be based on whether a course is NR eligible
// would need timetable data for this to work
export function getNRColor(course) {
    if (course['nrEligible'] === true) {
        return green;
    }
    return orange;
}

// returns the color an average median tile should be based on the average median
// would need layup list or ORC median data for this to work
export function getMedianColor(course) {
    const avgMedian = 'avgMedian'
    if (['A', 'A/A-'].includes(course[avgMedian])) {
        return green;
    }
    if (['A-','A-/B+', null].includes(course[avgMedian])) {
        return orange;
    }
    return pink;
}

// returns the color a waitlist tile should be based on whether waitlisting is required
export function getWaitlistColor(course) {
    const waitlist = 'waitlist';
    if (course[waitlist] === true) {
        return pink;
    }

    if (course[waitlist] === false) {
        return green;
    }

    // unknown whether waitlist is required
    return orange;
}

// returns the color a difficulty slider should be based on the difficulty
export function getDifficultyColor(course) {
    const difficulty = 'difficulty';
    if (course[difficulty] >= 4) {
        return pink;
    }
    
    if (course[difficulty] < 3) {
        return green;
    }

    // difficulty is either unknown or between 3 and 4
    return orange;
}

// returns the color a workload slider should be based on the average workload
export function getWorkloadColor(course) {
    const workload = 'workload';
    if (course[workload] >= 12) {
        return pink;
    }
    
    if (course[workload] <= 6) {
        return green;
    }

    // workload is either unknown or between 6 and 12 hours
    return orange;
}

// returns the color a quality slider should be based on the quality
export function getQualityColor(course) {
    const quality = 'quality';
    if (course[quality] >= 4) {
        return green;
    }
    
    if (course[quality] < 3) {
        return pink;
    }

    // quality is either unknown or between 3 and 4
    return orange;
}
