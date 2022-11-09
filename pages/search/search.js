/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useCallback } from 'react';
import {
  H1, H2, H3, H4, B1, B3, TextLabel, A,
} from '../../components/ui/typography';

function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [tab, setTab] = useState('all');
  const tabs = useState(['all', 'courses', 'professors', 'distribs']);
  const [searchResults, setSearchResults] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setSearchResults(true);
  };

  const input = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  const TabBar = () => {
    // eslint-disable-next-line no-console
    console.log(tabs);
    const result = tabs.map(() => (
      <div key={tab}>
        <B1>{tab}</B1>
      </div>
    ));

    return result;
  };

  function SearchBody() {
    if (!searchResults || !searchInput) {
      return (
        <div>
          <H3>Recent Searches</H3>
          <A>See All</A>
          {/* Load course/prof cards */}
          <CourseCard id="Cosc 98" title="Introductory Economics" distrib="TLA" quality="4.0" reviews="4" />
          <ProfCard name="Natalie Svoboda" department="COSC" />

          <H3>Browse Departments</H3>
          {/* Load all departments */}
          <DepartmentCard name="Computer Science" id="COSC" />
        </div>
      );
    }

    return (
      <div>
        <TabBar />
      </div>
    );
  }

  return (
    <div>
      <input
        ref={input}
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
      />
      <SearchBody />

    </div>
  );

  // handle search query
  //   if (searchInput.length > 0) {
  //       countries.filter((country) => {
  //       return country.name.match(searchInput);
  //   })
}

function CourseCard(props) {
  const {
    distrib, quality, reviews, id, name,
  } = props;
  return (
    <div>
      <TextLabel color="var(--dark-grey)">{distrib}</TextLabel>

      <div>
        <TextLabel color="var(--darkest-grey)">Quality</TextLabel>
        <H1 color="var(--dark-orange)">{quality}</H1>
        <B3 color="var(--dark-grey)">
          {reviews}
          {' '}
          Reviews
        </B3>

        <H4>{id}</H4>
        <B1>{name}</B1>
      </div>
    </div>
  );
}

function ProfCard(props) {
  const { name, department } = props;
  return (
    <div>
      <div>
        <H4>{name}</H4>
        <B1>{department}</B1>
      </div>
    </div>
  );
}

function DepartmentCard(props) {
  const { name, id } = props;
  return (
    <div>
      <H3 color="var(--dark-orange)">{name}</H3>
      <H2 color="var(--dark-orange)">{id}</H2>
    </div>
  );
}

export default SearchPage;
