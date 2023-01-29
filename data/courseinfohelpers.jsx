import React from 'react';
import Link from 'next/link';
import { B1, A } from '../components/ui/typography';

function getPrereqLinks(bucket) {
  return bucket.map((element, index) => {
    const parsed = element.split(' ');
    const dept = parsed[0];
    const num = parsed[1];
    if (parseFloat(num) > 0) {
      const url = `/courses/${dept}/${num}`;
      if (index === 0) {
        return <Link href={url} key={element}><A>{element}</A></Link>;
      }
      return (
        <Link href={url} key={url}>
          <A key={`${url}-A`}>
            {' '}
            or
            {' '}
            {element}
          </A>
        </Link>
      );
    }
    return element;
  });
}

export default function getPrereqs(prereqs, counts) {
  if (prereqs && prereqs.length > 0) {
    return prereqs.map((bucket, index) => (
      <li key={bucket.name}>
        <B1 key={`${bucket.name}-b1`}>
          {bucket.length > 1 ? `${counts[index]} of ` : ''}
          {getPrereqLinks(bucket)}
        </B1>
      </li>
    ));
  }
  return <B1 key="none">None</B1>;
}
