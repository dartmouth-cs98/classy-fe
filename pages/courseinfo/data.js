export default function CourseData() {
    const cs10 = {
        "course_code": {
          "course_dept": "COSC",
          "course_number": "10"
        },
        "course_title": "Problem Solving via Object-Oriented Programming",
        "description": "Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems), data structures (how to efficiently organize data), and algorithms (procedures for solving problems). Laboratory assignments are implemented using object-oriented programming techniques.",
        "xlists": [],
        "prereqs": "COSC 1 or ENGS 20 or placement through AP or local placement.",
        "offered": [
            {'term': 'Spring', 'instructors': ['Alberto Quattrini Li'], 'period': '12'}, 
            {'term': 'Fall', 'instructors': ['Timothy Pierson'], 'period': '2'}, 
            {'term': 'Fall', 'instructors': ['Alberto Quattrini Li'], 'period': '12'}, 
            {'term': 'Winter', 'instructors': ['Timothy Pierson'], 'period': '12'}, 
            {'term': 'Winter', 'instructors': ['Timothy Pierson'], 'period': '2'}
        ],
        "distribs": [
          "TLA"
        ],
        "wc": null,
      }
    
    const cs25 = {
        "course_code": {
          "course_dept": "COSC",
          "course_number": "25.01"
        },
        "course_title": "Intro to UI/UX Design I",
        "description": "COSC 25.01 is a hands-on projects-based course that teaches the concepts, principles, and practice of User Interface (UI) and User Experience (UX) Design. It is designed for students with an interest in any form of design, although we focus on the UI/UX of digital tools (e.g. mobile, web, tablets). No previous experience or coding skills needed.  Grading is based on weekly assignments, reflections, readings, and in-class exercises that build on each other and are intended to teach the foundational skills and thinking of UI/UX design. This team-based course requires a significant amount of time outside class.  Students are encouraged (but not required) to take ENGS 12 prior to taking this course. Some students will go on to take COSC 25.02, an Independent Study course that allows students to put the skills learned in COSC 25.01 into practice as a designer in the DALI Lab or through work on another project.",
        "xlists": [],
        "prereqs": [],
        "offered": [
            {'term': 'Spring', 'instructors': ['Lorie Loeb'], 'period': '3A'}, 
            {'term': 'Summer', 'instructors': ['Natalie Svoboda'], 'period': '2A'}
        ],
        "distribs": [
          "ART"
        ],
        "wc": null,
      }

    const cs52 = {
        "course_code": {
          "course_dept": "COSC",
          "course_number": "52"
        },
        "course_title": "Full-Stack Web Development",
        "description": "The Web is a powerful delivery tool for complex real-time applications.  This is an introduction to full stack Web application development — the approach of integrating numerous techniques and technologies to build modern Web applications.  Topics include: static pages, Internet protocols, layout, markup, event-driven asynchronous programming, deployment, security, scalability, and user experience. Projects include building real-time Web applications with front-end UIs and server-side APIs.",
        "xlists": [],
        "prereqs": "COSC 10",
        "offered": [{'term': 'Spring', 'instructors': ['Tim Tregubov'], 'period': '2'}],
        "distribs": [
          "TAS"
        ],
        "wc": null,
      }

    const cs98 = {
        "course_code": {
          "course_dept": "COSC",
          "course_number": "98.01"
        },
        "course_title": "Senior Design and Implementation Project I",
        "description": "Participation in a software engineering group project to meet a real-world need. Group members are responsible for all aspects of a software system, including iterative requirements analysis, design, implementation, and testing. The course also stresses customer interactions, documentation, process, and teamwork. The result is a software product of significant scope and significant benefit to a user base. Open only to students pursuing a major in Computer Science or a modified major with Computer Science as the primary part.  98.01 and 98.02 constitute a two course sequence, and they must be taken in consecutive terms, either fall/winter or winter/spring, normally in the senior year. Students are awarded one course credit for successful completion of this course upon completion of COSC-98.02 Students register for COSC-98.01 and receive a grade of “ON” (ongoing) at the end of the term.  Students then register for COSC-98.02 the subsequent term to complete the coursework. A final grade will replace the “ON” in COSC-98.01 upon completion of COSC-98.02.",
        "xlists": [],
        "prereqs": "At least two courses from COSC 50-69 or at least three courses from COSC 50-89, or permission of instructor.",
        "offered": [
            {'term': 'Fall', 'instructors': ['Tim Tregubov'], 'period': '3A'}, 
            {'term': 'Fall', 'instructors': ['Natalie Svoboda'], 'period': 'ARR'}, 
            {'term': 'Winter', 'instructors': ['Tim Tregubov'], 'period': '2A'}, 
            {'term': 'Winter', 'instructors': ['Natalie Svoboda'], 'period': '2A'}
        ],
        "distribs": [],
        "wc": null,
      }
    
      const courses = {
        "COSC 10": cs10,
        "COSC 25.01": cs25,
        "COSC 52": cs52,
        "COSC 98.01": cs98
      }
    return courses;
}
