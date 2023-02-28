/* eslint-disable no-plusplus */
const pink = '#FAEBF6';
const orange = '#FCF0E3';
const green = '#EFFAEB';
const purple = '#F9F3FC';
const blue = '#EBF9FA';

// compares a student's distribs or wc's and returns the color that the tile should be shaded
function getDistribColor(courseDistrib, studentDistribs) {
  return (courseDistrib === 'N/A' || studentDistribs.includes(courseDistrib[0]) || studentDistribs.includes(courseDistrib[1]))
    ? orange : green;
}

// returns the color an NR Eligible tile should be based on whether a course is NR eligible
// would need timetable data for this to work
function getNRColor(nrEligible) {
  return (nrEligible !== 'N/A' && nrEligible !== 'No') ? green : orange;
}

// returns the color an average median tile should be based on the average median
// would need layup list or ORC median data for this to work
function getMedianColor(avgMedian) {
  if (['A', 'A/A-'].includes(avgMedian)) {
    return green;
  }
  if (['A-', 'A-/B+', null, 'N/A'].includes(avgMedian)) {
    return orange;
  }
  return pink;
}

// returns the color a waitlist tile should be based on whether waitlisting is required
function getWaitlistColor(waitlist) {
  if (waitlist === true || waitlist === 'Required' || waitlist === 'Sign Up Here') {
    return pink;
  }

  if (waitlist === false || waitlist === 'Not Required') {
    return green;
  }

  // unknown whether waitlist is required
  return orange;
}

// returns the color a difficulty slider should be based on the difficulty
function getDifficultyColor(difficulty) {
  if (difficulty >= 4) {
    return pink;
  }

  if (difficulty < 3) {
    return green;
  }

  // difficulty is either unknown or between 3 and 4
  return orange;
}

// returns the color a workload slider should be based on the average workload
function getWorkloadColor(workload) {
  if (workload >= 12) {
    return pink;
  }

  if (workload <= 6) {
    return green;
  }

  // workload is either unknown or between 6 and 12 hours
  return orange;
}

// returns the color a quality slider should be based on the quality
function getQualityColor(quality) {
  if (quality >= 4) {
    return green;
  }

  if (quality < 3) {
    return pink;
  }

  // quality is either unknown or between 3 and 4
  return orange;
}

// returns the color a term tile should be based on the season
function getTermColor(term) {
  const seasons = {
    F: orange,
    W: blue,
    S: green,
    X: purple,
    f: orange,
    w: blue,
    s: green,
    x: purple,
  };
  return seasons[term[term.length - 1]];
}

function getInstructorColor() {
  const index = Math.floor(Math.random() * 5);
  const colors = [orange, blue, green, purple, pink];
  return colors[index];
}

function getCITitleColor(status) {
  return status ? pink : green;
}

function generateDistribs(possibleDistribs) {
  const studentDistribs = [];
  for (let i = 0; i < possibleDistribs.length; i++) {
    if (Math.random() >= 0.5) {
      studentDistribs.push(possibleDistribs[i]);
    }
  }
  return studentDistribs;
}

function getPrioritizeColor(value) {
  return value ? pink : green;
}

// returns the color a term tile should be based on the season
export default function getColor(tile, val) {
  if (tile.toLowerCase() === 'distrib' || tile.toLowerCase() === 'distribs') {
    const studentDistribs = generateDistribs(['ART', 'LIT', 'TMV', 'INT', 'SOC', 'QDS', 'SCI', 'TAS', 'SLA', 'TLA']);
    return getDistribColor(val, studentDistribs);
  } if (tile.toLowerCase() === 'wc') {
    const studentWCs = generateDistribs(['W', 'NW', 'CI']);
    return getDistribColor(val, studentWCs);
  } if (tile === 'NR Eligible') {
    return getNRColor(val);
  } if (tile === 'Avg Median' || tile === 'avgMedian' || tile.toLowerCase() === 'median') {
    return getMedianColor(val);
  } if (tile.toLowerCase() === 'waitlist') {
    return getWaitlistColor(val);
  } if (tile.toLowerCase() === 'difficulty') {
    return getDifficultyColor(val);
  } if (tile.toLowerCase() === 'workload') {
    return getWorkloadColor(val);
  } if (tile.toLowerCase() === 'quality') {
    return getQualityColor(val);
  } if (tile.toLowerCase() === 'term') {
    return getTermColor(val);
  } if (tile.toLowerCase() === 'instructor') {
    return getInstructorColor();
  } if (tile.toLowerCase() === 'cititle') {
    return getCITitleColor(val);
  } if (tile.toLowerCase() === 'prioritize') {
    return getPrioritizeColor(val);
  }
  return null;
}
