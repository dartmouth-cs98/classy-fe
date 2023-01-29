export default function WaitlistData() {
  const cs52 = {
    waitlist_pos: 10,
    waitlist_total: 76,
    remaining_terms: 2,
    avg_terms: 4,
    joined: 'June 21 2022',
  };
  const cs74 = {
    waitlist_pos: 2,
    waitlist_total: 14,
    remaining_terms: 1,
    avg_terms: 2,
    joined: 'April 10 2022',
  };
  const math1 = {
    waitlist_pos: 5,
    waitlist_total: 7,
    remaining_terms: 1,
    avg_terms: 1,
    joined: 'April 10 2022',
  };
  const econ1 = {
    waitlist_pos: 32,
    waitlist_total: 35,
    remaining_terms: 2,
    avg_terms: 2,
    joined: 'November 11 2022',
  };
  const courses = {
    'COSC 52': cs52,
    'COSC 74': cs74,
    'MATH 1': math1,
    'ECON 1': econ1,
  };
  return courses;
}
