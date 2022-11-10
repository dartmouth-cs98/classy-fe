export default function CourseData() {
  const cs10 = {
    courseTitle: 'Problem Solving via Object-Oriented Programming',
    description: 'Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems), data structures (how to efficiently organize data), and algorithms (procedures for solving problems). Laboratory assignments are implemented using object-oriented programming techniques.',
    xlists: [],
    professors: [
      'Pierson',
      'Quattrini Li (Fall)',
      'Pierson (Winter)',
      'Balkcom (Spring)',
    ],
    distribs: [
      'TLA',
    ],
    worldCulture: null,
    termsOffered: [
      {
        term: '22s',
        professors: [
          'Alberto Quattrini Li',
        ],
        period: '12',
      },
      {
        term: '22f',
        professors: [
          'Timothy Pierson',
        ],
        period: '2',
      },
      {
        term: '22f',
        professors: [
          'Alberto Quattrini Li',
        ],
        period: '12',
      },
      {
        term: '23w',
        professors: [
          'Timothy Pierson',
        ],
        period: '12',
      },
      {
        term: '23w',
        professors: [
          'Timothy Pierson',
        ],
        period: '2',
      },
    ],
    medians: {
      '20f': 11,
      '21w': 10,
      '21s': 10.5,
      '21f': 10.5,
      '22w': 10,
      '22s': 11,
    },
    avgMedian: 10.5,
    counts: [
      1,
    ],
    recommended: null,
    required: [
      [
        'COSC 1',
        'ENGS 20',
      ],
    ],
    dept: 'COSC',
    num: '10',
    waitlist: false,
    workload: 15,
    difficulty: 4.8,
    quality: 4.5,
  };

  const cs25 = {
    courseTitle: 'Intro to UI/UX Design I',
    description: 'COSC 25.01 is a hands-on projects-based course that teaches the concepts, principles, and practice of User Interface (UI) and User Experience (UX) Design. It is designed for students with an interest in any form of design, although we focus on the UI/UX of digital tools (e.g. mobile, web, tablets). No previous experience or coding skills needed.  Grading is based on weekly assignments, reflections, readings, and in-class exercises that build on each other and are intended to teach the foundational skills and thinking of UI/UX design. This team-based course requires a significant amount of time outside class.  Students are encouraged (but not required) to take ENGS 12 prior to taking this course. Some students will go on to take COSC 25.02, an Independent Study course that allows students to put the skills learned in COSC 25.01 into practice as a designer in the DALI Lab or through work on another project.',
    xlists: [],
    professors: [
      'Loeb',
    ],
    distribs: [
      'ART',
    ],
    worldCulture: null,
    termsOffered: [
      {
        term: '22s',
        professors: [
          'Lorie Loeb',
        ],
        period: '3A',
      },
      {
        term: '22x',
        professors: [
          'Natalie Svoboda',
        ],
        period: '2A',
      },
    ],
    medians: {
      '21w': 12,
      '21s': 12,
      '22s': 12,
    },
    avgMedian: 12,
    dept: 'COSC',
    num: '25.01',
    waitlist: true,
    workload: 12,
    difficulty: 3.0,
    quality: 4.9,
  };

  const cs52 = {
    courseTitle: 'Full-Stack Web Development',
    description: 'The Web is a powerful delivery tool for complex real-time applications.  This is an introduction to full stack Web application development — the approach of integrating numerous techniques and technologies to build modern Web applications.  Topics include: static pages, Internet protocols, layout, markup, event-driven asynchronous programming, deployment, security, scalability, and user experience. Projects include building real-time Web applications with front-end UIs and server-side APIs.',
    xlists: [],
    professors: [
      'Tregubov',
    ],
    distribs: [
      'TAS',
    ],
    worldCulture: null,
    termsOffered: [
      {
        term: '22s',
        professors: [
          'Tim Tregubov',
        ],
        period: '2',
      },
    ],
    medians: {
      '20x': 11,
      '21s': 12,
      '22s': 12,
    },
    avgMedian: 11.666666666666666,
    counts: [
      1,
    ],
    recommended: null,
    required: [
      [
        'COSC 10',
      ],
    ],
    dept: 'COSC',
    num: '52',
    waitlist: true,
    workload: 15,
    difficulty: 4.0,
    quality: 4.7,
  };

  const cs74 = {
    courseTitle: 'Machine Learning and Statistical Data Analysis',
    description: 'This course provides an introduction to statistical modeling and machine learning. Topics include learning theory, supervised and unsupervised machine learning, statistical inference and prediction, and data mining. Applications of these techniques to a wide variety of data sets will be described.',
    xlists: [],
    professors: ['Vosoughi', 'Preum (Winter)', 'Vosoughi (Spring)'],
    distribs: ['QDS'],
    worldCulture: null,
    termsOffered: [{ term: '22s', professors: ['Soroush Vosoughi'], period: '6A' }, { term: '22s', professors: ['Sarah Masud Preum'], period: '12' }, { term: '23w', professors: ['Souyoung Jin'], period: '3A' }, { term: '23w', professors: ['Soroush Vosoughi'], period: '3A' }],
    medians: {
      '20f': 12.0, '21w': 12.0, '21s': 12.0, '21f': 12.0, '22w': 12.0, '22s': 12.0,
    },
    avgMedian: 12.0,
    counts: [1, 1],
    recommended: null,
    required: [['COSC 1', 'ENGS 20'], ['COSC 70', 'MATH 22', 'MATH 24']],
    dept: 'COSC',
    num: '74',
    waitlist: false,
    workload: 5,
    difficulty: 3.0,
    quality: 4.8,
  };

  const cs98 = {
    courseTitle: 'Senior Design and Implementation Project I',
    description: 'Participation in a software engineering group project to meet a real-world need. Group members are responsible for all aspects of a software system, including iterative requirements analysis, design, implementation, and testing. The course also stresses customer interactions, documentation, process, and teamwork. The result is a software product of significant scope and significant benefit to a user base. Open only to students pursuing a major in Computer Science or a modified major with Computer Science as the primary part.  98.01 and 98.02 constitute a two course sequence, and they must be taken in consecutive terms, either fall/winter or winter/spring, normally in the senior year. Students are awarded one course credit for successful completion of this course upon completion of COSC-98.02 Students register for COSC-98.01 and receive a grade of “ON” (ongoing) at the end of the term.  Students then register for COSC-98.02 the subsequent term to complete the coursework. A final grade will replace the “ON” in COSC-98.01 upon completion of COSC-98.02.',
    xlists: [],
    professors: [],
    distribs: [],
    worldCulture: null,
    termsOffered: [
      {
        term: '22f',
        professors: [
          'Tim Tregubov',
        ],
        period: '3A',
      },
      {
        term: '22f',
        professors: [
          'Natalie Svoboda',
        ],
        period: 'ARR',
      },
      {
        term: '23w',
        professors: [
          'Tim Tregubov',
        ],
        period: '2A',
      },
      {
        term: '23w',
        professors: [
          'Natalie Svoboda',
        ],
        period: '2A',
      },
    ],
    medians: {
      '21w': 12,
    },
    avgMedian: 12,
    counts: [
      3,
    ],
    recommended: null,
    required: [
      [
        'COSC 50-89',
      ],
    ],
    dept: 'COSC',
    num: '98.01',
    waitlist: false,
    workload: 10,
    difficulty: 4.0,
    quality: 4.3,
  };

  const courses = {
    'COSC 10': cs10,
    'COSC 25.01': cs25,
    'COSC 52': cs52,
    'COSC 74': cs74,
    'COSC 98.01': cs98,
  };
  return courses;
}
