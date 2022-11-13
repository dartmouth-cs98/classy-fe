/* eslint-disable no-unused-vars */
import React from 'react';
import { A, H3 } from '../ui/typography';
import CourseCard from '../CourseInfoTitle';

function DefaultBody(props) {
  return (
    <div>
      <div>
        <H3>Recent Searches</H3>
        <A>See All</A>
      </div>
      {/* Load course/prof cards */}
      <CourseCard id="Cosc 98" title="Introductory Economics" distrib="TLA" quality="4.0" reviews="4" />

    </div>
  );
}

export default DefaultBody;
