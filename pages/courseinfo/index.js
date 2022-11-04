import Head from 'next/head'
import styles from "../../styles/Home.module.css"

export default function CourseInfo() {
    const data = {
        "crosslistCodes": ["COSC 98.01"],
        "title": "Senior Design and Implementation I",
        "description": "Participation in a software engineering group project to meet a real-world need. Group members are responsible for all aspects of a software system, including iterative requirements analysis, design, implementation, and testing. The course also stresses customer interactions, documentation, process, and teamwork. The result is a software product of significant scope and significant benefit to a user base. \
        Open only to students pursuing a major in Computer Science or a modified major with Computer Science as the primary part.  98.01 and 98.02 constitute a two course sequence, and they must be taken in consecutive terms, either fall/winter or winter/spring, normally in the senior year. \
        Students are awarded one course credit for successful completion of this course upon completion of COSC-98.02 Students register for COSC-98.01 and receive a grade of “ON” (ongoing) at the end of the term.  Students then register for COSC-98.02 the subsequent term to complete the coursework. A final grade will replace the \"ON\" in COSC-98.01 upon completion of COSC-98.02."
    }

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Classy</title>
                    <meta name="description" content="class selection made easy" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1 className={styles.title}>
                    {data.crosslistCodes[0]} {data.title}
                </h1>

                <h2 className={styles.title}>
                    Description
                </h2>
            </div>
            <div ><text className={[styles.description]}>{data.description}</text></div>
        </>
    );
}
