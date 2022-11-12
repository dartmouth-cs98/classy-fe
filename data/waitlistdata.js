export default function WaitlistData() {
  const cs52 = {
    course_code: {
      course_dept: 'COSC',
      course_number: '52',
    },
    waitlist_pos: 10,
    waitlist_total: 76,
    remaining_terms: 2,
    avg_terms: 4,
    joined: 'June 11 2022',
  };
  const courses = {
    'COSC 52': cs52,
  };
  return courses;
}
